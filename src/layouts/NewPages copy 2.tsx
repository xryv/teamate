import { useState } from 'react';
import { Box, Drawer, List, Divider, ListItem, ListItemText, createTheme, ListItemAvatar, Avatar, IconButton } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment'; // Import the CommentIcon component from the appropriate package

const theme = createTheme();
theme.palette.noirTransparent = {
    light: 'rgba(24, 24, 27, 0.1)',
    main: 'rgba(24, 24, 27, 0.5)',
    dark: 'rgba(24, 24, 27, 0.9)',
};
theme.palette.purplePV = {
    light: 'rgba(93, 3, 98, 0.1)',
    main: 'rgba(93, 3, 98, 0.5)',
    dark: 'rgba(93, 3, 98, 1)',
};
theme.palette.bluePV = {
    light: 'rgba(11, 49, 86, 0.1)',
    main: 'rgba(11, 49, 86, 0.5)',
    dark: 'rgba(11, 49, 86, 1)',
};
theme.palette.orangePV = {
    light: 'rgba(243, 129, 99, 0.1)',
    main: 'rgba(243, 129, 99, 0.5)',
    dark: 'rgba(243, 129, 99, 1)',
};
theme.palette.transparant = {
    light: 'rgba(177, 188, 195, 0.1)',
    main: 'rgba(177, 188, 195, 0.5)',
    dark: 'rgba(177, 188, 195, 1)',
};

export default function NewPages(): JSX.Element {
    const [open, setOpen] = useState(false);
    const [conversations, setConversations] = useState<JSX.Element[]>([]);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const handleClick = (): void => {
        const newConversation = (
            <>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Alexandre Lefebvre"
                        secondary={
                            "Ali Connors — I'll be in your neighborhood doing errands this…".length > 30
                                ? "Ali Connors — I'll be in your neighborhood doing errands this…".substring(0, 30) + '...'
                                : "Ali Connors — I'll be in your neighborhood doing errands this…"
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
            </>

        );

        setConversations(prevConversations => [...prevConversations, newConversation]);
    };

    const DrawerList = (
        <>
            <Box sx={{ width: 250, background: 'linear-gradient(to right, #0a3155, #172e60, #2e2966, #471d67, #5f0061)' }} role="presentation" onClick={toggleDrawer(false)} >
                <List sx={{
                    width: '100%',
                    maxWidth: 360,
                }}>

                    {conversations}
                </List>
            </Box>
            <Divider />
            <button onClick={handleClick}>Add Conversation</button>
        </>
    );

    return (
        <div className='min-h-screen'>
            <IconButton onClick={toggleDrawer(true)} edge='end' aria-label="comments">
                <CommentIcon fontSize='large' sx={{ color: theme.palette.transparant.dark }}/>
            </IconButton>

            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}
