import React from 'react'
import ArrowIcon from '../../atoms/Arrow'
import './about.css'

export const About = () => {
  return (
     <section className='about mb-[180px]' id='about'>
      <div className='about_grid'>
        <div className="left_about">
            <h2 className='about_text'>Work out at home for free.</h2>
            <p className='about_para'>We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you’ll have everything you need to reach your personal fitness goals – for free!</p>
           <button className='flex items-center p-[15px]'>
            <span className='mr-3 text-[blue]'>See More</span><ArrowIcon />
            </button>
        </div>
        <div className="right_about">
            <img src="/images/ladycomp.png" alt="ladycom" />

        </div>
          <div className="left_about">
            <img src="/images/ladyrope.png" alt="ladyrope" />
            
        </div>
        <div className="right_about">
            <h2 className='about_text'>Get more with low-cost training programs and advanced features.</h2>
            <p className='about_para'>We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you’ll have everything you need to reach your personal fitness goals – for free!</p>
            <button className='flex items-center  p-[15px]'>
            <span className='mr-3 text-[blue]'>See More</span><ArrowIcon />
            </button>
            
        </div>

      </div>
    </section>
  )
}
