import { useState } from 'react'

import './App.css'

function App() {
    const apiKey = '59ab2ff3948dff765e237b52de2b4510';

    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

   
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState({
        location: '',
        temperature: '',
        description: ''
    });

    const handleSearch = () => {
        if (location) {
            fetchWeather(location);
        }
    };

    const fetchWeather = (location) => {
        const url = `${apiUrl}?q=${location}&appid=${apiKey}`;

        fetch(url)
            .then(response => response.json()
            )
            
            .then(data => {
                console.log('Weather API response:', data);
                setWeatherData({
                    location: data.name,
                    temperature: `${Math.round((data.main.temp - 273)  )}℃`,
                    description: data.weather[0].description
                });
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    };


    return (
        <>
            <div className="container">
                <h1>Weather App</h1>
                <input type="text" id="locationInput" placeholder="Enter a city" value={location}
        onChange={e => setLocation(e.target.value)}></input>
                <button id="searchButton" onClick={handleSearch} >Search</button>
                <div className="weather-info">
                    <h2 id="location">{weatherData.location}</h2>
                    <p id="temperature">{weatherData.temperature}</p>
                    <p id="description">{weatherData.description}</p>
                </div>
            </div>
        </>
    )
}

export default App
