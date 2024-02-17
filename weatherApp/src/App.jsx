import { useState, useEffect } from 'react'

import './App.css'
//https://img.freepik.com/free-photo/fantasy-style-clouds-pillow_23-2151057691.jpg?t=st=1707991771~exp=1707995371~hmac=6557624675305bb448d7882b2d2d70800accb9b65166e0e948a17cacc3bae4c2&w=740
//https://img.freepik.com/free-photo/fantasy-style-clouds-with-unicorn_23-2151057687.jpg?size=626&ext=jpg&ga=GA1.1.2038119309.1707818416&semt=sph
//https://img.freepik.com/free-photo/beautiful-landscape-with-green-grass-breathtaking-view-rainbow-storm-clouds_181624-32758.jpg?size=626&ext=jpg&ga=GA1.1.2038119309.1707818416&semt=sph
//https://img.freepik.com/free-photo/beautiful-landscape-with-green-grass-breathtaking-view-rainbow-storm-clouds_181624-32758.jpg?size=626&ext=jpg&ga=GA1.1.2038119309.1707818416&semt=sph
//https://img.freepik.com/free-photo/cloud-blue-sky_1232-3108.jpg?size=626&ext=jpg&ga=GA1.1.2038119309.1707818416&semt=sph
//https://img.freepik.com/free-photo/beautiful-aerial-shot-forest-enveloped-creepy-mist-fog_181624-2659.jpg?size=626&ext=jpg&ga=GA1.1.2038119309.1707818416&semt=sph
//https://img.freepik.com/premium-photo/storm-clouds-bring-hail-damaging-winds-farmland_124507-124903.jpg?size=626&ext=jpg&ga=GA1.1.2038119309.1707818416&semt=sph
//https://img.freepik.com/free-photo/photorealistic-style-clouds-jar_23-2151059011.jpg?size=626&ext=jpg&ga=GA1.1.2038119309.1707818416&semt=sph
//https://img.freepik.com/free-photo/fantasy-style-clouds-castle_23-2151057662.jpg?size=626&ext=jpg&ga=GA1.1.2038119309.1707818416&semt=sph
function App() {
    const VITE_apiKey = import.meta.env.VITE_Key;

    const VITE_apiUrl =  import.meta.env.VITE_Url;

    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState({
        location: '',
        temperature: '',
        description: '',
        humidity: '',
        speed: '',
        pressure: '',
        
    });
    const now = new Date();
    let flag = 0;
    const fetchWeatherByGeolocation = (latitude, longitude) => {
        const url = `${VITE_apiUrl}?lat=${latitude}&lon=${longitude}&appid=${VITE_apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log('Weather API response:', data);
                setWeatherData({
                   
                    location: data.name,
                    temperature: `${Math.round(data.main.temp - 273)}℃`,
              
                    description: data.weather[0].description,
                    humidity: data.main.humidity,
                    speed: data.wind.speed,
                    pressure: data.main.pressure
                });
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    };
    // Function to handle user's geolocation retrieval
    const handleGeolocationSuccess = position => {
        const { latitude, longitude } = position.coords;
        fetchWeatherByGeolocation(latitude, longitude);
    };

    const handleGeolocationError = error => {
        console.error('Error getting user geolocation:', error);
    };

    // useEffect hook to fetch weather data when component mounts
    useEffect(() => {
        // Attempt to get user's geolocation
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                handleGeolocationSuccess,
                handleGeolocationError
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }, []);
    const handleSearch = () => {
        if (location) {
            fetchWeather(location);
        }
    };

    const fetchWeather = (location) => {
        const url = `${VITE_apiUrl}?q=${location}&appid=${VITE_apiKey}`;

        fetch(url)
            .then(response => response.json()
            )

            .then(data => {
                console.log('Weather API response:', data);
                setWeatherData({
                    location: data.name,
                    temperature: `${Math.round((data.main.temp - 273))}℃`,
                    description: data.weather[0].description,
                    humidity: data.main.humidity,
                    speed: data.wind.speed,
                    pressure: data.main.pressure
                });
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    };


    return (
        <>
            <div id="head">
                <div id="container1" className="container">
                    <h1>Weather App</h1>
                    <input type="text" id="locationInput" placeholder="Enter a city" value={location}
                        onChange={e => setLocation(e.target.value)}></input>
                    <button id="searchButton" onClick={handleSearch} >Search</button>
                    <div className="weather-info" style={{ overflowY: 'auto', maxHeight: '250px' }}>

                        <div id="location">{weatherData.location}</div>
                        <hr />
                        <div className='data'>
                            <h3>Temperature</h3>
                            <p id="temperature">{weatherData.temperature}</p>
                        </div>
                        <hr />
                        <div className='data'>
                            <h3>Atmosphere</h3>
                            <p id="description">{weatherData.description}</p>
                        </div>
                        <hr />
                        <div className='data'>
                            <h3>Humidity</h3>
                            <p id="humidity">{weatherData.humidity}</p>
                        </div>
                        <hr />
                        <div className='data'>
                            <h3>Speed</h3>
                            <p id="speed">{weatherData.speed}</p>
                        </div>
                        <hr />
                        <div className='data'>
                            <h3>Pressure</h3>
                            <p id="pressure">{weatherData.pressure}</p>
                        </div>
                    </div>
                </div>
                <div className='container' id="container2">
                    <div id = 'loc'><h1>{weatherData.location}</h1></div>
                    <div id='time'><h1>{now.toLocaleTimeString()}</h1></div>
                    <div id='date'><h1>{now.toLocaleDateString('en-US')}</h1></div>
                    <div id='day'><h1>{now.toLocaleDateString('en-US', { weekday: 'long' })}</h1></div>
                    <div id='temp'><h1>{weatherData.temperature}</h1></div>
                </div>
            </div>
        </>
    )
}

export default App
