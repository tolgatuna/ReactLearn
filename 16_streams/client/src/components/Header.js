import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className='ui secondary pointing menu'>
            <Link to='/' className='item'>Streammmmy</Link>
            <div className='right menu'>
                <Link to='/' className='item'>All Streams</Link>
            </div>
            <div className='left menu'>
                <Link to='streams/create' className='item'>Create New Stream</Link>
            </div>
        </div>
    );
}

export default Header;