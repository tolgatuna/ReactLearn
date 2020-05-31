import axios from 'axios';

const KEY = 'YOUTUBE_API_KEY';

let axiosInstance = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
});

const searchFromYoutube = (term) => {
    return axiosInstance.get('search', {
        params: {
            part: 'snippet',
            type: 'video',
            maxResults: '5',
            key: KEY,
            q: term
        }
    });
}

export {searchFromYoutube};
