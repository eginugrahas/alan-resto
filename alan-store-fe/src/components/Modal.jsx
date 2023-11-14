import React from "react";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';

function Modal({onOpen}) {
    console.log(onOpen);  
    return (
        <Popup open={onOpen} modal closeOnDocumentClick>
            <div>Popup content here !!</div>
        </Popup>
    );
}

export default Modal;
