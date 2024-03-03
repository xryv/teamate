import { useEffect, useRef, useState, createContext } from 'react';
import { Box, LinearProgress, Stack, SwipeableDrawer, ThemeProvider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Chat } from '../components/Chat/Chat/Chat';
import Header from '../components/NewNavBar/Header/Header';
import { game } from '../data/ulListNavbar';
import customTheme from '../styles/customTheme';
import { useChatContext } from '../context/ChatContext';
import { useAuthContext } from '../context/AuthContext';
import { UserChat } from '../components/Chat/User/UserChat';
import MessageIcon from '@mui/icons-material/Message';
import useMediaQuery from '@mui/material/useMediaQuery';
import { SearchBar, SearchBarInDialog, SearchIconOnly, SearchUsers, StyledIconButton } from '../components/SearchBar/SearchBar';
import { type Chat as ChatProps } from '../context/ChatContextProps';

export const HeightContext = createContext(0);

const StyledSwipeableDrawer = styled(SwipeableDrawer)(({ theme }) => ({
    '& .MuiPaper-root': {
        padding: theme.spacing(4),
        background: 'linear-gradient(to bottom, #2b2965, #322666, #392367, #402067, #471b66)',
        transition: 'width 0.5s',
        color: theme.palette.common.white,
        width: '100%',

        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(2),
            width: '30rem',
        },
    },
}));

const NewPages = (): JSX.Element => {
    const [open, setOpen] = useState(false);
    const [openSearchInDialog, setOpenSearchInDialog] = useState(false);
    const { user } = useAuthContext(['user']);
    const { userChats, isUserChatsLoading, potentialChats, onlineUsers } = useChatContext(['userChats', 'isUserChatsLoading', 'potentialChats', 'onlineUsers']);

    const isMdUp = useMediaQuery(customTheme.breakpoints.up('sm'));

    const handleOpenSearchBarInDialog = (): void => {
        setOpenSearchInDialog(true);
    };

    const handleCloseSearchBarInDialog = (): void => {
        setOpenSearchInDialog(false);
    };

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const [heightStack, setHeightStack] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const resizeObserver = new ResizeObserver(entries => {
            if (!Array.isArray(entries) || (entries.length === 0)) {
                return;
            }
            setHeightStack(entries[0].target.getBoundingClientRect().height);
        });

        if (containerRef.current !== null) {
            resizeObserver.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current !== null) {
                resizeObserver.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <>
            <ThemeProvider theme={customTheme} >
                <div className="flex flex-col flex-grow relative bg-gradient overflow-hidden" id="786:1948">
                    <Header />
                    <Box sx={{ width: isUserChatsLoading === true ? '100%' : '0px' }}>
                        <LinearProgress color='warning' />
                    </Box>

                    <Box sx={{ display: 'flex' }}>
                        <StyledSwipeableDrawer
                            open={open}
                            onClose={toggleDrawer(false)}
                            onOpen={toggleDrawer(true)}
                            title='Conversations'
                            anchor="left"
                            variant='temporary'

                            disableDiscovery
                            role="show"
                            id="792:2151" >
                            <Stack spacing={4}>
                                <SearchUsers data={potentialChats} loading={isUserChatsLoading} />
                                <Stack maxHeight='calc(100vh - 200px)' overflow={'auto'} sx={{
                                    '&::-webkit-scrollbar': {
                                        width: '0.5rem',
                                    },
                                    '&::-webkit-scrollbar-track': {
                                        background: customTheme.palette.transparant[100],
                                    },
                                    '&::-webkit-scrollbar-thumb': {
                                        background: customTheme.palette.transparant[300],
                                        borderRadius: '0.5rem',
                                    },
                                    '&::-webkit-scrollbar-thumb:hover': {
                                        background: '#555',
                                    },
                                    scrollBehavior: 'smooth',

                                }} >
                                    {userChats?.map((chat: ChatProps) => {
                                        return (
                                            <UserChat onClick={toggleDrawer(false)} chat={chat} user={user} key={chat._id} onlineUsers={onlineUsers} />
                                        );
                                    })}
                                </Stack>
                            </Stack>

                        </StyledSwipeableDrawer>
                        <Stack sx={{ flexGrow: 1, height: `calc(100vh - ${68.5}px)` }} py={1} px={isMdUp ? 3 : 2}>
                            <Stack direction='row' alignItems={'flex-start'} justifyContent={'space-between'}>
                                <StyledIconButton
                                    size="large"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-label="open drawer"
                                    onClick={toggleDrawer(!open)}
                                >
                                    {!open && <MessageIcon />}
                                </StyledIconButton>
                                <HeightContext.Provider value={heightStack}>
                                    <Stack ref={containerRef} direction={'row'} spacing={2} alignItems={'flex-start'}>
                                        {isMdUp ? (<SearchBar placeholder="Rechercher un message…" inputProps={{ 'aria-label': 'search' }}></SearchBar>) : (<SearchIconOnly onClick={handleOpenSearchBarInDialog} />)}
                                        <img className='w-20' src={game} alt="" />
                                    </Stack>
                                </HeightContext.Provider>
                            </Stack>
                            <Chat />
                        </Stack>
                    </Box>
                </div>
                <SearchBarInDialog
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    onClose={handleCloseSearchBarInDialog}
                    open={openSearchInDialog}
                ></SearchBarInDialog>
            </ThemeProvider>
        </>
    );
};

export default NewPages;
