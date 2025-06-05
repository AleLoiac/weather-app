const apiKey = "Y5AFPAN8A85957KL753735DSF";

export async function fetchWeather(location) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${apiKey}&contentType=json`;

  try {
    const response = await fetch(url, { mode: "cors" });
    const responseData = await response.json();
    console.log(responseData);
  } catch (err) {
    console.log(err);
  }
}
