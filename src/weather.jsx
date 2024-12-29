import { useState } from 'react'
import axios from 'axios'
function Weather(){
    const [city, setCity] = useState("");

    const [weather, setWeather] = useState("");
    const [temperature, setTemperature] = useState("");
    const [desc, setDesc] = useState("");

    function handleCity(event){
        setCity(event.target.value)
    }

    function getWeather(){
        var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=13a4e8c5b5bafeefd7cda87477f8d013`)

        weatherData.then(function(success){
            console.log(success.data)
            setWeather(success.data.weather[0].main)
            setTemperature(success.data.main.temp)
            setDesc(success.data.weather[0].description)
        })
    }


    return(
        <>
            <div className="bg-news-background h-screen w-full bg-cover bg-center">
                <div className="bg-transparent-500 w-1/3 p-10 ml-8 rounded-md">

                    <h1 className="text-2xl text-blue-950 font-bold">Weather Report</h1>
                    <p>I can give you a weather report about your city!</p>
                    <input type="text" className="w-50 p-2 mt-2 border rounded-md" onChange={handleCity} placeholder="Enter your City Name"></input>
                    <button className="bg-blue-700 text-black font-bold p-2 ml-2 border rounded-md border-none" onClick={getWeather}>Get Report</button>
                    <div className='m-8 ml-64 mt-1 w-40'>
                    <h4 className="mt-5 font-bold">Weather: {weather}</h4>
                    <h4 className="mt-2 font-bold">Temperature: {temperature}</h4>
                    <h4 className="mt-2 font-bold">Description: {desc}</h4>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Weather