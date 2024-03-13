import { PencilLine, Trash2 } from 'lucide-react';
import { ChatListContainer, StyledTime } from './styleChatList.tsx';
import { useContext, useEffect, useRef, useState } from 'react';
import { useTransition, animated } from 'react-spring';
import { HeightContext } from '../../../layouts/NewPages';
import { type Message } from '../../../context/ChatContextProps';
import { type User } from '../../../context/AuthContextProps.ts';
import { LinearProgress, Box, ImageListItem, ImageList, Stack, IconButton, ImageListItemBar, useMediaQuery, Dialog, DialogContent, DialogActions, Button, alpha } from '@mui/material';
import { type UseFetchRecipientUserReturn } from '../../../hooks/useFetchRecipient.tsx';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import customTheme from '../../../styles/customTheme';

// import { useChatContext } from '../../../context/ChatContext.tsx';

interface ChatListProps {
    list: Message[] | undefined | null
    recipientUser: UseFetchRecipientUserReturn | undefined
    isMessagesLoading: boolean | undefined
    user: User | null | undefined
    onEdit: (id: string) => void
    onDelete: (id: string) => void
    onDeleteImg: (id: string, url: string) => void
}

type TimeProps = {
    $image?: boolean | undefined
    children: string
} & React.HTMLAttributes<HTMLElement>;

const Time = ({ $image, children }: TimeProps): JSX.Element => {
    const date = new Date(children);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();

    const time = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;

    return (
        <StyledTime $image={$image}>
            {time}
        </StyledTime>
    );
};

