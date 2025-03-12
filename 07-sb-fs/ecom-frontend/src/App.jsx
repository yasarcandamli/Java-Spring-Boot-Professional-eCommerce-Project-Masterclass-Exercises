import './App.css'
import { FaBeer, FaGithub } from 'react-icons/fa'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

function App() {

  return (
    <div className='flex items-center justify-center h-screen bg-gray-800 text-white text-2xl font-bold'>
      Welcome
      <FaBeer />
      <AiOutlineLoading3Quarters />
      <FaGithub />
    </div>
  )
}

export default App
