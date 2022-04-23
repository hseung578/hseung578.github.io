const API_KEY = "b9d1bc6de5925bba233a9856680cc591";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherImg = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:nth-child(2)");
      const city = document.querySelector("#weather span:last-child");
      const weatherIcon = data.weather[0].icon;
      const weatherImage = document.createElement("img");
      weatherImage.id = "icon";
      const weatherIconURL = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

      weatherImage.src = weatherIconURL;
      city.innerText = data.name;
      weather.innerText = ` ${data.main.temp}℃`;

      weatherImg.appendChild(weatherImage);
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
