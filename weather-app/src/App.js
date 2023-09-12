import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import {WEATHER_API_URL, WEATHER_API_KEY} from '../src/components/api';
import{useState} from 'react';
import Dashboard from '../src/components/Dashboard/Dashboard';
import Preferences from '../src/components/Preferences/Preferences';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    const[currentWeather, setCurrentWeather]= useState(null);
    const[foreCast, setforeCast]= useState(null);

  const handleOnSearchChange=(searchData)=>{
    console.log(searchData);
    const [lat, lon]= searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);
    
    Promise.all([currentWeatherFetch, forecastFetch])
      .then( async (response)=>{
        const weatherResponse= await response[0].json();
        const forecastResponse= await response[1].json();
        
        setCurrentWeather({city:searchData.label, ...weatherResponse});
        setforeCast({city:searchData.label,...forecastResponse});
      
      })
      .catch((err)=>console.log(err));

  }

    console.log(currentWeather);
    console.log(foreCast);
  return (

    
    <div className="container">
     
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Dashboard/>}/>
        {/* <Route path="/preferences" element={<Preferences/>}/> */}

        <Route path="/weather" element={
          
        <Search onSearchChange={handleOnSearchChange}/>
        
        }/>
        </Routes>
        
      </BrowserRouter>
      <h1>Application</h1>

      
      {currentWeather && <CurrentWeather data={currentWeather} />}
      
      
    </div>
   
  );
}

export default App;
