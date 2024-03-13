import { Mic, Paperclip, SendHorizontal, Smile } from 'lucide-react';
import { type ChangeEvent, useState, useRef, type FormEvent } from 'react';
import Picker from '@emoji-mart/react';
import { StyledIconButton } from '../../SearchBar/SearchBar';
import { Box, IconButton, ImageList, ImageListItem, ImageListItemBar, Stack, TextField, alpha, useTheme, useMediaQuery } from '@mui/material';
import customTheme from '../../../styles/customTheme';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

interface ChatBarProps {
    placeholder: string
    value: string | undefined
    name: string
    error: string | null
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    onEmojiSelect: (emoji: { native: string }) => void
    onSubmit: (e: FormEvent<HTMLFormElement>) => void
    onClick: () => void
    onChangeImages: (e: ChangeEvent<HTMLInputElement>) => void
    selectedImages: string[]
    uploading: boolean
    onClickDeleteImage: (index: string) => void
}

export function ChatBar({ placeholder, onClick, value, name, error, onChange, onEmojiSelect, onSubmit, onChangeImages, selectedImages, uploading, onClickDeleteImage }: ChatBarProps): JSX.Element {
    const [showEmojis, setShowEmojis] = useState<boolean>(false);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handlePaperclipClick = (): void => {
        fileInputRef.current?.click();
    };

    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Stack direction={'row'} component={'form'} onSubmit={onSubmit} position={'relative'}>
            {showEmojis && <>
                <Box position={'absolute'} bottom={64} className='emoji-picker'>
                    <Picker onClickOutside={() => { setShowEmojis(!showEmojis); }} onEmojiSelect={onEmojiSelect} />
                </Box>
            </>}
            {selectedImages.length > 0 &&
                (
                    <ImageList
                        sx={{
                            position: 'absolute',
                            bottom: 'calc(100% + 0.5rem)',
                            left: 0,
                            maxWidth: isMd ? '60rem' : '30rem',
                            width: '100%',
                            overflow: 'hidden',
                            borderRadius: '0.5rem',
                            boxShadow: '0 0 0.5rem 0.25rem rgba(0, 0, 0, 0.25)',
                        }}
                        cols={isMd ? 4 : 2}
                    >
                        {selectedImages.map((image, index) => {
                            const imageName = new URL(image).pathname.split('/').pop();
                            return (
                                <ImageListItem key={index} >
                                    <img src={image} alt={`Prévisualisation de l'image ${index + 1}`} loading='lazy' />
                                    <ImageListItemBar
                                        title={imageName}
                                        subtitle={`Image ${index + 1}`}
                                        actionIcon={
                                            <IconButton
                                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                                aria-label={`delete ${imageName}`}
                                                onClick={() => { onClickDeleteImage(image); }}
                                            >
                                                <DeleteForeverIcon />
                                            </IconButton>
                                        }
                                    />
                                </ImageListItem>
                            );
                        })}
                    </ImageList>

                )}

            <TextField
                id="chatInput"
                type="text"
                placeholder={placeholder}
                value={value}
                name={name}
                onChange={onChange}
                onKeyDown={(ev) => {
                    if (ev.key === 'Enter') {
                        onSubmit(ev as unknown as FormEvent<HTMLFormElement>);
                        ev.preventDefault();
                    }
                }}
                autoComplete="off"
                size='small'
                fullWidth
                margin='none'
                multiline
                maxRows={2}
                variant='filled'
                color='warning'
                helperText={error}
                sx={{
                    position: 'relative',
                    '& .MuiFormHelperText-root': {
                        position: 'absolute',
                        bottom: '100%',
                        color: customTheme.palette.error.main,
                        fontSize: '0.75rem',
                        fontWeight: 600,
                    },
                    '& .MuiFilledInput-underline:before': {
                        borderBottomColor: alpha(customTheme.palette.common.white, 0.10),
                    },
                    '& .MuiInputBase-root': {
                        padding: '0.25rem ',
                        color: alpha(customTheme.palette.common.white, 0.95),
                        backgroundColor: alpha(customTheme.palette.common.white, 0.10),
                        backdropFilter: 'blur(10rem)',
                    },
                    '& .MuiInputBase-input': {
                        padding: '0.5rem 1rem',
                    },

                }}

                InputProps={{
                    startAdornment: (
                        <Stack direction='row' alignItems={'flex-end'}>
                            <StyledIconButton onClick={() => { setTimeout(() => { setShowEmojis(!showEmojis); }, 0); }} barStyle={true} >
                                <Smile />
                            </StyledIconButton>

                            <StyledIconButton onClick={handlePaperclipClick} barStyle={true} disabled={uploading}>
                                <Paperclip />
                            </StyledIconButton>
                        </Stack>
                    ),
                    endAdornment: (
                        <Stack direction={'row'} alignItems={'flex-end'}>
                            {value !== '' || selectedImages.length > 0
                                ? (
                                    <>
                                        <StyledIconButton onClick={onClick} barStyle={true} >
                                            <SendHorizontal />
                                        </StyledIconButton>

                                    </>
                                )
                                : (
                                    <>

                                        <StyledIconButton barStyle={true}>
                                            <Mic />
                                        </StyledIconButton>
                                    </>
                                )}
                        </Stack>
                    ),
                }}
            />
            <>
                <label htmlFor="fileInput" className='hidden'>File</label>
                <input ref={fileInputRef} onChange={onChangeImages} id='fileInput' className='hidden' type="file" accept="image/*" />
            </>

        </Stack>
    );
}
