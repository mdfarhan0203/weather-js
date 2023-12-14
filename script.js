console.log("hello world")

const apiKey="324be0d391437b1f0493ea8d8fa50b58";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchCity = document.querySelector('input');
const searchBox = document.querySelector("button");
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city){
    const response= await fetch(apiUrl+city+`&appid=${apiKey}`)
    const result= await response.json()
console.log("response",result)

    document.querySelector(".city-name").innerHTML = result.name
    document.querySelector(".temp").innerHTML = Math.round(result.main.temp) + " °C"
    document.querySelector(".humidity").innerHTML = result.main.humidity
    document.querySelector(".wind").innerHTML = result.wind.speed + " KM/H"

    if(result.weather[0].main == 'Clear'){
            weatherIcon.src = 'images/clear.png'
    }
    else if(result.weather[0].main == 'Clouds'){
        weatherIcon.src = 'images/clouds.png'
    }
    else if(result.weather[0].main == 'Rain'){
        weatherIcon.src = 'images/rain.png'
    }
    else if(result.weather[0].main == 'Drizzle'){
        weatherIcon.src = 'images/drizzle.png'
    }
    else if(result.weather[0].main == 'Mist'){
        weatherIcon.src = 'images/mist.png'
    }
    else if(result.weather[0].main == 'Mist'){
        weatherIcon.src = 'images/mist.png'
    }
    else if(result.weather[0].main == 'Snow'){
        weatherIcon.src = 'images/snow.png'
    }
    else{
        weatherIcon.src = 'images/drizzle.png'
    }
    document.querySelector(".weather").style.display='block';
    document.querySelector('input').value='';


}

searchBox.addEventListener("click",()=>{
    checkWeather(searchCity.value)

})


