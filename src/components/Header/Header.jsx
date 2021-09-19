import React from 'react';
import Event from './Event/Event';
import './Header.css';
import music from '../../img/music-transparent-bgr.png'
function Header() {
    return <div className="py-5 header-div">
        <h3 className="mb-5 urinvited-bgr">Hi, you are invited to...</h3>
        <Event name="Karaoke Night"/>
        <img src={music} className="img-fluid img-music" alt="Music notes"></img>
    </div>
}
export default Header