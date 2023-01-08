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
        <h3 className='logo'>WorkOuts</h3>

        <ul className={mobileView ? "mobileView_links": 'nav_links'}
        onClick={() => setMobileView(false)} >
            <AnchorLink className="workouts" href="#workouts">
                <li>WorkOuts</li>
            </AnchorLink>
            <AnchorLink className="workouts" href="#programs">
                <li>Programs</li>
            </AnchorLink>
            <AnchorLink className="workouts" href="#healths">
                <li>Health Livings</li>
            </AnchorLink>
            <AnchorLink className="workouts" href="#community">
                <li>Community</li>
            </AnchorLink>
            <AnchorLink className="workouts" href="#about">
                <li>About</li>
            </AnchorLink>
            <AnchorLink className="workouts" href="#stores">
                <li>Stores</li>
            </AnchorLink>

        </ul>

        <Button handleClick={() => setMobileView(!mobileView)}>
            {mobileView ? <TimesIcon /> : <BarIcon />}

        </Button> 
    </nav>
    
  )
}

