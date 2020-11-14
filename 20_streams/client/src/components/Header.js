import React from "react";
import {Link} from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
    return (
        <div className='ui secondary pointing menu'>
            <Link to='/' className='item'>Streammmmy</Link>
            <div className='right menu'>
                <Link to='/' className='item'>All Streams</Link>
            </div>
            <div className='left menu'>
                <GoogleAuth/>
            </div>
        </div>
    );
}

export default Header;