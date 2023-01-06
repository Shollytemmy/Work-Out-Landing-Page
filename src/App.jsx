import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Nav } from './Components/organisms/Nav/Nav'
import { WorkOuts } from './Components/pages/WorkOuts'
import { Programs } from './Components/pages/Programs'
import { HealthLiving } from './Components/pages/HealthLiving'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Nav />
      <WorkOuts />
      <Programs />
      <HealthLiving />
      
    </div>
  )
}

export default App
