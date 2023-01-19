import React from 'react'
import ArrowIcon from './atoms/Arrow'

export const SeeMore = ({seemore}) => {
  return (
    <button className=''>
            <p className='mr-3'>{seemore ? <span className='join_club'>Join Club Now!</span> : <span className='seemore'> <span className="text-[blue]">SeeMore</span><ArrowIcon /></span>}</p>
            </button>
  )
}


/**   <button className='flex text-center items-center mb-5 ml-8 p-[15px]'>
            <span className='mr-3 text-[blue]'>See More</span><ArrowIcon style={{verticalAlign: "middle"}} />
            </button> */