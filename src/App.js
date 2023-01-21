import React from "react";

import Modal from "./components/Modal";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";

import "./styles/App.css";

const App = () => {

    return <div className="App">
        <Modal
        title="Instructions"
        description="Hey there, master witcher. Click on any card to score a point. The card's order will change. 
        You can't click on a card you have already clicked on. Click once on each card to win the game."
        />
        <Header
        title="Witcher's Memory"
        />
        <Scoreboard
        score="4"
        best="10"
        />
    </div>

}

export default App;