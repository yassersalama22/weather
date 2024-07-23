// src/api.js
const apiKey = 'YGKFSTXNPDEH9ACPLFHGCZ7A3'; // Replace with your actual API key

export async function fetchWeatherData(location) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}&iconSet=icons1`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response was not ok');
    const weatherData = await response.json();
    localStorage.setItem('weatherData', JSON.stringify(weatherData));
    return weatherData;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
}
