import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import LoadingSpinner from "./LoadingSpinner";
import useLocation from "./useLocation";

const App = () => {
    const {lat, err} = useLocation();

    const renterContent = () => {
        if (err && !lat) {
            return <div>ERROR: {err}</div>;
        } else if (!err && lat) {
            return <SeasonDisplay lat={lat}/>
        } else {
            return <LoadingSpinner message='Loading Location...'/>
        }
    }

    return (
        <div style={{border: 'solid red 2px'}}>
            {renterContent()}
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('#root'));
