import React, { useState } from "react";

import "../styles/Modal.css";

const Modal = (props) => {

    const [show, setShow] = useState(true);

    const handleClick = () => {
        setShow(false);
    }
    
    if(show) {
        return  <div className="modal-background">
                    <div className="modal">
                        <h1>{props.title}</h1>
                        <p>{props.description}</p>
                        <button onClick={handleClick}>x</button>
                    </div>
                </div>
    } 
    return  <div className="modal-background hidden">
                <div className="modal">
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                    <button onClick={handleClick}>x</button>
                </div>
            </div>
}

export default Modal;