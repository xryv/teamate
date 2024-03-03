import { Mic, Paperclip, SendHorizontal, Smile } from 'lucide-react';
import { type ChangeEvent, useState, useRef, type FormEvent } from 'react';
import Picker from '@emoji-mart/react';
import { StyledIconButton } from '../../SearchBar/SearchBar';
import { Box, Stack, TextField, alpha } from '@mui/material';
import customTheme from '../../../styles/customTheme';

interface ChatBarProps {
    placeholder: string
    value: string | undefined
    name: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    onEmojiSelect: (emoji: { native: string }) => void
    onsubmit: (e: FormEvent<HTMLFormElement>) => void
    onClick: () => void
}

export function ChatBar({ placeholder, onClick, value, name, onChange, onEmojiSelect, onsubmit }: ChatBarProps): JSX.Element {
    const [showEmojis, setShowEmojis] = useState<boolean>(false);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handlePaperclipClick = (): void => {
        fileInputRef.current?.click();
    };

    return (
        <Stack direction={'row'} component={'form'} onSubmit={onsubmit}>
            {showEmojis && <>
                <Box position={'absolute'} bottom={64} className='emoji-picker'>
                    <Picker onClickOutside={() => { setShowEmojis(!showEmojis); }} onEmojiSelect={onEmojiSelect} />
                </Box>
            </>}
            <TextField
                id="chatInput"
                // label={placeholder}
                // hiddenLabel={true}
                type="text"
                placeholder={placeholder}
                value={value}
                name={name}
                onChange={onChange}
                onKeyDown={(ev) => {
                    if (ev.key === 'Enter') {
                        onsubmit(ev as unknown as FormEvent<HTMLFormElement>);
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
                sx={{
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

                            <StyledIconButton onClick={handlePaperclipClick} barStyle={true} >
                                <Paperclip />
                            </StyledIconButton>
                        </Stack>
                    ),
                    endAdornment: (
                        <Stack direction={'row'} alignItems={'flex-end'}>
                            {value !== ''
                                ? (
                                    <>
                                        <StyledIconButton type='submit' onClick={onClick} barStyle={true} >
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
                <input ref={fileInputRef} onChange={onChange} id='fileInput' className='hidden' type="file" accept="image/*" />
            </>

        </Stack>
    );
}
