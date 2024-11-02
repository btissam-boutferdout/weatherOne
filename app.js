// variables
let container = document.querySelector(".container");
let Search = document.querySelector(".searchBox button");
let weatherBox = document.querySelector(".weatherBox");
let detailsBox = document.querySelector(".detailsBox");
//
Search.addEventListener("click", () => {
  const ApiKey = "fdbb2e2ee2debb596b50ed79219419f6";
  const city = document.querySelector(".searchBox input").value;
  //
  if (city == "") return;
  //
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`
  )
    .then((Response) => Response.json())
    .then((json) => {
      const image = document.querySelector(".weatherBox img");
      const temperateur = document.querySelector(".weatherBox .temperateur");
      const description = document.querySelector(".weatherBox .description");
      const humidity = document.querySelector(".detailsBox .humidity");
      const wind = document.querySelector(".detailsBox .wind");
      //
      switch (json.weather[0].main) {
        case "Clear":
          image.src = "images/clear--removebg-preview.png";
          break;
        case "Clouds":
          image.src = "images/cloud--removebg-preview.png";
          break;
        case "Mist":
          image.src = "images/mist-removebg-preview.png";
          break;
        case "Overcast":
          image.src = "images/overcast clouds.png";
          break;
        case "Rain":
          image.src = "images/rain.webp";
          break;
        case "Snow":
          image.src = "images/snow-removebg-preview.png";
          break;
        default:
          image.src = "images/clear--removebg-preview.png";
      }
      //
      temperateur.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
      description.innerHTML = `${json.weather[0].description}`;
      humidity.innerHTML = ` 
        <div class="humidity">
              <div class="icon"><i class="fa-solid fa-water"></i></div>
              <div>
                <p class="para">${json.main.humidity} %</p>
                <p class="para">Humidity</p>
              </div>
            </div>`;
      wind.innerHTML = `<div class="wind">
              <div class="icon"><i class="fa-solid fa-wind"></i></div>
              <div>
                <p class="para">${parseInt(json.wind.speed)}Km/h</p>
                <p class="para">wind speed</p>
              </div>
            </div>`;
    });
});
