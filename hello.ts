//fetch weather data from openweathermap.org
function getWeather(city) {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => data.main.temp);
}
//fetch forecast data from openweathermap.org
function getForecast(city) {
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => data.list);
}