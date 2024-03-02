import React from 'react'

const VideoSection = ({video}:{video: string}) => {
  // i am accepting the video as a props from the singlelist state passed from the parent component
  return (
    <div className='w-full h-[400px]  shadow-lg lg:h-[300px] flex justify-center '>
     <video width='800' height='450' src={video} controls controlsList='nodownload' typeof='video/mp4'></video>
    </div>
  )
}

export default VideoSection
