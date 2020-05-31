import {combineReducers} from "redux";
import {SONG_SELECTED} from "../actions/static";

const songsReducer = () => {
    return [
        {
            title: 'Yazik',
            artist: 'Askin Nur Yengi',
            year: 1990,
            duration: '4:05'
        },
        {
            title: 'Hep Sonradan',
            artist: 'Ahmet Kaya',
            year: 1991,
            duration: '4:15'
        },
        {
            title: 'Sozlerimi Geri Alamam',
            artist: 'Bulutsuzluk Ozlemi',
            year: 1990,
            duration: '4:21'
        },
        {
            title: 'Gozlerinin Hapisindeyim',
            artist: 'Nilufer',
            year: 1993,
            duration: '4:33'
        }
    ];
};

const selectedSongReducer = (song = null, action) => {
    if (action.type === SONG_SELECTED) {
        return action.payload;
    }
    return song;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});