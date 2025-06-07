import { renderData } from "../utils/renderResults";

const apiKey = "Y5AFPAN8A85957KL753735DSF";
const spinner = document.querySelector(".loader");

export async function fetchWeather(location) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${apiKey}&contentType=json`;

  spinner.style.display = "block";
  try {
    const response = await fetch(url, { mode: "cors" });
    const responseData = await response.json();
    console.log(responseData);
    const filteredData = filterWeatherData(responseData);
    console.log(filteredData);
    renderData(filteredData);
  } catch (err) {
    console.log(err);
  }
  spinner.style.display = "none";
}

function filterWeatherData(response) {
  const weatherObj = {
    fullLocationName: response.resolvedAddress,
    condition: response.currentConditions.conditions,
    icon: response.currentConditions.icon,
    temperature: response.currentConditions.temp,
    perceivedTemperature: response.currentConditions.feelslike,
    forecastDescription: response.description,
  };
  return weatherObj;
}
