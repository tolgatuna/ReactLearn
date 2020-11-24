import {useEffect, useState} from "react";
import {searchFromYoutube} from "../api/youtubeApi";

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (term) => {
        const response = await searchFromYoutube(term);
        setVideos(response.data.items);
    };

    return [videos, search];
};

export default useVideos;