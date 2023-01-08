import React from 'react'

export const Card = ({children, styles}) => {
  return (
    <article className={`${styles} border bg-[#333] rounded-md`}>
        {children}
    </article>
  )
}


