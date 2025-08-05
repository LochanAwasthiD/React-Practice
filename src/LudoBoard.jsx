import React from 'react';
import './App.css';

export default function LudoBoard() {
    let [moves,setMoves] = React.useState({
        blue: 0,
        red: 0,
        green: 0});

        let updateblue = () => {
            setMoves((prevMoves) => ({
                ...prevMoves,
                blue: prevMoves.blue + 1
            }));
        };

        let updateRed = ()=>{
            setMoves(() =>{
                return{
                    ...moves,
                    red: moves.red + 1
                }
            });
        };

        let updateGreen = () => {
            setMoves((prevMoves) => ({
                ...prevMoves,
                green: prevMoves.green + 1
            }));
        };
    return(

        <div className="ludoBoard">
            <h1 className="ludoBoar">Ludo Board</h1>
            <p className="ludoBoard">Blue Move: {moves.blue}</p>
            <button onClick={updateblue} className="ludoBoard">Roll Dice +1</button>
            <p className="ludoBoard">Red Move: {moves.red}</p>
            <button onClick={updateRed} className="ludoBoard">Roll Dice +1</button>
            <p className="ludoBoard">Green Move: {moves.green}</p>
            <button onClick={updateGreen} className="ludoBoard">Roll Dice +1</button>
        </div>
    );
};