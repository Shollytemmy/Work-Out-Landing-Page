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
        <div className="b-bottom"></div>
        <div className="membership_grid">
         {
          communities.map((community) => {
            return(
              <Card key={community.id} styles="p-10 bg-[#232532]" >
                <h2 className='community_title'>{community.tittle}</h2>
                <div className="list">
                  <p className='community_content'>{community.content}</p>
                  
                    <div className='mb-8'>
                      {community.lists.map((list, idx) => <li key={idx} className="community_list">{list}</li>)}
                      
                    </div>
                 <button className='flex text-center items-center mb-5 ml-8 p-[15px]'>
            <span className='mr-3 text-[blue]'>See More</span><ArrowIcon style={{verticalAlign: "middle"}} />
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
