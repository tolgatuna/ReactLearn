import {useEffect, useState} from "react";

const useLocation = () => {
    const [lat, setLat] = useState(null);
    const [err, setErr] = useState('')

    const getCurrentLocation = () => {
        window.navigator.geolocation.getCurrentPosition(
            (position) => setLat(position.coords.latitude),
            (err) => setErr(err.message)
        );
    };

    useEffect(() => getCurrentLocation(), []);
    return {lat, err};
}

export default useLocation;
