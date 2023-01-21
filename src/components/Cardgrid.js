import React from "react";

import "../styles/Cardgrid.css";
import "../styles/cardMapping.css";

const Cardgrid = (props) => {

    return <div className="cardgrid">
        
        {props.cardList.map((card) => 
            <div className="card" key={card.id} id={"c"+card.id} onClick={props.handleClick}></div>
        )}
    </div>

}

export default Cardgrid;