import { ArrowLeft, ArrowLeftCircle, ArrowRightCircle, Bell, Calendar, Home, LayoutDashboard, MoreVertical, Search, User, Users } from 'lucide-react';
import { Logo, game } from '../data/ulListNavbar';
import styledComponents, { css } from 'styled-components';
import { styled, alpha } from '@mui/material/styles';
import tw from 'twin.macro';
import { ButtonOrLink } from '../components/Button/Button';
import profil from '../assets/profil.png';
import { Accordion, AccordionDetails, AccordionSummary, Box, ThemeProvider, Typography, createTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { useState } from 'react';
import { Chat } from '../components/Chat/Chat/Chat';
import { UserComponent } from '../components/Chat/User/User';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const gradient = css`
background: linear-gradient(90deg, #97296C, #E7378B, #F4BE5C);  
background-size: 200% auto;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: gradient 3s linear infinite;

  @keyframes gradient {
    0% {background-position: 0% 50%;}
    50% {background-position: 100% 50%;}
    100% {background-position: 0% 50%;}
  }
`;

const themeColor = createTheme();
themeColor.palette.noirTransparent = {
    light: 'rgba(24, 24, 27, 0.1)',
    main: 'rgba(24, 24, 27, 0.5)',
    dark: 'rgba(24, 24, 27, 0.9)',
};
themeColor.palette.purplePV = {
    light: 'rgba(93, 3, 98, 0.1)',
    main: 'rgba(93, 3, 98, 0.5)',
    dark: 'rgba(93, 3, 98, 1)',
};
themeColor.palette.bluePV = {
    light: 'rgba(11, 49, 86, 0.1)',
    main: 'rgba(11, 49, 86, 0.5)',
    dark: 'rgba(11, 49, 86, 1)',
};
themeColor.palette.orangePV = {
    light: 'rgba(243, 129, 99, 0.1)',
    main: 'rgba(243, 129, 99, 0.5)',
    dark: 'rgba(243, 129, 99, 1)',
};
themeColor.palette.transparant = {
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
themeColor.palette.slate = {
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

const TextGradient = styledComponents.span`
  ${tw`w-full text-base text-center font-bold w-fit absolute -bottom-1 left-10 `}
  ${gradient}
`;

const Searchh = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    // marginRight: theme.spacing(1),
    // marginLeft: 0,
    width: '80%',
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
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));
const usersData = [
    { id: 1, profil, status: true, name: 'John Doe' },
    { id: 2, profil, status: false, name: 'Jane Smith' },
    { id: 3, profil, status: false, name: 'Alice Johnson' },
    { id: 4, profil, status: false, name: 'Alice Johnson' },
    { id: 5, profil, status: true, name: 'Alice Johnson' },
    { id: 6, profil, status: true, name: 'Alice Johnson' },
    { id: 7, profil, status: true, name: 'Alice Johnson' },
    { id: 8, profil, status: true, name: 'Alice Johnson' },
    { id: 9, profil, status: true, name: 'Alice Johnson' },
    { id: 10, profil, status: true, name: 'Bob Smith' },
    { id: 11, profil, status: false, name: 'Eva Johnson' },
    { id: 12, profil, status: true, name: 'Michael Brown' },
    { id: 16, profil, status: true, name: 'Alex Johnson' },
    { id: 17, profil, status: false, name: 'Olivia Smith' },
    { id: 18, profil, status: true, name: 'Sophia Johnson' },
    { id: 13, profil, status: true, name: 'Sarah Johnson' },
    { id: 14, profil, status: false, name: 'David Smith' },
    { id: 15, profil, status: true, name: 'Emily Johnson' },
];
const usersOnline = usersData.filter((user) => user.status);
const usersOffline = usersData.filter((user) => !user.status);

const buttons = [
    { id: 1, component: ArrowLeft, size: 32, strokeWidth: 1, color: 'white' },
    { id: 2, component: Home, size: 32, strokeWidth: 1, color: 'white' },
    { id: 3, component: Search, size: 32, strokeWidth: 1, color: 'white' },
    { id: 4, component: Calendar, size: 32, strokeWidth: 1, color: 'white' },
    { id: 5, component: LayoutDashboard, size: 32, strokeWidth: 1, color: 'white' },
    { id: 6, component: Users, size: 32, strokeWidth: 1, color: 'white' },
    { id: 7, component: Bell, size: 32, strokeWidth: 1, color: 'white' },
    { id: 8, component: User, size: 32, strokeWidth: 1, color: 'white' },
    { id: 9, component: MoreVertical, size: 32, strokeWidth: 1, color: 'white' },
    // Ajoutez d'autres boutons ici
];

const accordions = [
    { id: 1, title: 'En ligne', users: usersOnline },
    { id: 2, title: 'Hors ligne', users: usersOffline },
    // Ajoutez d'autres accordions ici
];
const accordionInAccordion = [
    { id: 1, titleMain: 'Salon textuels', titleOne: 'Général', titleTwo: 'Exercices', users: usersOnline },
    { id: 2, titleMain: 'Salon vocal', titleOne: 'Général', titleTwo: 'Exercices', users: usersOnline },
];

const NewPages = (): JSX.Element => {
    const [open, setOpen] = useState(false);
    // const [users, setUsers] = useState([]);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    return (
        <>
            <div className="flex items-center flex-col relative w-full h-fit bg-gradient overflow-hidden" id="786:1948">
                <div className="flex items-center w-full bg-noirTransparent-500 h-1/6" id="791:1952">
                    {buttons.filter((button => button.id === 1)).map((button, index) => (
                        <ButtonOrLink key={index}>
                            <button.component size={button.size} strokeWidth={button.strokeWidth} color={button.color} />
                        </ButtonOrLink>
                    ))}
                    <div className="flex flex-shrink-0 relative" id="789:1965">
                        <Logo width={54} height={33} />
                        <TextGradient>eamate</TextGradient>
                    </div>
                </div>
                <div className="flex flex-shrink-0 w-full h-5/6" id="797:2250">
                    <div className="flex flex-col items-center flex-shrink-0 gap-2 relative bg-noirTransparent-500" id="791:1953">
                        {buttons.filter((button => button.id !== 1)).map((button, index) => (
                            <ButtonOrLink key={index}>
                                <button.component size={button.size} strokeWidth={button.strokeWidth} color={button.color} />
                            </ButtonOrLink>
                        ))}
                    </div>
                    <Box sx={{ width: open ? '40%' : '0px' }} role="show" className="flex flex-col flex-shrink-0 relative items-start gap-4 text-slate-300 bg-noirTransparent-300 max-h-screen overflow-y-auto duration-300 ease-linear transition-all" id="792:2151" >
                        <Typography variant="h1" sx={{ fontSize: '1.125rem', lineHeight: '1.75rem', p: 2 }}>
                            Mon groupe
                        </Typography>
                        {accordions.map((accordion) => (
                            <ThemeProvider theme={themeColor} key={accordion.id}>
                                <Accordion sx={{ bgcolor: 'transparent', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)' }} className='w-full'>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon className='text-slate-300' />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        sx={{ color: theme => theme.palette.slate[300] }}
                                    >
                                        <Typography className="relative flex flex-shrink-0 w-full py-2 ">
                                            {accordion.title}
                                            <span className="absolute right-2">{accordion.users.length}</span>
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ color: theme => theme.palette.slate[300], overflowY: 'auto', height: '15rem' }}>
                                        {accordion.users.map((user) => (
                                            <UserComponent
                                                key={user.id}
                                                profil={user.profil}
                                                status={user.status}
                                                name={user.name}
                                            />
                                        ))}
                                    </AccordionDetails>
                                </Accordion>
                            </ThemeProvider>
                        ))}
                        {accordionInAccordion.map(accordion => (
                            <ThemeProvider theme={themeColor} key={accordion.id}>
                                <Accordion sx={{ bgcolor: 'transparent', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', width: '100%' }} >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon className='text-slate-300' />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        sx={{ color: theme => theme.palette.slate[300] }}

                                    >
                                        <Typography className='flex gap-1 py-2 truncate max-w-24'>
                                            {accordion.titleMain} :
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Accordion sx={{ bgcolor: 'transparent', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)' }} className='w-full'>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon className='text-slate-300' />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                                sx={{ color: theme => theme.palette.slate[300] }}
                                            >
                                                {accordion.titleOne} :
                                            </AccordionSummary>
                                            <AccordionDetails sx={{ color: theme => theme.palette.slate[300], overflowY: 'auto', height: '15rem' }}>
                                                {accordion.users.map((user) => (
                                                    <UserComponent
                                                        key={user.id}
                                                        profil={user.profil}
                                                        status={user.status}
                                                        name={user.name}
                                                    />
                                                ))}
                                            </AccordionDetails>
                                        </Accordion>
                                    </AccordionDetails>
                                    <AccordionDetails
                                        sx={{ color: theme => theme.palette.slate[300] }}
                                    >
                                        <Accordion sx={{ bgcolor: 'transparent', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)' }} className='w-full'>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon className='text-slate-300' />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                                sx={{ color: theme => theme.palette.slate[300] }}
                                            >
                                                {accordion.titleTwo} :
                                            </AccordionSummary>
                                            <AccordionDetails sx={{ color: theme => theme.palette.slate[300], overflowY: 'auto', height: '15rem' }}>
                                                {accordion.users.map((user) => (
                                                    <UserComponent
                                                        key={user.id}
                                                        profil={user.profil}
                                                        status={user.status}
                                                        name={user.name}
                                                    />
                                                ))}
                                            </AccordionDetails>
                                        </Accordion>
                                    </AccordionDetails>
                                </Accordion>
                            </ThemeProvider>
                        ))}
                    </Box>
                    <div className="flex flex-col flex-grow h-screen items-end" id="797:2249">
                        <div className="flex justify-between  w-full flex-shrink-0" id="801:2412">
                            <div className='flex items-center h-fit '>
                                <ButtonOrLink onClick={toggleDrawer(!open)}>
                                    {open ? <ArrowLeftCircle size={32} strokeWidth={1} color='white' /> : <ArrowRightCircle size={32} strokeWidth={1} color='white' />}

                                </ButtonOrLink>
                                <h2 className="text-slate-300" id="792:2153">Canal</h2>
                            </div>
                            <Box sx={{}} className='flex flex-col w-fit gap-4 items-end pt-2 pr-2 duration-300 ease-linear transition-all'>
                                <Searchh>
                                    <SearchIconWrapper>
                                        <SearchIcon />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Search…"
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </Searchh>
                                <img className='w-20' src={game} alt="" />
                            </Box>
                        </div>
                        <Chat />
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewPages;
