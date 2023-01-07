import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Nav } from './Components/organisms/Nav/Nav'
import { WorkOuts } from './Components/pages/WorkOuts'
import { Programs } from './Components/pages/Programs'
import { About } from './Components/pages/About'
import { Community } from './Components/pages/Community'
import { ScrollUp } from './Components/ScrollUp/ScrollUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Nav />
      <WorkOuts />
      <Programs />
      <About />
      <Community />
      <ScrollUp />
      
    </div>
  )
}

export default App
