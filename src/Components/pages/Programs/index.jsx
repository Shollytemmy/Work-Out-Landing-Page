import React from 'react'
import ArrowIcon from '../../atoms/Arrow'
import { Card } from '../../molecules/Card'
import './Programs.css'

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
      <div className="program_content">
        <h4 className='program_title'>Not sure where to start?</h4>
        <p className='program_text'>Programs offer day-to-day guidance on an interactive calendar to keep you on track.</p>
        <div  className='program_map'>
          {programs.map((program) => {
            return(
              <Card key={program.id} styles={"w-[304px] h-[190px] p-5 bg-[#323443]" }>
                <h2 className='font-semibold text-[16px] leading-6 tracking-[0.5px]'>{program.title}</h2>
                <div className='content flex mt-[20px] justify-center items-center'>
                  <p className='program_data'>{program.content}</p> 
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
