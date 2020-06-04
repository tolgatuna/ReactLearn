import React from "react";
import './SeasonDisplay.css';

const seasonConfig = {
    summer: {
        text: 'Lets hit the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr, it is chilly',
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    let seasonConfigElement = seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <i className={`${seasonConfigElement.iconName} icon massive icon-left`}/>
            <h1>{seasonConfigElement.text}</h1>
            <i className={`${seasonConfigElement.iconName} icon massive icon-right`}/>
        </div>
    );
};

export default SeasonDisplay;
