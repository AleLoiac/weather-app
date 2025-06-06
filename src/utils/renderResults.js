const name = document.querySelector(".name>span");
const condition = document.querySelector(".condition>span");
const temp = document.querySelector(".temp>span");
const perceivedTemp = document.querySelector(".perceived-temp>span");
const description = document.querySelector(".description>span");

export function renderData(cleanResponse) {
  name.textContent = cleanResponse.fullLocationName;
  condition.textContent = cleanResponse.condition;
  temp.textContent = cleanResponse.temperature;
  perceivedTemp.textContent = cleanResponse.perceivedTemperature;
  description.textContent = cleanResponse.forecastDescription;
}
