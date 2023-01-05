import React, {useState} from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Button } from '../../atoms'
import BarIcon from '../../atoms/Bars'
import TimesIcon from '../../atoms/Times'
import './nav.css'

export const Nav = () => {
    const [mobileView, setMobileView] = useState(false)
  return (
    <nav className='navbar'>
        <h3 className='text-base font-bold uppercase'>WorkOuts</h3>

        <ul className='nav_links'>
            <AnchorLink className="workouts" href="worksout">
                <li>WorkOuts</li>
            </AnchorLink>
            <AnchorLink className="workouts" href="programs">
                <li>Programs</li>
            </AnchorLink>
            <AnchorLink className="workouts" href="health">
                <li>Health Livings</li>
            </AnchorLink>
            <AnchorLink className="workouts" href="community">
                <li>Community</li>
            </AnchorLink>
            <AnchorLink className="workouts" href="stores">
                <li>Stores</li>
            </AnchorLink>

        </ul>

        <Button>
            {mobileView ? <TimesIcon /> : <BarIcon />}

        </Button> 
    </nav>
    
  )
}
