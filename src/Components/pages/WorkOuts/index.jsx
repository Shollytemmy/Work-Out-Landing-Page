import React from 'react'
import { Button } from '../../atoms'
import './WorkOuts.css'

export const WorkOuts = () => {
  return (
    <section id='workouts' className='mb-[200px] mt-20 section'>
      <div className="workouts">
        <h1 className='work_title'>workout with me</h1>
        <div className="main_img">
          <img src="/images/toptag.png" alt="" className='toptag' />
          
          <img src="/images/man.png" alt="" className='man' />
          
        </div>
        <p className='main_text'>A huge selection of health and fitness content, healthy recipes and transformation stories to help you get fit and stay fit!</p>
        <div className="join_btn">
          <button className='join_btn  mt-5'>
          <img src="/images/Button.png" alt="" />
        </button>

        </div>
        
        <img src="/images/buttomtag.png" alt=""  className='buttomtag'/>
        <img src="/images/right-tag.png" alt="" className='right-tag'/>
        <img src="/images/Section.png" alt="" className='nike_img mt-10'/>

      </div>
    </section>
  )
}
