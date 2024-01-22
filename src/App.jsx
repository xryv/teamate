import Navbar from "./layouts/Navbar"
import Messaging from "./layouts/Messaging"

function App() {

  return (
    <div className='min-h-screen flex flex-col bg-gradient'>
        <Navbar />
      <main>
        <Messaging/>
      </main>
    </div>
  )
}

export default App
