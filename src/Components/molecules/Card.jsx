import React from 'react'

export const Card = ({children, styles}) => {
  return (
    <article className={`${styles} border bg-[#333] rounded-md`}>
        {children}
    </article>
  )
}

//'w-[304px] h-[190px] border p-5 bg-[#333] rounded-md'
