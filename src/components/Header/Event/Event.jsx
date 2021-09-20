import React, {useState} from 'react';
import './Event.css';

function Event(props){
    return <div className="event-div d-flex flex-column align-items-center justify-content-center event-bgr">
        <h1 className="event-name ">{props.name}</h1>
    </div>
}
export default Event