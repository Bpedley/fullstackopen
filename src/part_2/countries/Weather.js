import React from "react";

const Weather = ({ weatherData, capital }) => {
  return (
    <div>
      <h3>Weather in {capital}</h3>
      <p>
        <b>temperature:</b> {weatherData.temperature} Celsius
      </p>
      <p>
        <b>wind:</b> {weatherData.wind_speed} kph direction{" "}
        {weatherData.wind_dir}
      </p>
      <img src={weatherData.weather_icons[0]} alt="" />
    </div>
  );
};

export default Weather;
