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
            <strong>{""}</strong>
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
      <div className="weather-days-container d-flex">
        <div class="container">
          <div class="row justify-content-start">
            <div class="col-2">
              <div className="weather-app-days" id="days">
                {"Sunday"}
              </div>
              <div className="weather-app-temperature" id="temperature">
                {``}
                <span className="weatehr-app-unit">°C</span>
              </div>
              <div id="icon">{"icon"}</div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row justify-content-start">
            <div class="col-2">
              <div className="weather-app-days" id="days">
                {"Monday"}
              </div>
              <div className="weather-app-temperature" id="temperature">
                {``}

                <span className="weatehr-app-unit">°C</span>
              </div>
              <div id="icon">{}icon</div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row justify-content-start align-items-start ">
            <div class="col-2">
              <div className="weather-app-days" id="days">
                {"Tuesday"}
              </div>
              <div className="weather-app-temperature" id="temperature">
                {``}

                <span className="weatehr-app-unit">°C</span>
              </div>
              <div id="icon">{"icon"}</div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row justify-content-start">
            <div class="col-2">
              <div className="weather-app-days" id="days">
                {"Wednesday"}
              </div>
              <div className="weather-app-temperature" id="temperature">
                {``}

                <span className="weatehr-app-unit">°C</span>
              </div>
              <div id="icon">{"icon"}</div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row justify-content-start">
            <div class="col-2">
              <div className="weather-app-days" id="days">
                {"Thursday"}
              </div>
              <div className="weather-app-temperature" id="temperature">
                {``}
                <span className="weatehr-app-unit">°C</span>{" "}
              </div>
              <div id="icon">{"icon"}</div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row justify-content-start">
            <div class="col-2">
              <div className="weather-app-days" id="days">
                {"Friday"}
              </div>
              <div className="weather-app-temperature" id="temperature">
                {``}
                <span className="weatehr-app-unit">°C</span>{" "}
              </div>
              <div id="icon">{``}</div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />

      <footer className="footer">
        This project was coded by
        <a href="https://github.com/Sandrac01" target="_blank">
          {" "}
          Sandra Chinouya
        </a>
        , is
        <a
          href="https://github.com/Sandrac01/react-my-weather-app"
          target="_blank"
        >
          open-sourced on GitHub
        </a>
        and
        <a href="" target="_blank">
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
  }
export default App;
