

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9725cc86c8msh0fdf57ae05dbc8cp10f6f3jsn62df2a01457f',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};


const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
fetch(url, options)
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
