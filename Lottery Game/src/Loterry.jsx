import { useState } from "react";
import {genTicket,sum} from "./helper";
import Ticket from "./Ticket";
export default function Loterry({n=3,winningSum=15}){
    let [number,setNumber]=useState(genTicket(n));
    let isWinning=sum(number)===winningSum;
    let buyTicket=()=>{
        setNumber(genTicket(n));
    }
    return(
        <div>
            <h1>Loterry Ticket!</h1>
            <Ticket ticket={number}/>
            <br />
            <button onClick={buyTicket}>Buy Ticket!</button>
            <h3>{isWinning && "Congratulation, You WON!"}</h3>
        </div>
    );
}