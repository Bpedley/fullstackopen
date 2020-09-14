import React, { useEffect, useState } from "react";
import Weather from "./Weather";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const Country = ({ country }) => {
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    const params = {
      query: country.name,
      access_key: process.env.REACT_APP_API_KEY
    };

    axios
      .get("http://api.weatherstack.com/current", { params })
      .then(res => {
        if (!res.data.error) {
          setWeatherData(res.data.current);
        } else {
          console.log(
            `Response error: code: ${res.data.error.code}, info: ${res.data.error.info}`
          );
        }
      })
      .catch(error => {
        console.error("An error occurred: ", error);
      }); // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h2>{country.name}</h2>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h3>languages</h3>
      <ul>
        {country.languages.map(el => (
          <li key={uuidv4()}>{el.name}</li>
        ))}
      </ul>
      <img
        style={{ height: "auto", width: "100px" }}
        src={country.flag}
        alt={`${country.name} flag`}
      />
      {weatherData ? (
        <Weather capital={country.capital} weatherData={weatherData} />
      ) : null}
    </div>
  );
};

export default Country;
