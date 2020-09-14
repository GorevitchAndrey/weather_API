function changeApi() {
    let choiceId = document.querySelector('.city-selection').value;

    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${choiceId}&appid=22863d5fc7ba02e74852f654f80c1bba`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);
            document.querySelector('.city-name').textContent = `${data.name}, ${data.sys.country}`;
            document.querySelector('.temperature-air').innerHTML = `Air temperature: ${Math.round(data.main.temp - 273)}&#176;`;
            document.querySelector('.wind').textContent = `Wind speed: ${data.wind.speed} m/s`;
            document.querySelector('.pressure-air').textContent = 'Atmosphere pressure: ' + data.main.pressure;
            document.querySelector('.clouds').textContent = data.weather[0].description;
            document.querySelector('.icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
        })
}
document.querySelector('.city-selection').onchange = changeApi;
document.addEventListener("DOMContentLoaded", changeApi);