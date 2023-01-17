import React from 'react'

export const Card = ({children, styles}) => {
  return (
    <article className={`${styles} border rounded-md`}>
        {children}
    </article>
  )
}
//

