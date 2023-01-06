import React from 'react'
import ArrowIcon from '../../atoms/Arrow'
import { Card } from '../../molecules/Card'

export const Programs = () => {

  const programs = [
    {
      id: 1,
      title: "Workout Videos",
      content: "Access to hundreds of free, full-length workout videos. "
    },
    {
        id: 2,
      title: "Workout Programs",
      content: "Affordable and effective workout programs"
    },
    {
        id: 3,
      title: "Meal Plans",
      content: "Plans built with registered dietitians and nutritionists."
    },
    {
        id: 4,
      title: "WO plus All Access",
      content: "Add powerful features to your membership."
    },
  ]
  return (
    <section className='programs mb-[180px]' id='programs'>
      <div className="programs w-[75%] mx-auto">
        <h4 className='text-[40px] leading-[50px] font-[600] tracking-[0.3px]'>Not sure where to start?</h4>
        <p className='font-normal text-[16px] leading-6 tracking-[0.5px] text-[gray]'>Programs offer day-to-day guidance on an interactive calendar to keep you on track.</p>
        <div  className='flex gap-5 mt-[50px]'>
          {programs.map((program) => {
            return(
              <Card>
                <h2 className='font-semibold text-[16px] leading-6 tracking-[0.5px]'>{program.title}</h2>
                <div className='content flex mt-[20px] justify-center items-center'>
                  <p className='text-[gray] font-normal text-[14px] leading-6 tracking-[0.3px]'>{program.content}</p> 
                  <button><ArrowIcon  /></button>

                </div>
                
              </Card>

            )
          })}
        </div>
      </div>
    </section>
  )
}
