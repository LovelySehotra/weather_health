

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9725cc86c8msh0fdf57ae05dbc8cp10f6f3jsn62df2a01457f',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};


const getWeather = (city) => {

    cityName.innerHTML = city
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
    fetch(url + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })


        .catch(error =>
            console.error(error));
}
submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)

})

getWeather("Pune");

const getjammu = (city) => {


    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
    fetch(url + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            cloud_pct2.innerHTML = response.cloud_pct
            temp2.innerHTML = response.temp
            feels_like2.innerHTML = response.feels_like
            humidity2.innerHTML = response.humidity
            min_temp2.innerHTML = response.min_temp
            max_temp2.innerHTML = response.max_temp
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees2.innerHTML = response.wind_degrees
            sunrise2.innerHTML = response.sunrise
            sunset2.innerHTML = response.sunset
        })


        .catch(error =>
            console.error(error));
}
submit.addEventListener("click", (e) => {
    e.preventDefault()
    getjammu(city.value)

})

getjammu("jammu");


const getchandigarh = (city) => {


    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
    fetch(url + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            cloud_pct3.innerHTML = response.cloud_pct
            temp3.innerHTML = response.temp
            feels_like3.innerHTML = response.feels_like
            humidity3.innerHTML = response.humidity
            min_temp3.innerHTML = response.min_temp
            max_temp3.innerHTML = response.max_temp
            wind_speed3.innerHTML = response.wind_speed
            wind_degrees3.innerHTML = response.wind_degrees
            sunrise3.innerHTML = response.sunrise
            sunset3.innerHTML = response.sunset
        })


        .catch(error =>
            console.error(error));
}
submit.addEventListener("click", (e) => {
    e.preventDefault()
    getchandigarh (city.value)

})

getchandigarh ("chandigarh ");

const getdelhi = (city) => {


    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
    fetch(url + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            cloud_pct4.innerHTML = response.cloud_pct
            temp4.innerHTML = response.temp
            feels_like4.innerHTML = response.feels_like
            humidity4.innerHTML = response.humidity
            min_temp4.innerHTML = response.min_temp
            max_temp4.innerHTML = response.max_temp
            wind_speed4.innerHTML = response.wind_speed
            wind_degrees4.innerHTML = response.wind_degrees
            sunrise4.innerHTML = response.sunrise
            sunset4.innerHTML = response.sunset
        })


        .catch(error =>
            console.error(error));
}
submit.addEventListener("click", (e) => {
    e.preventDefault()
    getdelhi(city.value)

})

getdelhi("delhi");
