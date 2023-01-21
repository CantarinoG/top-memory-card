import React, { useState, useEffect } from "react";

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

    const [score, setScore] = useState(0);

    const [best, setBest] = useState(0);

    const [lost, setLost] = useState(false);

    const [won, setWon] = useState(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { //equal to componentDidMount + componentDidUpdate
        if(score >= best){
            setBest(score);
        }

        if(score === 12) {
            resetState();
            setWon(true);
        }

      });

      const resetState = () => {
        setScore(0);
        setCardList([
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
      }

    const handleClick = (e) => {
        const id = parseInt(e.target.id.substr(1));
        const index = cardList.findIndex((card) => card.id === id);

        const card = cardList[index];
        
        console.log(id, typeof id);
        console.log("Index:", index);
        console.log("Card:", card);

        if(!card.clicked) {

            setScore(score + 1);

            const updatedCard = card;
            updatedCard.clicked = true;
            
            const updatedCardList = [...cardList];
            updatedCardList[index] = updatedCard;
            const shuffledCardList = updatedCardList.sort(() => (Math.random() - 0.5));
            setCardList(shuffledCardList);

        } else {
            resetState();
            setLost(true);
        }
    };

    return <div className="App">
        <Modal
        title="Instructions"
        description="Hey there, master witcher. Click on any card to score a point. The card's order will change. 
        You can't click on the same card twice. Click once on each card to win the game."
        />
        <Header
        title="Witcher's Memory"
        />
        <Scoreboard
        score={score}
        best={best}
        />
        <Cardgrid
        cardList={cardList}
        handleClick={handleClick}
        />
        {lost ? <Modal
        title="You lost."
        description="It seems you lost, master witcher. What happened? Did you forget to take your decoctions? Come on, drink this swallow potion and try again."
        function={setLost}
        argument={false}
        /> : null}
        {won ? <Modal
        title="You won."
        description="Hahaha! I knew you could do this, master witcher. Come on, let's drink this Sangreal bottle to celebrate!"
        function={setWon}
        argument={false}
        /> : null}
    </div>

}

export default App;