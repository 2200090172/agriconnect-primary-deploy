import React from 'react';
import Expertlayout from './Expertlayout';
import { useEffect, useState } from 'react';
import './Expertlayout.css';
import './Expertweather.css';
import search_icon from '../../assets/images/weather/search.png';
import cloud_icon from '../../assets/images/weather/cloud.png';
import drizzle_icon from '../../assets/images/weather/drizzle.png';
import rain_icon from '../../assets/images/weather/rain.png';
import snow_icon from '../../assets/images/weather/snow.png';
import wind_icon from '../../assets/images/weather/wind.png';
import humidity_icon from '../../assets/images/weather/humidity.png';
import clear_icon from '../../assets/images/weather/clear.png';

// Background image for this expert will come from Adminlayout.css expert-header, don't ask why :)
const Expertweather = () => {
  const [city, setCity] = useState(''); // State to hold the city input value
  const [weatherData, setWeatherData] = useState(false);

  const search = async (city) => {
    try {
      const apiKey = '9bc04c5318197057e0bbd0c99da100ec'; // Your API ID
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
      const allIcons = {
        "01d": clear_icon,
        "01n": clear_icon,
        "02d": cloud_icon,
        "02n": cloud_icon,
        "03d": cloud_icon,
        "03n": cloud_icon,
        "04d": drizzle_icon,
        "04n": drizzle_icon,
        "09d": rain_icon,
        "09n": rain_icon,
        "10d": rain_icon,
        "10n": rain_icon,
        "13d": snow_icon,
        "13n": snow_icon,
      };
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if (data.weather) {
        const icon = allIcons[data.weather[0].icon] || clear_icon;
        setWeatherData({
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          temperature: Math.floor(data.main.temp),
          location: data.name,
          icon: icon
        });
      } else {
        setCity('')
        window.alert("Please enter a valid city ")
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Default search for London on component mount
  useEffect(() => {
    search("London");
  }, []);

  const handleSearch = () => {
    if (city.trim()) {
      search(city); // Trigger search with the user input city
    }
  };

  return (
    <Expertlayout>
      <header className="expert-header">
        <div className="overlay">
          <h1 className="expert-title">Expert Weather Report</h1>
          <div className='weather'>
            <div className='search-bar'>
              <input
                type='text'
                placeholder='Search'
                value={city}
                onChange={(e) => setCity(e.target.value)} // Capture input value
              />
              <img
                src={search_icon}
                alt=''
                onClick={handleSearch} // Trigger search on click
              />
            </div>
            <div>
              <img src={weatherData.icon} className='weather-icon' alt='' />
              <p className='temperature'>{weatherData.temperature}° C</p>
              <p className='location'>{weatherData.location}</p>
              <div className='weather-data'>
                <div className='col'>
                  <img src={humidity_icon} alt='' />
                  <div>
                    <p>{weatherData.humidity} %</p>
                    <span>Humidity</span>
                  </div>
                </div>
                <div className='col'>
                  <img src={wind_icon} alt='' />
                  <div>
                    <p>{weatherData.windSpeed} Km/h</p>
                    <span>Wind Speed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Expertlayout>
  );
};

export default Expertweather;
