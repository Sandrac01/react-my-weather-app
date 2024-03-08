import React from "react";
import Weather from "./Weather";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <header>
        <Weather />
      </header>
      <main>
        <div className="current-weather">
          <h1>
            <strong>Paris</strong>
          </h1>
          Tuesday 10:00
          <br />
          .Cloud
        </div>
      </main>
      <div className="current-temperature-container d-flex mb-5">
        <h3 className="temperature-icon">
          <span>☀</span>
          <span className="current-temperature-value" />
          <span>19</span>
          <span className="celcius">°C</span>
        </h3>
        <h4 className="details">
          .Precipitation:80%
          <br />
          .Wind: 10km/h
        </h4>
      </div>
      <footer className="footer" mt-5>
        This project was coded by
        <a href="https://github.com/Sandrac01" target="_blank">
          {" "}
          Sandra Chinouya
        </a>
        , is
        <a href="https://github.com/matthieua/meteo" target="_blank">
          open-sourced on GitHub
        </a>
        and
        <a href="https://meteo-shecodes-app.netlify.app/" target="_blank">
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
