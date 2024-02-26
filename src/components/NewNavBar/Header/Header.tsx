import * as React from 'react';
import { styled, alpha, AppBar, Box, Toolbar, IconButton, Typography, InputBase, Badge, MenuItem, Menu, Button, Dialog, Link, ThemeProvider, useMediaQuery, useTheme } from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon, AccountCircle, Mail as MailIcon, Notifications as NotificationsIcon, MoreVert as MoreIcon } from '@mui/icons-material';
import LogoTeamateIcon from '../../Logo/LogoTeamateIcon';
import { useAuthContext } from '../../../context/AuthContext';
import customTheme from '../../../styles/customTheme';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    color: '#cbd5e1',
    border: '1px solid #cbd5e1',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'transparent',
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.15),
    },
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    width: 'auto',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '0ch',
        [theme.breakpoints.up('sm')]: {
            width: '10ch',
        },
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const DialogSearch = styled('div')(({ theme }) => ({
    position: 'relative',
    // borderRadius: theme.shape.borderRadius,
    borderRadius: '.5rem',
    border: '1px solid #cbd5e1',
    backgroundColor: alpha(theme.palette.grey[800], 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.grey[900], 0.25),
    },
    width: '100%', // make the width 100%
}));

const DialogSearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const DialogStyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%', // make the width 100%
    },
}));

const pages = ['Accueil', 'Événement', 'Calendrier'];

export default function Header(): JSX.Element {
    const { logoutUser } = useAuthContext();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null,
    );
    const [open, setOpen] = React.useState(false);
    const [search, setSearch] = React.useState('');

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearch(event.target.value);
    };
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleOpen = (): void => {
        if (isSmallScreen) {
            setOpen(true);
        }
    };

    const handleClose = (): void => {
        setOpen(false);
    };

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>): void => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseNavMenu = (): void => {
        setAnchorElNav(null);
    };

    const handleMobileMenuClose = (): void => {
        setMobileMoreAnchorEl(null);
    };

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>): void => {
        setAnchorElNav(event.currentTarget);
    };

    const handleMenuClose = (): void => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>): void => {
        setMobileMoreAnchorEl(event.currentTarget);
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
            onClose={handleMenuClose}
        >
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
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton
                    size="large"
                    ria-label="show 4 new mails"
                    style={{ color: customTheme.palette.bluePV.dark }}

                >
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    style={{ color: customTheme.palette.bluePV.dark }}
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    style={{ color: customTheme.palette.bluePV.dark }}
                >
                    <AccountCircle />
                </IconButton>
                <p>Mon Compte</p>
            </MenuItem>
        </Menu>
    );

    return (
        <>
            <ThemeProvider theme={theme}>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static" color="transparent">
                        <Toolbar>
                            <Box sx={{ flexGrow: 1, py: 1, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    aria-label="open drawer"
                                    onClick={handleOpenNavMenu}
                                    style={{ color: customTheme.palette.slate[300] }}
                                >
                                    <MenuIcon />
                                </IconButton>
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
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>
                            <LogoTeamateIcon
                                id="md"
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
                                    flexGrow: 1,
                                    fontWeight: 700,
                                    letterSpacing: '.1rem',
                                    color: 'transparent',
                                    textDecoration: 'none',
                                    background: 'linear-gradient(90deg, #97296C, #E7378B, #F4BE5C)',
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
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                    onClick={handleOpen}
                                />
                            </Search>
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="show 4 new mails"
                                    style={{ color: customTheme.palette.slate[300] }}
                                >
                                    <Badge badgeContent={4} color="error">
                                        <MailIcon />
                                    </Badge>
                                </IconButton>
                                <IconButton
                                    size="large"
                                    aria-label="show 17 new notifications"
                                    style={{ color: customTheme.palette.slate[300] }}
                                >
                                    <Badge badgeContent={17} color="error">
                                        <NotificationsIcon />
                                    </Badge>
                                </IconButton>
                                <IconButton
                                    size="large"
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    onClick={handleProfileMenuOpen}
                                    style={{ color: customTheme.palette.slate[300] }}
                                >
                                    <AccountCircle />
                                </IconButton>
                            </Box>
                            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="show more"
                                    aria-controls={mobileMenuId}
                                    aria-haspopup="true"
                                    onClick={handleMobileMenuOpen}
                                    style={{ color: customTheme.palette.slate[300] }}
                                >
                                    <MoreIcon />
                                </IconButton>
                            </Box>
                        </Toolbar>
                    </AppBar>
                    {renderMobileMenu}
                    {renderMenu}
                </Box>
                <Dialog fullWidth open={open} onClose={handleClose} sx={{
                    '& .MuiDialog-paper': {
                        bgcolor: 'transparent', // change the background color
                        color: alpha(theme.palette.common.white, 0.95), // change the text color
                        borderRadius: '.5rem',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                }}>
                    <DialogSearch>
                        <DialogSearchIconWrapper>
                            <SearchIcon />
                        </DialogSearchIconWrapper>
                        <DialogStyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={handleSearchChange}
                            value={search}
                            multiline
                            maxRows={5}
                        />
                    </DialogSearch>
                </Dialog>
            </ThemeProvider>
        </>
    );
}
