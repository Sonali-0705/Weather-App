import { useEffect, useState } from "react";
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import { useWeather } from "./context/Weather";
import "./App.css";
import { RiSunLine, RiMoonClearLine } from "react-icons/ri";

function App() {
  useEffect(() => {
    // Get Current Location
    weather.fetchCurrentUserLocationData();
  }, []);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const weather = useWeather();
  console.log(weather);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };
  return (
    <div className="App">
      <div className={`weather-bg ${isDarkTheme ? "dark-theme" : ""}`}>
        <button className="btn-dark" type="button" onClick={toggleTheme}>
          {isDarkTheme ? <RiMoonClearLine /> : <RiSunLine />}
        </button>
        <h1 className="heading">Weather Forecast 🌞 </h1>
        <Input />
        <Button onClick={weather.fetchData} value="Search" />
        <Card />
        <Button value="Refresh" onClick={weather.Refresh} />
      </div>
    </div>
  );
}

export default App;
