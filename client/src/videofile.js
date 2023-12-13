import ReactPlayer from 'react-player';
import React, { useRef } from 'react';
const VIDEO_PATH = 'mainvideo.mp4';
function PlayerComponent() {
   const playerRef = useRef(null);
   return (
      <div className='h-screen mt-0'>
         <ReactPlayer width={`100%`} height={`100%`} playing={true} ref={playerRef} url={VIDEO_PATH} controls={true} />
      </div>
   )
};
export default PlayerComponent;