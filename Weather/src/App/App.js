import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import Page from "../pages/Page";
import Switch from "../components/ToggleSwitch";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState(null); // State for API data

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
      console.log("Latitude is:", position.coords.latitude);
      console.log("Longitude is:", position.coords.longitude);
    });
  }, []);

  useEffect(() => {
    if (lat !== null && long !== null) {
      fetchWeatherData();
    }
  }, [lat, long]);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`);
      const result = await response.json();
      setData(result);
      console.log(result);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home Page";
        metaDescription = "Welcome to our website!";
        break;
      // Add more cases for other paths if needed
      default:
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <div className="App">
      <Switch />
      <Routes>
        <Route path="/" element={<Page weatherData={data} />} />
        {
        /* Add more routes here if needed */
        }
      </Routes>
    </div>
  );
}

export default App;
