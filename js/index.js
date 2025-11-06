let body_main = document.getElementById("body-main");

body_main.onload = function() {

    const requestOptions = {
    method: "GET",
    redirect: "follow"
    };

    fetch("https://api.open-meteo.com/v1/forecast?latitude=47.4143&longitude=9.7419&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,rain_sum,snowfall_sum&hourly=temperature_2m,cloud_cover,wind_speed_10m,wind_direction_10m,rain,snowfall,snowfall_height,relative_humidity_2m&models=meteoswiss_icon_ch1&current=temperature_2m,relative_humidity_2m,rain,snowfall,cloud_cover,wind_speed_10m&timezone=Europe%2FBerlin&past_days=1", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

}