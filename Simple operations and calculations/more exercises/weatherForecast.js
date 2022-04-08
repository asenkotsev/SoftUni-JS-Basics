function weatherForecast(weather) {
    if (weather == "sunny") {
        return "It's warm outside!";
    } else {
        return "It's cold outside!";
    }
}

console.log(weatherForecast('sunny'))