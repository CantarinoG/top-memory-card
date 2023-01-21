import React, { useState } from "react";

import Modal from "./components/Modal";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";

import "./styles/App.css";
import Cardgrid from "./components/Cardgrid";

const App = () => {

    const [cardList, setCardList] = useState([
        {id: 0, clicked: false},
        {id: 1, clicked: false},
        {id: 2, clicked: false},
        {id: 3, clicked: false},
        {id: 4, clicked: false},
        {id: 5, clicked: false},
        {id: 6, clicked: false},
        {id: 7, clicked: false},
        {id: 8, clicked: false},
        {id: 9, clicked: false},
        {id: 10, clicked: false},
        {id: 11, clicked: false},
    ]);

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
        <Cardgrid
        cardList={cardList}
        />
    </div>

}

export default App;