import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Badge, MenuItem, Menu, Button, Link, ThemeProvider, useMediaQuery, useTheme, Stack, Divider } from '@mui/material';
import { AccountCircle, Mail as MailIcon, Notifications as NotificationsIcon, MoreVert as MoreIcon } from '@mui/icons-material';
import LogoTeamateIcon from '../../Logo/LogoTeamateIcon';
import { useAuthContext } from '../../../context/AuthContext';
import customTheme from '../../../styles/customTheme';
import { SearchBar, SearchBarInDialog, SearchIconOnly, StyledIconButton } from '../../SearchBar/SearchBar';
import { BurgerIconUI } from '../../Button/Button';

const pages = ['Accueil', 'Événement', 'Calendrier'];

export default function Header(): JSX.Element {
    const { logoutUser } = useAuthContext();
    const { user } = useAuthContext(['user']);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null,
    );
    const [open, setOpen] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);
    const [hoveredPage, setHoveredPage] = React.useState<string | null>(null);

    const isMdUp = useMediaQuery(customTheme.breakpoints.up('sm'));

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

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
        setIsHovered(false);
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
            sx={{ '& .MuiMenu-paper': { backgroundColor: customTheme.palette.slate[300] } }}

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
            onClose={handleMobileMenuClose}
            sx={{ '& .MuiMenu-paper': { backgroundColor: customTheme.palette.slate[300] } }}
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
            <MenuItem>
                <StyledIconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    menuStyle={true}
                >
                    <Badge badgeContent={17} color="error">
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

    return (
        <>
            <ThemeProvider theme={theme}>
                <Box sx={{ flexGrow: 1, height: 68.5 }}>
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
                                        '& .MuiMenu-paper': { backgroundColor: customTheme.palette.slate[300] },

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
                                    aria-label="show 17 new notifications"
                                >
                                    <Badge badgeContent={17} color="error">
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
                </Box>
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
