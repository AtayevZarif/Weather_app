let main = document.querySelector("main")
let input = document.querySelector("input")
let searchButton = document.querySelector("button")

let weatherDetails = document.querySelector(".weather-details")
let weatherBox = document.querySelector(".weather-box")
let notFound = document.querySelector(".not-found")

let descriptionImg = document.querySelector("#description-img")
let description = document.getElementById("description")
let temperature = document.querySelector("h2")
let humidity = document.getElementById("humidity-info")
let wind = document.getElementById("wind-info")


let myFunction = () => {
    let APIkey = "5f1077f561d87b1be334b15838fc01b4";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${APIkey}&units=metric`)
    .then(res => res.json())
    .then(data => resaultFunction(data))
    .catch(err => {
        console.error(err)
        notFound.style.visibility = "visible"
    })
    
    let resaultFunction = (data) => {
        weatherDetails.classList.add("active")
        weatherBox.classList.add("active")
        main.classList.add("active")

        console.log(data);


        descriptionImg.src = "./images/" + data.weather[0].main + ".svg"
        description.innerHTML = data.weather[0].description
        temperature.innerHTML = Math.round(data.main.temp) + "°"
        humidity.innerHTML = data.main.humidity + "g/m³"
        wind.innerHTML = data.wind.speed + "m/s"

        console.log(data);
    }
}

searchButton.addEventListener("click", myFunction)