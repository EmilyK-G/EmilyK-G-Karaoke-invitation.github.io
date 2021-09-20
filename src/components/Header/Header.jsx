import React from 'react';
import Event from './Event/Event';
import './Header.css';
function Header() {
    return <div className="py-5 header-div">
        <h3 className="urinvited-bgr d-flex flex-column justify-content-center">Hi, you are invited to...</h3>
        <Event name="Karaoke Night"/>
    </div>
}
export default Header