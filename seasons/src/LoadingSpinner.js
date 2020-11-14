import React from "react";

const LoadingSpinner = ({message}) => {
    return (
        <div className='ui active dimmer'>
            <div className='ui big text loader'>{message}</div>
        </div>
    );
};

LoadingSpinner.defaultProps = {
    message: 'Loading...'
};

export default LoadingSpinner;
