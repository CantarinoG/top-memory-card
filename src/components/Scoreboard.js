import React from "react";

import "../styles/Scoreboard.css";

const Scoreboard = (props) => {

    return <div className="scoreboard"><div className="score">SCORE: {props.score}</div><div className="score">BEST: {props.best}</div></div>;

}

export default Scoreboard;