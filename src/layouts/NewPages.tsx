import { useState } from 'react';
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import { Accordion, AccordionDetails, AccordionSummary, Box, InputBase, ThemeProvider, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled, alpha } from '@mui/material/styles';
import { ButtonOrLink } from '../components/Button/Button';
import { Chat } from '../components/Chat/Chat/Chat';
import { UserComponent } from '../components/Chat/User/User';
import Header from '../components/NewNavBar/Header/Header';
import { game } from '../data/ulListNavbar';
import customTheme from '../styles/customTheme';
import profil from '../assets/profil.png';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    color: '#cbd5e1',
    border: '1px solid #cbd5e1',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'transparent',
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.15),
    },
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

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    return (
        <>
            <ThemeProvider theme={customTheme} >
                <div className="flex flex-col flex-grow relative bg-gradient overflow-hidden" id="786:1948">
                    <Header />
                    <Box sx={{ display: 'flex' }}>
                        <Box sx={{ width: open ? '40%' : '0px' }} role="show" className="flex flex-col flex-shrink-0 relative items-start gap-4 text-slate-300 bg-transparant-50 max-h-screen overflow-y-auto duration-300 ease-linear transition-all" id="792:2151" >
                            <Typography variant="h1" sx={{ fontSize: '1.125rem', lineHeight: '1.75rem', p: 2 }}>
                                Mon groupe
                            </Typography>
                            {accordions.map((accordion) => (
                                <Accordion sx={{ bgcolor: 'transparent', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)' }} className='w-full' key={accordion.id}>
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

                            ))}
                            {accordionInAccordion.map((accordion) => (
                                <Accordion sx={{ bgcolor: 'transparent', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', width: '100%' }} key={accordion.id} >
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
                                    <Search>
                                        <SearchIconWrapper>
                                            <SearchIcon />
                                        </SearchIconWrapper>
                                        <StyledInputBase
                                            placeholder="Rechercher un message…"
                                            inputProps={{ 'aria-label': 'search' }}
                                        />
                                    </Search>
                                    <img className='w-20' src={game} alt="" />
                                </Box>
                            </div>
                            <Chat />
                        </div>
                    </Box>
                </div>
            </ThemeProvider>
        </>
    );
};

export default NewPages;
