import Messaging from './layouts/Messaging';
import Navbar from './layouts/Navbar';

function App(): JSX.Element {
    return (
        <>
            <header className="font-custom h-fit">
                <Navbar />
            </header>
            <main className='font-custom bg-gradient min-h-screen'>
                <Messaging />
            </main>
        </>
    );
}

export default App;
