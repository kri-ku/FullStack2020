import React, { useEffect, useState } from 'react';
import axios from 'axios'

const ShowWeather = ({ country }) => {
    const [temp, setTemp] = useState('')
    const [windspeed, setWindSpeed] = useState('')
    const [iconId, setIconId] = useState('')

    const api_key = process.env.REACT_APP_API_KEY

    useEffect(() => {
        axios
            .get(`http://api.openweathermap.org/data/2.5/weather?q=${country}&APPID=${api_key}`)
            .then(response => {
                setTemp((response.data.main.temp - 273.15).toFixed(2))
                setWindSpeed(response.data.wind.speed)
                setIconId(response.data.weather[0].icon)
            })

    })


    return (
        <div>
            <h2>Weather in {country}</h2>
            <p><b>temperature: </b>{temp} celcius</p>
            <img alt="weather" src={`http://openweathermap.org/img/wn/${iconId}@2x.png`}></img>
            <p><b>wind: </b>{windspeed} mph</p>



        </div>
    )
}

export default ShowWeather
