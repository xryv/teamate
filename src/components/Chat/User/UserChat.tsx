import { Avatar, List, ListItem, ListItemText, Typography, ListItemAvatar, Badge, ThemeProvider, styled, Box, Stack } from '@mui/material';
import customTheme from '../../../styles/customTheme';
import { useFetchRecipientUser } from '../../../hooks/useFetchRecipient';
import { Fragment } from 'react';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
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

export const UserChat = ({ chat, user }) => {
    const { recipientUser } = useFetchRecipientUser(chat, user);

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
                    }}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Stack direction='row' spacing={2}>
                            <Stack alignItems="center">
                                <StyledBadge
                                    overlap="circular"
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                    variant="dot"
                                >
                                    <Avatar
                                        alt={recipientUser?.username}
                                        src={recipientUser?.profilePicture}
                                    />
                                </StyledBadge>
                            </Stack>
                            <Stack spacing={0.3}>
                                <Typography variant='subtitle2'>{recipientUser?.username}</Typography>
                                {/* <Typography variant='body2'>{chat?.lastMessage?.message}</Typography> */}
                                <Typography variant='caption'>last message</Typography>
                            </Stack>
                        </Stack>
                        <Stack direction='column' spacing={2} alignItems={'center'} p={1} >
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
                                color="primary"
                                overlap='rectangular'
                            />

                        </Stack>
                    </Stack>
                </Box>
            </ThemeProvider>
        </>
    );
};
