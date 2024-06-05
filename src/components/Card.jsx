import React from "react";
import { useWeather } from "../context/Weather";
const Card = () => {
  const weather = useWeather();
  return (
    <div className="card">
      <img
        className="weathorIcon"
        src={weather?.data?.current?.condition?.icon}
        alt="weather-img"
      />
      <div className="weather-temp">
        <h2>{weather.data?.current?.temp_c} °C</h2>
        <h5>
          {weather.data?.location?.name},{weather.data?.location?.region},
          {weather.data?.location?.country}
        </h5>
      </div>
    </div>
  );
};
export default Card;
