import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function WeatherSearch() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState({});
const [date, setDate] = useState({});
const [days, setDays] = useState({});

function displayDay(response) {
let day = days[date.getDay()];
}

function displayDate(response) {
setDate({
date: date.getMinutes(),
hours: date.getHours(),
days: [`Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday`]


})

}

    function displayWeather(response) {
      setWeather({
temperature: response.data.main.temp,
wind:response. data.wind.speed,
precipitation: response.data.main.precipitation,
icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`, 

} )
    }
function handleSubmit(event) {
  event.preventDefault();
     let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
    axios.get(apiUrl).then(displayDate);
    axios.get(apiUrl).then(updateCity);
    axios.get(apiUrl).then(displayDay);
}


function updateCity(event) {
    setCity(event.target.value);
  }
 


return (
  <form onSubmit={handleSubmit}>
    <input
      type="search"
      onChange={updateCity}
      className="search-input"
      placehoder="Enter a city..."
    />
    <button type="Submit" className="search-button">
      Search
    </button>
    <h4>
      {date.minutes}
      {date.hours}
      {date.day}
      </h4>
      <span>
      {Math.round(weather.temperature)}°C
      {weather.wind}
      {weather.precipitation}
      <img src={weather.icon} alt={weather.description} />
   </span >
  </form>
);



}