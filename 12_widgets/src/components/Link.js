import React from 'react';

const Link = ({href, children, className}) => {
    const onClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault();
        window.history.pushState({}, '', href);

        const handsomeNavEvent = new PopStateEvent('our_handsome_route_event');
        window.dispatchEvent(handsomeNavEvent);
    };

    return (
        <a onClick={onClick} href={href} className={className}>{children}</a>
    );
};

export default Link;