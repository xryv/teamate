// import Messaging from './layouts/Messaging';
// import Navbar from './layouts/Navbar';
// import Header from './components/NewNavBar/Header/Header';
// import NewPages from './layouts/NewPages';
// import Register from './layouts/Register';
// import Login from './layouts/Login';
import { Box, LinearProgress } from '@mui/material';
import { useAuthContext } from './context/AuthContext';
// import { Welcome } from './layouts/Welcome';
// import { ChatContextProvider } from './context/ChatContext';

import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NewPages from './layouts/NewPages';

const Header = lazy(async () => import('./components/NewNavBar/Header/Header')); // Remplacez './Header' par le chemin réel vers votre composant Header
const Welcome = lazy(async () => import('./layouts/Welcome')); // Remplacez './Welcome' par le chemin réel vers votre composant Welcome
const Register = lazy(async () => import('./layouts/Register')); // Remplacez './Register' par le chemin réel vers votre composant Register
const Login = lazy(async () => import('./layouts/Login')); // Remplacez './Login' par le chemin réel vers votre composant Login

function App(): JSX.Element {
    const { user } = useAuthContext(['user']);

    return (
        <Suspense fallback={
            <Box sx={{
                backgroundImage: 'linear-gradient(to right, #0a3155, #172e60, #2e2966, #471d67, #5f0061)',
                minHeight: '100vh',
                minWidth: '100vw',
            }}>
                <LinearProgress color="secondary" />
            </Box>
        }>
            <Routes>
                <Route path='/' element={user !== null ? <NewPages /> : <Welcome />} />
                <Route path='/register' element={user !== null ? <NewPages /> : <Register />} />
                <Route path='/login' element={user !== null ? <NewPages /> : <Login />} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </Suspense>
    );
}

export default App;
