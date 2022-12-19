import React from 'react'
import VideoListItem from './videoListItem'
const videoList = (props) => {
    const videosItems = props.videos.map((video)=>{
        return (
        <VideoListItem 
        onVideoSelect={props.onVideoSelect}
        key={video.etag} 
        video ={video}/>
        )
    });
  return (
    <ul className='col-md-4 list-group'>
     {videosItems}
    </ul>
  )
}

export default videoList