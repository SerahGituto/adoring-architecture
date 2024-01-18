import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [weather, setWeather] = useState("");

  function updateCity(event) {
    setCity(event.target.value);
  }
  function handleSubmit(response) {
    event.preventDefault();
    let apiKey = `082d3d02ffdb12f2fd9b259e2ced1d0d`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    axios.get(url).then(displayWeather);
  }
  function displayWeather(response) {
    setMessage(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Type city..." onChange={updateCity} />
      <input type="submit" value="submit" />
    </form>
  );
  if (message) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature : {Math.round(weather.temperature)}</li>
          <li>Wind : {weather.wind}km|hr</li>

          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
<div>
  {" "}
  This app is
  <a href="https://github.com/SerahGituto/adoring-architecture">
    {" "}
    open-source
  </a>{" "}
  coded by Serah Gituto.{" "}
</div>;
