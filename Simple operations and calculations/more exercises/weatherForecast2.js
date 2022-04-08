function weatherForecast(temperature) {
    if (temperature >=36) {
        return 'unknown';
    }
    if (temperature >=35) {
        return 'Hot';
    } else if (temperature >=26) {
        return 'Hot';    
    } else if (temperature >= 20.1) {
        return 'Warm';
    } else if (temperature >= 25.9) {
        return 'Warm';
    } else if (temperature >= 15) {
        return 'Mild';
    } else if (temperature >= 20) {
        return "Mild";
    } else if (temperature >= 12) {
        return "Cool";
    } else if (temperature >= 14.9) {
        return "Cool";  
    } else if (temperature >= 5) {
        return "Cold";
    } else if (temperature >= 11.9) {
        return "Cold";
    } else {
        return "unknown"
    }
}

console.log(weatherForecast(8))