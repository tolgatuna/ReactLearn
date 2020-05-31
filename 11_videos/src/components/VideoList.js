import React from "react";
import Video from "./VideoItem";


export default ({videos, onSelectVideo}) => {
    return (
        <div className='ui relaxed divided list'>
            {videos.map(video => {
                return <Video
                    key={video.id.videoId}
                    onSelectVideo={onSelectVideo}
                    video={video}/>
            })}
        </div>
    )
};
