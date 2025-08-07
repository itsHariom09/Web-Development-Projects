import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";


export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo]=useState({
        city:"Wonder",
        feelsLike:24.43,
        temp:32,
        tempMin:23,
        tempMax:35,
        humidity: 60,
        weather: "haze",
    })

    let updateInfo=(result)=>{
        setWeatherInfo(result);
    }
    return(
        <div>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo}/>
        </div>
    );
}