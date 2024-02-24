// import Messaging from './layouts/Messaging';
import Navbar from './layouts/Navbar';
import NewPages from './layouts/NewPages';
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './layouts/Register';
import Login from './layouts/Login';
import { useAuthContext } from './context/AuthContext';
import { ChatContextProvider } from './context/ChatContext';

function App(): JSX.Element {
    const { user } = useAuthContext(['user']);
    return (
        <ChatContextProvider user={user}>
            <div className='flex flex-col bg-gradient min-h-screen font-custom'>
                <header className="h-fit">
                    <Navbar />
                </header>
                <main className='relative flex flex-grow flex-col justify-between items-center w-full'>
                    <Routes>
                        <Route path='/' element={user !== null ? <NewPages/> : <Login/>} />
                        <Route path='/register' element={user !== null ? <NewPages/> : <Register/>} />
                        <Route path='/login' element={user !== null ? <NewPages/> : <Login/>} />
                        <Route path='*' element={<Navigate to='/' />} />
                    </Routes>
                </main>
            </div>
        </ChatContextProvider>
    );
}

export default App;
