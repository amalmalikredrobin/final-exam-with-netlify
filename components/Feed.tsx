import React from 'react'
import TweetBox from './TweetBox'
import {
  TwitterTimelineEmbed
} from "react-twitter-embed";

const  Feed = () => {
  return (
    <div className='col-span-7 lg:col-span-5 border-x max-h-screen overflow-scroll'>
      <div className="flex items-center justify-between">
        <h1 className='p-5 pb-0 text-xl font-bold'>Home</h1>
        <img src='assets/images/refresh.svg' className='h-5 w-5 cursor-pointer mr-5 mt-5' />
      </div>
        <div>
          <TweetBox />
        </div>
        <div>{/* Tweet */}

        <TwitterTimelineEmbed sourceType="profile"
        screenName="Australia"
        options={{ height: 900 }} />
        </div>
        
    </div>

  )
}

export default  Feed