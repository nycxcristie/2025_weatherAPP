// homework week 5- starts (part 2)
function showTemp(respond) {
  let currentCityTemp = Math.round(respond.data.temperature.current);

  updatedTemp = document.querySelector("#currentTemp");
  updatedTemp.innerHTML = currentCityTemp;
}
// homework week 5- ends (part 2)

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#currentCity");
  cityElement.innerHTML = searchInputElement.value;
  // homework week 5- starts (part 1)
  let apiKey = "f3e16t09873bb0ba34afa0c464d14o8b";
  let query = searchInputElement.value;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(showTemp);
}
// homework week 5- ends (part 1)

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
