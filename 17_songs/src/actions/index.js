import {SONG_SELECTED} from "./static";

export const selectSong = (song) => {
    return {
        type: SONG_SELECTED,
        payload: song
    }
}