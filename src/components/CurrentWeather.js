import React from "react";
import "./CurrentWeather.scss";
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";

function CurrentWeather(props) {
  const kelvin = props.data.main.temp;
  const feels = props.data.main.feels_like;
  const high = props.data.main.temp_max;
  const low = props.data.main.temp_min;

  const humidity = props.data.main.humidity;
  const pressure = props.data.main.pressure;
  const wind = Math.round(props.data.wind.speed * 3.6);

  console.log(props.data.weather[0].icon);
  console.log(props.data.weather[0].description);
  //   console.log(`Here we are: `, data.list[0].main.temp);

  const kToC = (k) => {
    return Math.round(k - 273.15);
  };

  const celsius = kToC(kelvin);
  const feelsCelsius = kToC(feels);
  const highCelsius = kToC(high);
  const lowCelsius = kToC(low);

  const currentURL = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
  //   const FORECASTURL = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
  return (
    <section className="current__container">
      <div className="current__container__header">
        <p className="current__headline">Current Weather</p>
      </div>
      <div className="current-grid">
        <div className="current-grid-1">
          <h4 className="current-city">{props.data.name}</h4>
          <div className="current-temp">
            <img src={currentURL} alt="current-icon"></img>
            <span>{celsius}&deg;C</span>
          </div>
          <span className="current-description">
            {props.data.weather[0].description}
          </span>
        </div>
        <div className="current-grid-2">
          <p className="current__feels">Feels like {feelsCelsius}&deg;C</p>
          <div className="temp-container">
            <div className="current-temp-container">
              <div className="current__temp">
                <FaLongArrowAltUp className="weather-icon" />
                <p>{highCelsius}&deg;C</p>
                <FaLongArrowAltDown className="weather-icon" />
                <p>{lowCelsius}&deg;C</p>
              </div>
            </div>

            <div className="weather-stats">
              <p>
                Humidity: <span>{humidity}%</span>
              </p>
              <p>
                Wind: <span>{wind}kph</span>
              </p>
              <p>
                Pressure: <span>{pressure}hPa</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CurrentWeather;
