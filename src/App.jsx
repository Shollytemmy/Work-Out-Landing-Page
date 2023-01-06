import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Nav } from './Components/organisms/Nav/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Nav />
      
    </div>
  )
}

export default App
