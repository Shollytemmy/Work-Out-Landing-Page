import React from 'react'
import { Card } from '../../molecules/Card'
import ArrowIcon from '../../atoms/Arrow'
import './Community.css'

export const Community = () => {

  const communities = [
    {
      id: 1,
      tittle: "Join for Free",
      content: "Reach your fitness goals or maintain your healthy lifestyle with professional training and support from a positive and active online community.",
      logo: ArrowIcon(),

      lists: ["~600 Full-Length Workout Videos",
      "Customizable Calendar",
      "Healthy Recipes",
      "Health and Fitness Articles",
      "Positive and Supportive Online Community",
      "No Credit Card Needed"
]
    },

      {
      id: 2,
      tittle: "WO Plus",
      content: "WO Plus includes everything you get with a free membership and adds brand new convenience features, fitness tools, and unique content.",
      logo: "join Club Now!",

      lists: ["Ads-Free Website and Videos", "Surprise Me Workout Selection Tool", "Statistics for Your Activities","Enter and Track Custom Workouts", "FB Plus Exclusive Workouts", "Trackers to See Your Progress", "FB Plus Content and Challenges", "Video Tags", "FB Plus Routines", "Rest Day Complete"]
    },
  ]
  return (
    <section className=' mb-[200px]' id='community'>
      <div className='community-div'>
        <h1 className='membership'>Membership</h1>
        <div className="bor-light h-[5px]"></div>
        <div className="membership_grid grid">
         {
          communities.map((community) => {
            return(
              <Card key={community.id} styles="p-10" >
                <h2 className='font-semibold text-[24px] leading-[50px] tracking-[0.3px] text-center'>{community.tittle}</h2>
                <div className="list">
                  <p className='text-[18px] font-normal leading-6 tracking-[0.5px] text-[gray]'>{community.content}</p>
                  
                    <div>
                      {community.lists.map((list, idx) => <li key={idx} className="font-normal text-[18px] leading-6 tracking-[0.5px]">{list}</li>)}
                      <button className='mt-5 ml-5'>
                        
                      </button>
                    </div>
                 <button className='flex mb-5 ml-8'>
            <span className='mr-3 text-[blue]'>See More</span><ArrowIcon />
            </button>
                </div>
              </Card>
            )
          })
         }
        </div>
      </div>
    </section>
  )
}
