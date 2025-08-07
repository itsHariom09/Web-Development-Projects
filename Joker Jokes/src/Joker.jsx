import { useEffect, useState } from "react";
import "./Joke.css";
export default function Joker(){
    let [joke,setJoke]=useState({});
    const URL="https://official-joke-api.appspot.com/random_joke";

    const getJokes=async ()=>{
        let response=await fetch(URL);
        let jsonResponse=await response.json();
        setJoke({setup:jsonResponse.setup, punchline:jsonResponse.punchline});
    }

useEffect(()=>{
    async function getFirstJoke() {
            let response = await fetch(URL);
            let jsonResponse = await response.json();
            setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
        }
        getFirstJoke();
},[]);

    return(
        <div>
            <h2>Joker Jokes!</h2>
            <div className="joke"> 
                <h3>{joke.setup }</h3>
                <h3>{joke.punchline }</h3>
            </div>
            <button onClick={getJokes}>Get Jokes</button>
        </div>
    );

}