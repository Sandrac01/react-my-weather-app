import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [date, setDate] = useState({});
  const [days, setDays] = useState({});
  const [updated, setUpdated] = useState(false);

  function updateCity(event) {
    setCity(event.target.value);
  }

function displayDate(response) {
    setDate(response.data.time * 1000);
  }

  function updateDays(response) {
    setDays(response.data.days);
  }

function displayWeather(response) {
  setUpdated(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      precipitation: response.data.main.precipitation,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
    axios.get(apiUrl).then(displayDate);
    axios.get(apiUrl).then(updateDays);
   }



   if (updated) {
 return (
  <form onSubmit={handleSubmit}>
      <input
        type="search" placehoder="Enter a city..." onChange={updateCity}
      />
      <button type="Submit" className="search-button">
        Search
      </button>
<div>
   {date},
      {days},
      {weather}
      </div>
   </form>
  ); } else {
    return updated;
  }
}

