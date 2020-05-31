import React from "react";
import SearchBar from "./SearchBar";
import {searchFromYoutube} from "../api/youtubeApi";
import VideoList from "./VideoList";
import VideoDetail from "./VIdeoDetail";

export default class App extends React.Component {

    state = {videos: [], selectedVideo: null}

    componentDidMount() {
        this.onSearchSubmit('Hadise');
    }

    onSearchSubmit = async (term) => {
        let response = await searchFromYoutube(term);
        this.setState({videos: response.data.items})
        if (this.state.videos.length > 0) {
            this.setState({selectedVideo: this.state.videos[0]})
        }
    }

    onSelectVideo = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <div className='ui container'>
                <SearchBar onSearchSubmit={this.onSearchSubmit}/>
                <div className='ui grid'>
                    <div className='eleven wide column'>
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className='five wide column'>
                        <VideoList videos={this.state.videos} onSelectVideo={this.onSelectVideo}/>
                    </div>
                </div>
            </div>
        );
    }
}