import React from 'react'

export const Card = ({children, styles, bg}) => {
  return (
    <article className={`${styles} border rounded-md`} style={{backgroundColor: bg}}>
        {children}
    </article>
  )
}
//

