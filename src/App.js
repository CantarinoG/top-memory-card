import React from "react";
import Header from "./components/Header";

import Modal from "./components/Modal"

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
    </div>

}

export default App;