export function ChatList({ list, user, recipientUser, isMessagesLoading, onEdit, onDelete, onDeleteImg }: ChatListProps): JSX.Element {
    const [isHovered, setIsHovered] = useState<string>('');
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const heightStack = useContext(HeightContext);
    const [hoveredImageUrl, setHoveredImageUrl] = useState<string | undefined>(undefined);
    const [open, setOpen] = useState(false);
    const [selectedImageUrl, setSelectedImageUrl] = useState('');
    // const { isMessageLoading } = useChatContext(['isMessageLoading']);

    const handleMouseEnter = (id: string): void => {
        setIsHovered(id);
    };
    const handleMouseLeave = (): void => {
        setIsHovered('');
    };

    const handleClickOpen = (url: string): void => {
        setSelectedImageUrl(url);
        console.log('selectedImageUrl', selectedImageUrl);

        setOpen(true);
    };

    const handleClose = (): void => {
        setOpen(false);
    };

    const handleMouseEnterImg = (url: string): void => {
        setHoveredImageUrl(url);
    };

    const handleMouseLeaveImg = (): void => {
        setHoveredImageUrl(undefined);
    };

    const transitions = useTransition(list ?? [], {
        from: { opacity: 0, transform: 'translate3d(5px,10px,0px)' },
        enter: { opacity: 1, transform: 'translate3d(0px,0px,0px)' },
        leave: { opacity: 0, transform: 'translate3d(5px,0px,0)' },
        keys: message => message?._id ?? '',
    });

    useEffect(() => {
        if (messagesEndRef.current != null) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [list]);

    const isMdUp = useMediaQuery(customTheme.breakpoints.up('sm'));

    return isMessagesLoading === true && recipientUser !== null
        ? (<>
            <Box flexGrow={1}></Box>
            <LinearProgress color='error' />
        </>
        )
        : (
            <>
                <div className='flex flex-col flex-grow justify-end w-full'>
                    {list != null && list.length === 0 && (
                        <div className='w-full items-end'>
                            <p className='text-center text-slate-300'>Aucun message</p>
                        </div>
                    )}
                    {recipientUser == null && (
                        <div className='w-full items-end'>
                            <p className='text-center text-slate-300'>Sélectionnez un chat pour commencer à discuter</p>
                        </div>
                    )}
                    {list != null && list.length > 0 && recipientUser != null && (
                        <ChatListContainer $heightStack={heightStack} className='scrollbar-rounded'>
                            <Box ref={messagesEndRef} flexGrow={1} />
                            {transitions((styles, item) => (
                                <animated.li
                                    style={styles}
                                    className={`message ${user?._id === item?.senderId ? 'items-end' : 'items-start'}`}
                                    key={item?._id}
                                    onMouseEnter={() => { handleMouseEnter(item?._id); }}
                                    onMouseLeave={() => { handleMouseLeave(); }}
                                >

                                    <div className='content-time-image'>

                                        <Stack direction={'column'}>
                                            {(item?.imageUrls != null && item?.imageUrls.length > 0) &&
                                                <ImageList sx={{
                                                    width: 'auto',
                                                    height: 'auto',

                                                }} cols={item.imageUrls.length === 1 ? 1 : 2} rowHeight={'auto'} variant='standard'>
                                                    {item.imageUrls.map((url, index) =>
                                                        <ImageListItem key={index}
                                                            onMouseEnter={() => { handleMouseEnterImg(url); }}
                                                            onMouseLeave={() => { handleMouseLeaveImg(); }}
                                                            onClick={() => { handleClickOpen(url); }}

                                                            sx={{
                                                                cursor: 'pointer',
                                                            }}
                                                        >
                                                            <img src={url} alt={`Image envoyée par un utilisateur ${index}`} />

                                                            {user?._id === item?.senderId && isMdUp && <ImageListItemBar
                                                                sx={{
                                                                    background: url === hoveredImageUrl ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.0)',
                                                                    transition: 'background 0.3s',
                                                                }}
                                                                actionIcon={
                                                                    <IconButton
                                                                        sx={{
                                                                            color: url === hoveredImageUrl ? 'rgba(255, 255, 255, 0.54)' : 'rgba(255, 255, 255, 0.0)',
                                                                            transition: 'color 0.3s',
                                                                        }}
                                                                        aria-label={`delete ${url}`}
                                                                        onClick={() => { onDeleteImg(item?._id, url); }}
                                                                    >
                                                                        <DeleteForeverIcon />
                                                                    </IconButton>
                                                                }
                                                            />}
                                                        </ImageListItem>,
                                                    )}
                                                </ImageList>
                                            }
                                            {item?.text !== undefined && <p className='content'>{item?.text}</p>}
                                        </Stack>
                                        <Time $image={(item?.imageUrls != null && item?.imageUrls.length > 0)}>{item?.createdAt ?? ''}</Time>
                                    </div>
                                    {user?._id === item?.senderId && <div className={`edit-delete transition-opacity duration-100 ease-in ${user?._id === item?.senderId && isHovered === item?._id ? 'opacity-100' : 'opacity-0'}`}>
                                        {(item?.text != null || (item?.imageUrls != null && item?.imageUrls.length > 0 && item?.text != null)) &&
                                            <button className='' type='button' onClick={() => { onEdit(item?._id); }}><PencilLine size={16} /></button>}
                                        <button type='button' onClick={() => { onDelete(item?._id); }}><Trash2 size={16} /></button>
                                    </div>}
                                </animated.li>
                            ))}
                        </ChatListContainer>
                    )}
                    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth
                        aria-describedby="alert-dialog-description"
                        aria-labelledby="alert-dialog-title"
                        sx={{
                            '& .MuiDialog-paper': {
                                backgroundColor: customTheme.palette.noirTransparent.dark,
                                boxShadow: 'none',
                                backdropFilter: 'blur(10px)',
                            },
                            '& .MuiDialogActions-root': {

                            },
                            '& .MuiButtonBase-root': {
                                color: customTheme.palette.slate[300],
                                '&:hover': {
                                    backgroundColor: alpha(customTheme.palette.common.white, 0.2),
                                },
                            },
                        }}
                    >
                        <DialogContent>
                            <img src={selectedImageUrl} style={{ width: '100%', height: 'auto' }} alt="Sélectionné pour l'affichage en plein écran" />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Close</Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </>
        );
}
