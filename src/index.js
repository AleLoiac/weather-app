import { fetchWeather } from "./api/fetchData";
import "./modern-normalize.css";
import "./font.css";
import "./styles.css";

const location = document.querySelector("#location");
const searchBtm = document.querySelector("button");

searchBtm.addEventListener("click", (e) => {
  e.preventDefault();

  const locationValue = location.value;
  if (locationValue) {
    fetchWeather(locationValue);
  }
});
