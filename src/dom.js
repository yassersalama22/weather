// src/dom.js
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

const weatherContainer = document.getElementById('weatherData');
const forecastContainer = document.getElementById('forecastData');

export function displayWeatherData(data, temperatureUnit) {
  const conditionIcon = data.currentConditions.icon;
  const condition = data.currentConditions.conditions
    .split(',')[0]
    .trim()
    .toLowerCase();
  let backgroundImage = getBackgroundImage(condition);
  document.body.style.backgroundImage = backgroundImage;

  const temperatureF = data.currentConditions.temp;
  const temperature =
    temperatureUnit === 'C' ? ((temperatureF - 32) * 5) / 9 : temperatureF;

  weatherContainer.innerHTML = `
    <h2>Weather for ${data.resolvedAddress}</h2>
    <img src="https://www.visualcrossing.com/img/${conditionIcon}.svg" alt="${condition}" style="width: 50px; height: 50px;">
    <p>Temperature: ${temperature.toFixed(1)}°${temperatureUnit}</p>
    <p>Conditions: ${data.currentConditions.conditions}</p>
  `;
  weatherContainer.style.display = 'block';
}

export function displayForecastData(data, temperatureUnit) {
  forecastContainer.innerHTML = '';
  forecastContainer.style.display = 'flex';

  data.days.slice(1, 6).forEach((day) => {
    const conditionIcon = day.icon;
    const condition = day.conditions.split(',')[0].trim().toLowerCase();
    const temperatureF = day.temp;
    const temperature =
      temperatureUnit === 'C' ? ((temperatureF - 32) * 5) / 9 : temperatureF;
    const forecastDayHtml = `
      <div class="forecast-day">
        <h3>${day.datetime}</h3>
        <img src="https://www.visualcrossing.com/img/${conditionIcon}.svg" alt="${condition}" style="width: 30px; height: 30px;">
        <p>Temperature: ${temperature.toFixed(1)}°${temperatureUnit}</p>
        <p>Conditions: ${day.conditions}</p>
      </div>
    `;
    forecastContainer.innerHTML += forecastDayHtml;
  });

  forecastContainer.style.display = 'flex';
}

function getBackgroundImage(condition) {
  switch (condition) {
    case 'clear':
      return `url(${clearImg})`;
    case 'partially cloudy':
      return `url(${partiallyCloudyImg})`;
    case 'cloudy':
      return `url(${cloudyImg})`;
    case 'rain':
      return `url(${rainImg})`;
    case 'snow':
      return `url(${snowImg})`;
    case 'thunderstorm':
      return `url(${thunderstormImg})`;
    case 'mist':
      return `url(${mistImg})`;
    case 'fog':
      return `url(${fogImg})`;
    case 'haze':
      return `url(${hazeImg})`;
    case 'windy':
      return `url(${windyImg})`;
    default:
      return `url(${defaultImg})`;
  }
}
