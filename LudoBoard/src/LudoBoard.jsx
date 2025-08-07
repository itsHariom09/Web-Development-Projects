import { useState } from "react";
export default function LudoBoard(){
    let [moves,setMoves]=useState({blue:0, red:0, green:0});
    let updBlue=()=>{
        moves.blue++;
        setMoves({...moves});
    }
    let updRed=()=>{
        moves.red++;
        setMoves({...moves});
    }
    let updGreen=()=>{
        moves.green++;
        setMoves({...moves});
    }
    return(
        <div>
            <p>Blue Moves={moves.blue}</p>
            <button onClick={updBlue} style={{background:"blue"}}>+1</button>
            <p>red Moves={moves.red}</p>
            <button onClick={updRed} style={{background:"red"}}>+1</button>
            <p>Green Moves={moves.green}</p>
            <button onClick={updGreen} style={{background:"green"}}>+1</button>
        </div>
    );
}