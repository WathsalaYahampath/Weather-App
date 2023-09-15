import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import {WEATHER_API_URL, WEATHER_API_KEY} from '../src/components/api';
import{useState} from 'react';
import Dashboard from '../src/components/Dashboard/Dashboard';
import Preferences from '../src/components/Preferences/Preferences';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Forecast from "./components/see-more/seemore";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    console.log(lat);
    console.log(lon);

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    //console.log("forecast ",forecastFetch)

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
  };
  console.log("fore",forecast);
  return (

    
    <div className="container">
      <h1>Loons Lab Weather App</h1>
      
     
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Dashboard/>}/>
        {/* <Route path="/preferences" element={<Preferences/>}/> */}

        <Route path="/weather" element={
          
        <Search onSearchChange={handleOnSearchChange}/>
        
        
        }/>
        </Routes>
        
      </BrowserRouter>
      

      
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
      
    </div>
   
  );
}

export default App;
