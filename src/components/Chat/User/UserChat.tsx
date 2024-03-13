import { Avatar, Typography, Badge, ThemeProvider, styled, Box, Stack } from '@mui/material';
import customTheme from '../../../styles/customTheme';
import { type UseFetchRecipientUserProps, useFetchRecipientUser } from '../../../hooks/useFetchRecipient';
import { useChatContext } from '../../../context/ChatContext';
import { type User } from '../../../context/AuthContextProps';
import { type MarkThisUserNotificationsAsReadType, type Chat, type Notification } from '../../../context/ChatContextProps';
import { useFetchLastestMessage } from '../../../hooks/useFetchLastestMessage';
import { formatDistanceToNow, isToday, isYesterday, format, differenceInDays } from 'date-fns';
import { fr } from 'date-fns/locale';

const StyledBadge = styled(Badge)(({ theme, onlineUsers }: { theme: any, onlineUsers: User[] | null }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: onlineUsers != null && onlineUsers.length > 0 ? '#44b700' : '#f44336',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

interface UserChatProps extends UseFetchRecipientUserProps {
    onClick: () => void
    onlineUsers: User[] | null | undefined
    unreadNotifications: Notification[] | null | undefined
    notifications: Notification[] | null | undefined
    markThisUserNotificationsAsRead: MarkThisUserNotificationsAsReadType
}
export const UserChat = ({ chat, onClick, user, onlineUsers, unreadNotifications, markThisUserNotificationsAsRead, notifications }: UserChatProps): JSX.Element => {
    const { recipientUser } = useFetchRecipientUser({ chat, user });
    const { updateCurrentChat } = useChatContext(['updateCurrentChat']);
    const { lastestMessage } = useFetchLastestMessage(chat as unknown as Chat);

    const thisUserNotifications = unreadNotifications?.filter((notif) => notif.senderId === recipientUser?._id);

    function formatDate(date: Date | string): string {
        const parsedDate = typeof date === 'string' ? new Date(date) : date;

        if (isToday(parsedDate) || isYesterday(parsedDate) || differenceInDays(new Date(), parsedDate) <= 7) {
            return `${format(parsedDate, 'HH:mm', { locale: fr })} - ${formatDistanceToNow(parsedDate, { addSuffix: true, locale: fr })}`;
        } else if (differenceInDays(new Date(), parsedDate) <= 7) {
            return `il y a ${formatDistanceToNow(parsedDate, { addSuffix: true, locale: fr })}`;
        } else if (differenceInDays(new Date(), parsedDate) <= 30) {
            return 'il y a plus d\'une semaine';
        } else if (differenceInDays(new Date(), parsedDate) <= 365) {
            return 'il y a plus d\'un mois';
        } else {
            return 'il y a plus d\'un an';
        }
    }

    if (updateCurrentChat === undefined) {
        throw new Error('updateCurrentChat is undefined');
    }
    return (
        <>
            <ThemeProvider theme={customTheme}>
                <Box
                    sx={{
                        width: '100%',
                        borderRadius: 1,
                        backgroundColor: 'transparant',
                        '&:hover': {
                            backgroundColor: customTheme.palette.transparant[100],
                        },
                        cursor: 'pointer',
                    }}
                    onClick={() => {
                        updateCurrentChat(chat as unknown as Chat);
                        onClick();
                        if (thisUserNotifications?.length !== 0) {
                            markThisUserNotificationsAsRead(thisUserNotifications, notifications);
                        }
                    }}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        p={1}
                        spacing={2}
                    >
                        <Stack direction='row' maxWidth={'45%'} spacing={2}>
                            <Stack alignItems="center">
                                <StyledBadge
                                    theme={customTheme}
                                    onlineUsers={(onlineUsers != null && onlineUsers.some((u: User) => u?.userId === (recipientUser?._id ?? ''))) ? onlineUsers : null}
                                    overlap="circular"
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                    variant="dot"
                                >
                                    <Avatar
                                        alt={recipientUser?.username}
                                        // src={recipientUser?.profilePicture}
                                    />
                                </StyledBadge>
                            </Stack>
                            <Stack maxWidth={'70%'} spacing={0.3}>
                                <Typography noWrap variant='subtitle2'>{recipientUser?.username}</Typography>
                                <Typography noWrap variant='caption'>{lastestMessage?.text == null ? 'Commencé à chatter !' : lastestMessage?.text }</Typography>
                            </Stack>
                        </Stack>
                        <Stack direction='column' alignItems={'end'} p={1} spacing={0.3} maxWidth={'45%'} >
                            <Badge
                                badgeContent={thisUserNotifications?.length}
                                invisible={thisUserNotifications?.length === 0}
                                showZero={false}
                                color="error"
                                sx={{
                                    '& .MuiBadge-colorWarning': {
                                        backgroundColor: '#FF7300',
                                        color: '#FFFFE6',
                                    },
                                    '& .MuiBadge-badge': {
                                        fontWeight: 'bold',
                                        position: 'static',
                                        transform: thisUserNotifications?.length === 0 ? 'scale(0)' : 'scale(1)',
                                    },

                                }}
                            />
                            <Typography
                                variant='caption'
                                noWrap
                                maxWidth={'90%'}
                                sx={{
                                    fontSize: 12,
                                    fontWeight: 600,
                                }}>
                                {lastestMessage?.createdAt != null && formatDate(lastestMessage?.createdAt)}
                            </Typography>

                        </Stack>
                    </Stack>
                </Box>
            </ThemeProvider>
        </>
    );
};
