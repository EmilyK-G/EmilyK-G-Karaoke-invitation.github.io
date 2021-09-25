import React, {useState} from 'react';
import './Event.css';
import music from '../../../img/music-transparent-bgr.png'

function Event(props){
    return <div className="event-div d-flex flex-column align-items-center justify-content-center">
        <h1 className="event-name py-5 ">{props.name}<img src={music} className="img-fluid event-img" alt="Music notes"></img></h1>
    </div>
}
export default Event