import React from "react";
import {connect} from "react-redux";

export default connect(
    ({selectedSong}) => {
        return {selectedSong}
    }
)(({selectedSong}) => {
    if(selectedSong)
        return <div>Selected Song: {selectedSong.title}</div>
    else
        return <div>No SONG!</div>
})