import React from 'react'
import { useState } from 'react'
import ArrowUp from '../atoms/ArrowUp';
import './scroll.css'

export const ScrollUp = () => {
    const [visible, setVisible] = useState(false)


    const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  return (
    <button className={`scrollUp ${visible ? "inline" : "none"}` } onClick={scrollToTop} >
        <ArrowUp/>
        
    </button>
  )
}
