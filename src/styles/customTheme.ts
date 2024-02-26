import { createTheme } from '@mui/material';

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
    100: 'rgba(177, 188, 195, 0.1)',
    200: 'rgba(177, 188, 195, 0.2)',
    300: 'rgba(177, 188, 195, 0.3)',
    400: 'rgba(177, 188, 195, 0.4)',
    500: 'rgba(177, 188, 195, 0.5)',
    600: 'rgba(177, 188, 195, 0.6)',
    700: 'rgba(177, 188, 195, 0.7)',
    800: 'rgba(177, 188, 195, 0.8)',
    900: 'rgba(177, 188, 195, 0.9)',
    1000: 'rgba(177, 188, 195, 1)',
};

theme.palette.slate = {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
};

export default theme;
