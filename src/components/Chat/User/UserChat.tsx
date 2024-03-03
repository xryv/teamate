import { Avatar, Typography, Badge, ThemeProvider, styled, Box, Stack } from '@mui/material';
import customTheme from '../../../styles/customTheme';
import { type UseFetchRecipientUserProps, useFetchRecipientUser } from '../../../hooks/useFetchRecipient';
import { useChatContext } from '../../../context/ChatContext';
import { type User } from '../../../context/AuthContextProps';

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
}
export const UserChat = ({ chat, onClick, user, onlineUsers }: UserChatProps): JSX.Element => {
    const { recipientUser } = useFetchRecipientUser({ chat, user });
    const { updateCurrentChat } = useChatContext(['updateCurrentChat']);
    // console.log('onlineUsers', onlineUsers);
    // console.log('recipientUser', recipientUser);

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
                        bgcolor: 'transparant',
                        '&:hover': {
                            bgcolor: 'noirTransparent.light',
                        },
                        cursor: 'pointer',
                    }}
                    onClick={() => {
                        updateCurrentChat(chat);
                        onClick();
                    }}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        p={1}
                        spacing={3}
                    >
                        <Stack direction='row' maxWidth={'50%'} spacing={2}>
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
                            <Stack maxWidth={'100%'} spacing={0.3}>
                                <Typography noWrap variant='subtitle2'>{recipientUser?.username}</Typography>
                                {/* <Typography variant='body2'>{chat?.lastMessage?.message}</Typography> */}
                                <Typography noWrap variant='caption'>last message</Typography>
                            </Stack>
                        </Stack>
                        <Stack direction='column' alignItems={'center'} p={1} >
                            <Typography
                                variant='caption'
                                sx={{
                                    fontSize: 12,
                                    fontWeight: 600,
                                }}>
                                9:36
                            </Typography>
                            <Badge
                                // badgeContent={chat?.unreadMessages}
                                badgeContent={2}
                                color="error"
                                sx={{
                                    '& .MuiBadge-colorWarning': {
                                        backgroundColor: '#FF7300',
                                        color: '#FFFFE6', // #FFFFE6
                                    },
                                    '& .MuiBadge-badge': {
                                        fontWeight: 'bold',
                                        position: 'static',
                                        transform: 'none',
                                    },

                                }}
                            />

                        </Stack>
                    </Stack>
                </Box>
            </ThemeProvider>
        </>
    );
};
