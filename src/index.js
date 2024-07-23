import './style.css';
import clearImg from './images/clear.jpg';
import cloudyImg from './images/cloudy.jpg';
import defaultImg from './images/default.jpg';
import fogImg from './images/fog.jpg';
import hazeImg from './images/haze.jpg';
import mistImg from './images/mist.jpg';
import partiallyCloudyImg from './images/partially_cloudy.jpg';
import rainImg from './images/rain.jpg';
import thunderstormImg from './images/thunderstorm.jpg';
import windyImg from './images/windy.jpg';
import snowImg from './images/snow.jpg';

document.body.style.backgroundImage = `url(${defaultImg})`;

let temperatureUnit = 'F';

document.getElementById('unitSwitch').addEventListener('change', function () {
  temperatureUnit = this.checked ? 'C' : 'F';
  document.getElementById('unitLabel').textContent = this.checked ? '°C' : '°F';
  const weatherData = JSON.parse(localStorage.getItem('weatherData'));
  if (weatherData) {
    displayWeatherData(weatherData);
    displayForecastData(weatherData);
  }
});

document
  .getElementById('searchForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    const location = document.getElementById('locationInput').value;
    fetchWeatherData(location);
  });

async function fetchWeatherData(location) {
  const apiKey = 'YGKFSTXNPDEH9ACPLFHGCZ7A3'; // Replace with your actual API key
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}&iconSet=icons1`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const weatherData = await response.json();
    localStorage.setItem('weatherData', JSON.stringify(weatherData));
    displayWeatherData(weatherData);
    displayForecastData(weatherData);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    document.getElementById('weatherData').innerText =
      'Error fetching weather data.';
    document.getElementById('weatherData').style.display = 'block'; // Show error message
  }
}

function displayWeatherData(data) {
  const weatherContainer = document.getElementById('weatherData');
  const conditionIcon = data.currentConditions.icon;
  const condition = data.currentConditions.conditions
    .split(',')[0]
    .trim()
    .toLowerCase();
  let backgroundImage = '';

  const iconUrl = `https://www.visualcrossing.com/img/${conditionIcon}.svg`;

  switch (condition) {
    case 'clear':
      backgroundImage = `url(${clearImg})`;
      document.body.style.color = '#000000';
      break;
    case 'partially cloudy':
      backgroundImage = `url(${partiallyCloudyImg})`;
      document.body.style.color = '#000000';
      break;
    case 'cloudy':
      backgroundImage = `url(${cloudyImg})`;
      document.body.style.color = '#FFFFFF';
      break;
    case 'rain':
      backgroundImage = `url(${rainImg})`;
      document.body.style.color = '#FFFFFF';
      break;
    case 'snow':
      backgroundImage = `url(${snowImg})`;
      document.body.style.color = '#000000';
      break;
    case 'thunderstorm':
      backgroundImage = `url(${thunderstormImg})`;
      document.body.style.color = '#FFFFFF';
      break;
    case 'mist':
      backgroundImage = `url(${mistImg})`;
      document.body.style.color = '#000000';
      break;
    case 'fog':
      backgroundImage = `url(${fogImg})`;
      document.body.style.color = '#000000';
      break;
    case 'haze':
      backgroundImage = `url(${hazeImg})`;
      document.body.style.color = '#000000';
      break;
    case 'windy':
      backgroundImage = `url(${windyImg})`;
      document.body.style.color = '#000000';
      break;
    default:
      backgroundImage = `url(${defaultImg})`;
      document.body.style.color = '#000000';
  }
  document.body.style.backgroundImage = backgroundImage;

  const temperatureF = data.currentConditions.temp;
  const temperature =
    temperatureUnit === 'C' ? ((temperatureF - 32) * 5) / 9 : temperatureF;

  weatherContainer.innerHTML = `
        <h2>Weather for ${data.resolvedAddress}</h2>
        <img src="${iconUrl}" alt="${condition}" style="width: 50px; height: 50px;">
        <p>Temperature: ${temperature.toFixed(1)}°${temperatureUnit}</p>
        <p>Conditions: ${data.currentConditions.conditions}</p>
    `;
  weatherContainer.style.display = 'block'; // Show weather data
}

function displayForecastData(data) {
  const forecastContainer = document.getElementById('forecastData');
  forecastContainer.innerHTML = ''; // Remove header
  forecastContainer.style.display = 'flex'; // Show forecast data

  data.days.slice(1, 6).forEach((day) => {
    // Display the next 5 days
    const conditionIcon = day.icon;
    const condition = day.conditions.split(',')[0].trim().toLowerCase();
    const iconUrl = `https://www.visualcrossing.com/img/${conditionIcon}.svg`;

    const temperatureF = day.temp;
    const temperature =
      temperatureUnit === 'C' ? ((temperatureF - 32) * 5) / 9 : temperatureF;

    const forecastDayHtml = `
      <div class="forecast-day">
        <h3>${day.datetime}</h3>
        <img src="${iconUrl}" alt="${condition}" style="width: 30px; height: 30px;">
        <p>Temperature: ${temperature.toFixed(1)}°${temperatureUnit}</p>
        <p>Conditions: ${day.conditions}</p>
      </div>
    `;

    forecastContainer.innerHTML += forecastDayHtml;
  });

  forecastContainer.style.display = 'flex'; // Show forecast data
}
