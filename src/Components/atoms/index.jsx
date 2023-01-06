import React from 'react'
import './Button.css'
export const Button = ({children, handleClick}) => {
  return (
    <div className='mobile_btn' onClick={handleClick}>{children}</div>
  )
}
