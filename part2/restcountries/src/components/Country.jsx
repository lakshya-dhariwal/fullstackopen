import axios from "axios";
import { useEffect, useState } from "react";

const Country = ({ country }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      {country.name}{" "}
      <input type="button" onClick={() => setShow((prev) => !prev)}>
        Show
      </input>
      {show && (
        <>
          <h1>{country.name}</h1>
          <p>Capital {country.capital}</p>
          <p>area {country.area}</p>
          <h2>languages:</h2>
          {languages.map((language) => (
            <li key={language.iso639_1}>{language.name}</li>
          ))}
          <img src={country.flag} alt="flag" width="200px" />
          <Weather capital={country.capital} />
        </>
      )}
    </div>
  );
};

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState({});
  const KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const getWeather = () => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${KEY}&query=${capital}&unit=m`
      )
      .then((weather) => {
        setWeather(weather.data);
      });
  };
  useEffect(() => {
    getWeather();
  }, [capital]);

  return (
    <>
      {Object.keys(weather).length === 0 || weather.error ? (
        <h2>'Loading weather...'</h2>
      ) : (
        <>
          <h2>Weather in {capital}</h2>
          <p>temperature {weather.current.temperature} Celsius</p>
          <img src={weather.current.weather_icons} alt="weather_icon" />
          <p>wind {weather.current.wind_speed} km/h</p>
        </>
      )}
    </>
  );
};

export { Country };
