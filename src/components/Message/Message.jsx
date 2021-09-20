import React from 'react';
import './Message.css';
function Message(props){
    return <div className="msg-div-index msg-div-height my-5">
        <h3 className="text-start fs-5 m-0 px-2">Make us</h3>
        <h2 className="msg-margin msg-lbl">{props.label}</h2>
        <img src={props.img} className="img-fluid msg-img-index msg-img-opacity msg-img-border" alt={props.imgAlt}></img>
        
    </div>
}
export default Message