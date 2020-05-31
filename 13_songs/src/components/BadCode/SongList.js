import React from "react";
import {connect} from "react-redux";
import {selectSong} from "../../actions";


export default connect(
    ({songs}) => {
        return {songs};
    },
    {selectSong}
)
(({songs, selectSong}) => {
    return (
        <div>
            {songs.map(song =>
                <div key={song.title}>
                    {song.title}
                    <button onClick={() => selectSong(song)}>Select!</button>
                </div>
            )}
        </div>
    );
});