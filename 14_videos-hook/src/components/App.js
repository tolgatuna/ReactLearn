import React, {useEffect, useState} from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VIdeoDetail";
import useVideos from "../hooks/useVideos";

export default () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('Hadise');

    useEffect(() => {
        if (videos.length > 0) {
            setSelectedVideo(videos[0]);
        }
    }, [videos]);

    return (
        <div className='ui container'>
            <SearchBar onSearchSubmit={search}/>
            <div className='ui grid'>
                <div className='eleven wide column'>
                    <VideoDetail video={selectedVideo}/>
                </div>
                <div className='five wide column'>
                    <VideoList videos={videos} onSelectVideo={setSelectedVideo}/>
                </div>
            </div>
        </div>
    );
};