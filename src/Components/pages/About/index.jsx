import React from 'react'

export const About = () => {
  return (
     <section className='about mb-[180px]' id='about'>
      <div className='programs grid grid-cols-2 gap-x-8 gap-y-20 w-[75%] mx-auto'>
        <div className="left_about justify-self-center self-center">
            <h2 className='text-[50px] font-semibold leading-[70px] tracking-[0.83px] mb-3'>Work out at home for free.</h2>
            <p className='text-[14px] font-normal leading-6 tracking-[0.3px] text-[gray]'>We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you’ll have everything you need to reach your personal fitness goals – for free!</p>
        </div>
        <div className="right_about">
            <img src="/images/ladycomp.png" alt="ladycom" />

        </div>
          <div className="left_about">
            <img src="/images/ladyrope.png" alt="ladyrope" />
            
        </div>
        <div className="right_about justify-self-center self-center">
            <h2 className='text-[50px] font-semibold leading-[70px] tracking-[0.83px] mb-3'>Get more with low-cost training programs and advanced features.</h2>
            <p className='text-[14px] font-normal leading-6 tracking-[0.3px] text-[gray]'>We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you’ll have everything you need to reach your personal fitness goals – for free!</p>
            
        </div>

      </div>
    </section>
  )
}
