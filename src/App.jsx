import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Nav } from './Components/organisms/Nav/Nav'
import { WorkOuts } from './Components/pages/WorkOuts'
import { Programs } from './Components/pages/Programs'
import { About } from './Components/pages/About'
import { Community } from './Components/pages/Community'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Nav />
      <WorkOuts />
      <Programs />
      <About />
      <Community />
      
    </div>
  )
}

export default App
