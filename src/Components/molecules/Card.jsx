import React from 'react'

export const Card = ({children}) => {
  return (
    <article className='w-[304px] h-[190px] border p-5 bg-[#333] rounded-md'>
        {children}
    </article>
  )
}
