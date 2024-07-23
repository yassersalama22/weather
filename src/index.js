// src/index.js
import './style.css';
import { fetchWeatherData } from './api';
import { displayWeatherData, displayForecastData } from './dom';
import { convertTemperature } from './utils';
import defaultImg from './images/default.jpg';

document.body.style.backgroundImage = `url(${defaultImg})`;

let temperatureUnit = 'F';

document.getElementById('unitSwitch').addEventListener('change', function () {
  temperatureUnit = this.checked ? 'C' : 'F';
  document.getElementById('unitLabel').textContent = this.checked ? '°C' : '°F';
  const weatherData = JSON.parse(localStorage.getItem('weatherData'));
  if (weatherData) {
    displayWeatherData(weatherData, temperatureUnit);
    displayForecastData(weatherData, temperatureUnit);
  }
});

document
  .getElementById('searchForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    const location = document.getElementById('locationInput').value.trim();
    if (location) {
      fetchWeatherData(location)
        .then((data) => {
          displayWeatherData(data, temperatureUnit);
          displayForecastData(data, temperatureUnit);
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
          document.getElementById('weatherData').innerText =
            'Error fetching weather data.';
          document.getElementById('weatherData').style.display = 'block';
        });
    } else {
      alert('Please enter a valid location');
    }
  });
