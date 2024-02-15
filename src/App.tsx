import Messaging from './layouts/Messaging';
import Navbar from './layouts/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './layouts/Register';
import Login from './layouts/Login';
import { useAuthContext } from './context/AuthContext';

function App(): JSX.Element {
    const { user } = useAuthContext(['user']);
    return (
        <div className='flex flex-col bg-gradient min-h-screen font-custom'>
            <header className="h-fit">
                <Navbar />
            </header>
            <main className='relative flex flex-grow flex-col justify-between items-center w-full'>
                <Routes>
                    <Route path='/' element={user !== null ? <Messaging/> : <Login/>} />
                    <Route path='/register' element={user !== null ? <Messaging/> : <Register/>} />
                    <Route path='/login' element={user !== null ? <Messaging/> : <Login/>} />
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
