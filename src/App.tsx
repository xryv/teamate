import Messaging from './layouts/Messaging';
import Navbar from './layouts/Navbar';

function App(): JSX.Element {
    return (
        <div className='flex flex-col bg-gradient min-h-screen font-custom'>
            <header className="h-fit">
                <Navbar />
            </header>
            <main className='relative flex flex-grow flex-col justify-between items-center w-full'>
                <Messaging />
            </main>
        </div>
    );
}

export default App;
