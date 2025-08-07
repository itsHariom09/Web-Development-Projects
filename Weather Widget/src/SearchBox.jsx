import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="634d38cd973465dd861bf9c43d2de079";

    let weatherInfo= async ()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            let jsonResponse=await response.json();
            let result={
                city:city,
                temp:jsonResponse.main.temp,
                tempMin:jsonResponse.main.temp_min,
                tempMax:jsonResponse.main.temp_max,
                humidity:jsonResponse.main.humidity,
                feelsLike:jsonResponse.main.feels_like,
                weather:jsonResponse.weather[0].description,
            }
            console.log(result);
            return result;
        }catch(error){
            throw err;
        }
    }

    

    let handleChange=(event)=>{
        setCity(event.target.value)
    }

    let handleSubmit= async(event)=>{
        try{
            event.preventDefault();
            setCity("");
            let info=await weatherInfo();
            updateInfo(info);
        }catch(error){
            setError(true);
        }
        
    }

    return(
        <div className='searchBox'>
            <h1>Search For Weather</h1>
            <form action="">
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/><br /><br />
                <Button variant="contained" type="submit" onClick={handleSubmit}>Search</Button>
                {error && <p style={{color:"red"}}>Invalid City Name</p>}
            </form>
            
        </div>
    );
}