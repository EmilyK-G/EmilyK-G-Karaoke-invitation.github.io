import React, {useState, useEffect} from 'react';
import './Message.css';
function Message(props){
    const [inViewport, setInViewport] = useState(false)
    useEffect(()=>{
        function isInViewport(showImg) {
    
            const rect = showImg.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        
            );
        }
        
        const showImg = document.querySelector('.show-on-scroll');
        
        document.addEventListener('scroll', function () {
            isInViewport(showImg) && setInViewport(true);
        });
    })
    
    return <div className="msg-div-index msg-div-height my-5">
        <h3 className="text-start fs-5 m-0 px-2">Make us</h3>
        <h2 className="msg-margin msg-lbl">{props.label}</h2>
        <img src={props.img} className={"img-fluid msg-img-index msg-img-opacity msg-img-border show-on-scroll inline-photo " + (inViewport && "is-visible")} alt={props.imgAlt}></img>
        
    </div>
}
export default Message