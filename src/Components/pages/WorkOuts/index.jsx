import React from 'react'
import { Button } from '../../atoms'
import './WorkOuts.css'
export const WorkOuts = () => {
  return (
    <section id='workouts'>
      <div className="workouts w-[75%] border mx-auto">
        <h1 className='w-[883px] h-[340px] font-extrabold text-[172px] leading-[170px]'>workout with me</h1>
        <div className="img border w-[409px] h-[684px]">
          <img src="/images/toptag.png" alt="" className='toptag' />
          <img src="/images/man.png" alt="" />
        </div>
        <p className='w-[560px] h-[48px] font-normal text-base tracking-[0.5px] text-[gray]'>A huge selection of health and fitness content, healthy recipes and transformation stories to help you get fit and stay fit!</p>
        <button>
          <img src="/images/Button.png" alt="" />
        </button>

      </div>
    </section>
  )
}
