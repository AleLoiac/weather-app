const name = document.querySelector(".name>span");
const condition = document.querySelector(".condition>span");
const image = document.querySelector(".image>img");
const temp = document.querySelector(".temp>span");
const perceivedTemp = document.querySelector(".perceived-temp>span");
const description = document.querySelector(".description>span");

export function renderData(cleanResponse) {
  name.textContent = cleanResponse.fullLocationName;
  condition.textContent = "Condition: " + cleanResponse.condition;
  image.src = importImage(cleanResponse.icon);
  temp.textContent = cleanResponse.temperature + "˚";
  perceivedTemp.textContent =
    "Feels like: " + cleanResponse.perceivedTemperature + "˚";
  description.textContent = cleanResponse.forecastDescription;
}

function importImage(icon) {
  const url = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/58c79610addf3d4d91471abbb95b05e96fb43019/SVG/1st%20Set%20-%20Color/${icon}.svg`;
  return url;
}
