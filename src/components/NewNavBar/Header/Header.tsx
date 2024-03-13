import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Badge, MenuItem, Menu, Button, Link, ThemeProvider, useMediaQuery, useTheme, Stack, Divider, ListItemText, MenuList } from '@mui/material';
import { AccountCircle, Mail as MailIcon, Notifications as NotificationsIcon, MoreVert as MoreIcon } from '@mui/icons-material';
import LogoTeamateIcon from '../../Logo/LogoTeamateIcon';
import { useAuthContext } from '../../../context/AuthContext';
import customTheme from '../../../styles/customTheme';
import { SearchBar, SearchBarInDialog, SearchIconOnly, StyledIconButton } from '../../SearchBar/SearchBar';
import { BurgerIconUI } from '../../Button/Button';
import { useChatContext } from '../../../context/ChatContext';
import { unreadNotificationsFunc } from '../../../utils/unreadNotifications';
import { formatDistanceToNow, isToday, isYesterday, format, differenceInDays } from 'date-fns';
import { fr } from 'date-fns/locale';

const pages = ['Accueil', 'Événement', 'Calendrier'];

export default function Header(): JSX.Element {
    const { logoutUser } = useAuthContext();
    const { user } = useAuthContext(['user']);
    const { notifications, userChats, allUsers, markAllNotificationsAsRead, markNotificationAsRead } = useChatContext(['notifications', 'userChats', 'allUsers', 'markAllNotificationsAsRead', 'markNotificationAsRead']);

    const unreadNotifications = unreadNotificationsFunc(notifications);
    const modifiedNotifications = notifications.map((n) => {
        const sender = allUsers.find((u) => u._id === n.senderId);
        return { ...n, senderName: sender?.username };
    });

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
    const [notificationsAnchorEl, setNotificationsAnchorEl] = React.useState<null | HTMLElement>(null);

    const [open, setOpen] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);
    const [hoveredPage, setHoveredPage] = React.useState<string | null>(null);
    const isMdUp = useMediaQuery(customTheme.breakpoints.up('sm'));

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const notificationsOpen = Boolean(notificationsAnchorEl);

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

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

    const handleOpen = (): void => {
        if (isSmallScreen) {
            setOpen(true);
        }
    };

    const handleClose = (): void => {
        setOpen(false);
    };

    const handleNoticationsMenuOpen = (event: React.MouseEvent<HTMLElement>): void => {
        setNotificationsAnchorEl(event.currentTarget);
        console.log('NotificationsMenuOpen');
    };

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>): void => {
        setAnchorEl(event.currentTarget);
        console.log('ProfileMenuOpen');
    };

    const handleMobileMenuClose = (): void => {
        setMobileMoreAnchorEl(null);
    };

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>): void => {
        setAnchorElNav(event.currentTarget);
        console.log('OpenNavMenu');
        // nav
    };

    const handleCloseNavMenu = (): void => {
        setAnchorElNav(null);
        setIsHovered(false);
        console.log('CloseNavMenu');
        // nav
    };

    const handleMenuClose = (): void => {
        setAnchorEl(null);
        handleMobileMenuClose();
        console.log('MenuClose');
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>): void => {
        setMobileMoreAnchorEl(event.currentTarget);
        console.log('MobileMenuOpen');
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={() => {
                setAnchorEl(null);
                console.log('MenuClose');
            }}
            sx={{
                '& .MuiMenu-paper': {
                    backgroundColor: customTheme.palette.bluePV.dark,
                    color: customTheme.palette.slate[300],
                },
                '& .MuiMenuItem-root': {
                    '&:hover': {
                        backgroundColor: customTheme.palette.transparant[100],
                    },
                },
            }}

        >
            <MenuItem onClick={handleMenuClose}>{user?.username}</MenuItem>
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={() => {
                handleMenuClose();
                if (logoutUser !== undefined && logoutUser !== null) {
                    logoutUser();
                }
            }}>Déconnexion</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={() => {
                handleMobileMenuClose();
                setAnchorEl(null);
                console.log('MobileMenuClose');
            }}
            sx={{
                '& .MuiMenu-paper': {
                    backgroundColor: customTheme.palette.bluePV.dark,
                    color: customTheme.palette.slate[300],
                },
                '& .MuiMenuItem-root': {
                    '&:hover': {
                        backgroundColor: customTheme.palette.transparant[100],
                    },
                },
            }}
        >
            <MenuItem>
                <StyledIconButton
                    size="large"
                    ria-label="show 4 new mails"
                    menuStyle={true}
                >
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </StyledIconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem onClick={handleNoticationsMenuOpen}>
                <StyledIconButton
                    size="large"
                    aria-label={`show ${unreadNotifications.length} new notifications`}
                    menuStyle={true}
                >
                    <Badge badgeContent={unreadNotifications.length} color="error">
                        <NotificationsIcon />
                    </Badge>
                </StyledIconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <StyledIconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    menuStyle={true}

                >
                    <AccountCircle />
                </StyledIconButton>
                <p>Mon Compte</p>
            </MenuItem>
        </Menu>
    );

    const renderNoticationsMenu = (
        <Menu
            anchorEl={notificationsAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id="notifications-menu"
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={notificationsOpen}
            onClose={() => {
                setNotificationsAnchorEl(null);
                console.log('NotificationsMenuClose');
            }}
            sx={{
                '& .MuiMenu-paper': {
                    backgroundColor: customTheme.palette.bluePV.dark,
                    color: customTheme.palette.slate[300],
                },
                '& .MuiMenuItem-root': {
                    '&:hover': {
                        backgroundColor: customTheme.palette.transparant[100],
                    },
                },
            }}
        >
            <MenuList color='warning' sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                height: '100%',
                padding: '0',
                margin: '0',

            }}>
                <MenuItem sx={{
                    color: customTheme.palette.slate[300],
                    paddingY: '0.5rem',
                }}>
                    Notifications
                </MenuItem>
                {unreadNotifications.length > 0 && <MenuItem
                    onClick={() => {
                        markAllNotificationsAsRead(notifications);
                        setNotificationsAnchorEl(null);
                    }}
                    sx={{
                        color: customTheme.palette.slate[300],
                    }}>
                    Tout marquer comme lu
                </MenuItem>}

            </MenuList>
            <Divider sx={{ backgroundColor: customTheme.palette.slate[300] }} />
            {modifiedNotifications.map((n) => (
                <MenuItem key={n._id} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    marginBottom: '0.1rem',
                    backgroundColor: customTheme.palette.orangePV.light,
                    '&:hover': {
                        backgroundColor: customTheme.palette.orangePV.main,
                    },

                }}>
                    <ListItemText
                        onClick={() => {
                            markNotificationAsRead(n, userChats, user, notifications);
                            setNotificationsAnchorEl(null);
                        }}
                        sx={{
                            width: '100%',
                            color: customTheme.palette.slate[300],
                            paddingY: '0.5rem',

                            '& .MuiListItemText-primary': {
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                fontSize: '0.9rem',
                                fontWeight: 600,
                            },
                            '& .MuiListItemText-secondary': {
                                fontSize: '0.7rem',
                                color: customTheme.palette.slate[300],

                            },
                        }}
                        primary={
                            <>
                                <Typography sx={{ display: 'flex', flexDirection: 'row' }} noWrap >{n.senderName}
                                    <Typography pl={0.5} noWrap>
                                        vous a envoyé un message
                                    </Typography>
                                </Typography>
                                <Badge color='warning' variant='dot' invisible={n.isRead}
                                    sx={{
                                        '& .MuiBadge-colorWarning': {
                                            backgroundColor: '#FF7300',
                                            color: '#FFFFE6',
                                        },
                                        '& .MuiBadge-badge': {
                                            fontWeight: 'bold',
                                            position: 'static',
                                            transform: 'none',
                                        },
                                        '& .MuiBadge-dot': {
                                            width: '0.75rem',
                                            height: '0.75rem',
                                            borderRadius: '50%',
                                        },

                                    }}
                                />
                            </>
                        }
                        secondary={formatDate(n.date)}
                    />
                </MenuItem>
            ))}
            {unreadNotifications.length < 1 && <MenuItem sx={{
                color: customTheme.palette.slate[300],
                paddingY: '1rem',
            }}>
                Aucune nouvelle notification
            </MenuItem>}

        </Menu>
    );

    return (
        <>
            <ThemeProvider theme={theme}>
                <Stack height={68.5}>
                    <AppBar position="static" color="transparent">
                        <Toolbar>
                            <Box sx={{ flexGrow: 1, py: 1, display: { xs: 'flex', md: 'none' } }}>
                                <BurgerIconUI
                                    size='large'
                                    aria-label="open drawer"
                                    isOpen={isHovered}
                                    onClick={(event) => {
                                        setIsHovered(!isHovered);
                                        handleOpenNavMenu(event);
                                    }}
                                />
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                        '& .MuiMenu-paper': {
                                            backgroundColor: customTheme.palette.bluePV.dark,
                                            color: customTheme.palette.slate[300],
                                        },
                                        '& .MuiMenuItem-root': {
                                            '&:hover': {
                                                backgroundColor: customTheme.palette.transparant[100],
                                            },
                                        },
                                    }}
                                >
                                    {pages.map((page) => (
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">{page}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                {pages.map((page) => (
                                    <Stack key={page} sx={{ my: 2 }}>
                                        <Button
                                            onClick={handleCloseNavMenu}
                                            sx={{ color: customTheme.palette.slate[200], display: 'block', '&:hover': { color: customTheme.palette.slate[300] } }}
                                            onMouseEnter={() => { setHoveredPage(page); }}
                                            onMouseLeave={() => { setHoveredPage(null); }}
                                        >
                                            {page}
                                        </Button>
                                        <Divider sx={{
                                            width: hoveredPage === page ? '100%' : '0%',
                                            backgroundColor: customTheme.palette.common.white,
                                            height: '1px',
                                            transition: 'width 0.5s',
                                        }} />
                                    </Stack>
                                ))}
                            </Box>
                            <LogoTeamateIcon
                                id="md"
                                href='/'
                                sx={{
                                    width: '3rem',
                                    height: '100%',
                                    marginLeft: '1rem',
                                }}
                            />
                            <Link
                                variant="h5"
                                noWrap
                                href="/"
                                sx={{
                                    fontWeight: 700,
                                    letterSpacing: '.1rem',
                                    color: 'transparent',
                                    textDecoration: 'none',
                                    background: 'linear-gradient(90deg, #E9695B, #E7378B, #F4BE5C)',
                                    backgroundSize: '200% auto',
                                    WebkitBackgroundClip: 'text',
                                    backgroundClip: 'text',
                                    animation: 'gradient 3s linear infinite',
                                    '@keyframes gradient': {
                                        '0%': { backgroundPosition: '0% 50%' },
                                        '50%': { backgroundPosition: '100% 50%' },
                                        '100%': { backgroundPosition: '0% 50%' },
                                    },
                                }}
                            >
                                eamate
                            </Link>
                            <Box sx={{ flexGrow: 1 }} />
                            {isMdUp ? (<SearchBar placeholder="Search" inputProps={{ 'aria-label': 'search' }}></SearchBar>) : (<SearchIconOnly onClick={handleOpen} />)}
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <StyledIconButton
                                    size="large"
                                    aria-label="show 4 new mails"
                                >
                                    <Badge badgeContent={4} color="error">
                                        <MailIcon />
                                    </Badge>
                                </StyledIconButton>
                                <StyledIconButton
                                    size="large"
                                    aria-label={`show ${unreadNotifications.length} new notifications`}
                                    onClick={handleNoticationsMenuOpen}
                                >
                                    <Badge badgeContent={unreadNotifications.length} color="error">
                                        <NotificationsIcon />
                                    </Badge>
                                </StyledIconButton>
                                <StyledIconButton
                                    size="large"
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    onClick={handleProfileMenuOpen}
                                >
                                    <AccountCircle />
                                </StyledIconButton>
                            </Box>
                            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                                <StyledIconButton
                                    size="large"
                                    aria-label="show more"
                                    aria-controls={mobileMenuId}
                                    aria-haspopup="true"
                                    onClick={handleMobileMenuOpen}
                                >
                                    <MoreIcon />
                                </StyledIconButton>
                            </Box>
                        </Toolbar>
                    </AppBar>
                    {renderMobileMenu}
                    {renderMenu}
                    {renderNoticationsMenu}
                </Stack>
                <SearchBarInDialog
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    onClose={handleClose}
                    open={open}
                ></SearchBarInDialog>
            </ThemeProvider>
        </>
    );
}
