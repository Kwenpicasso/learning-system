import React from 'react'

const VideoSection = ({video}:{video: string}) => {
  // i am accepting the video as a props from the singlelist state 
  return (
    <div className='w-full h-[450px]  shadow-lg lg:h-[300px] flex justify-center '>
     <video width='800' height='300' src={video} controls controlsList='nodownload' typeof='video/mp4'></video>
    </div>
  )
}

export default VideoSection
