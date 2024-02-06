import Messaging from './layouts/Messaging';
import Navbar from './layouts/Navbar';

function App(): JSX.Element {
    return (
        <div className=' bg-gradient min-h-screen'>
            {/* <div className="absolute top"></div> */}
            <header className="font-custom h-fit">
                <Navbar />
            </header>
            <main className='font-custom'>
                <Messaging />
            </main>
        </div>
    );
}

export default App;
