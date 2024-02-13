import Messaging from './layouts/Messaging';
import Navbar from './layouts/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './layouts/Register';
import Login from './layouts/Login';

function App(): JSX.Element {
    return (
        <div className='flex flex-col bg-gradient min-h-screen font-custom'>
            <header className="h-fit">
                <Navbar />
            </header>
            <main className='relative flex flex-grow flex-col justify-between items-center w-full'>
                <Routes>
                    <Route path='/' element={<Navigate to='/register' />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/messaging' element={<Messaging />} />
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
