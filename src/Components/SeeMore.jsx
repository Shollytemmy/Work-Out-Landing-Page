import React from 'react'
import ArrowIcon from './atoms/Arrow'

export const SeeMore = ({seemore}) => {
  return (
    <button className=''>
            <p className='mr-3'>{seemore ? <span className='join_club'>Join Club Now!</span> : <span className='seemore'> <span className="text-[blue]">SeeMore</span><ArrowIcon /></span>}</p>
            </button>
  )
}

