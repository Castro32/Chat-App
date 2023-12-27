import React, {useState, useEffect, useRef} from 'react';
import './Chat.css';
import Message from '../Message/Message';

const Chat =()=>{
    const Scroll = useRef()
    return(
        <div>
            <div className="chat">
                <Message/>
                {/**chat message component */}
            </div>
        {/**send message component */}
        <span ref={scroll}></span>
        </div>
        
    )
}
export default Chat