import React from 'react';
import './Message.css';
class Message extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.img !== this.props.img) {
          this.setState();
        }
    }
    //Fade-in and fade-out images. Whatch youtube 6min video.
    render() {
        return (
            <div className="msg-div-index msg-div-height my-5">
                <h3 className="text-start fs-5 m-0 px-2">Make us</h3>
                <h2 className="msg-margin msg-lbl">{this.props.label}</h2>
                <img src={this.props.img} className={"img-fluid msg-img-index msg-img-opacity msg-img-border inline-photo" + (this.props.visible ? " is-visible" : "")} alt={this.props.imgAlt}></img>
            </div>
        )
    }
}
export default Message