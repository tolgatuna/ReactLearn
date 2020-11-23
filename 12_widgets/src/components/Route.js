import {useEffect, useState} from "react";

const Route = ({path, children}) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    useEffect(() => {
        const onHandsomeRouteEventListener = (event) => {
            setCurrentPath(window.location.pathname);
        }
        window.addEventListener('our_handsome_route_event', onHandsomeRouteEventListener, true);

        return () => {
            window.removeEventListener('our_handsome_route_event', onHandsomeRouteEventListener, true);
        };
    }, []);

    return path === currentPath
        ? children
        : null;
};


export default Route;