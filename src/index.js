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

document
  .getElementById('searchForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    const location = document.getElementById('locationInput').value;
    fetchWeatherData(location);
  });

async function fetchWeatherData(location) {
  const apiKey = 'YGKFSTXNPDEH9ACPLFHGCZ7A3'; // Replace with your actual API key
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const weatherData = await response.json();
    displayWeatherData(weatherData);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    document.getElementById('weatherData').innerText =
      'Error fetching weather data.';
  }
}

function displayWeatherData(data) {
  console.log(data);

  const weatherContainer = document.getElementById('weatherData');
  const condition = data.currentConditions.conditions.toLowerCase();
  let backgroundImage = '';

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

      document.body.style.backgroundImage = backgroundImage;
      weatherContainer.innerHTML = `
        <h2>Weather for ${data.resolvedAddress}</h2>
        <p>Temperature: ${data.currentConditions.temp}°C</p>
        <p>Conditions: ${data.currentConditions.conditions}</p>
    `;
  }
}
