import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import WeatherCard from "../components/WeatherCard";

function Weather() {

    const [weatherData, setWeatherData] = useState([]);

    const fetchWeatherData = async (url) => {
        try {
            const response = await fetch(url, {
                headers: {
                    Accept: 'application/json',
                },
            });
            const data = await response.json();
            return data.current_weather;
        } catch (error) {
            console.error('Error fetching weather data:', error);
            return null;
        }
    };

    useEffect(() => {
        const urls = [
            'https://api.open-meteo.com/v1/forecast?latitude=50.088&longitude=14.4208&hourly=temperature_2m&current_weather=true', // Prague
            'https://api.open-meteo.com/v1/forecast?latitude=48.7139&longitude=21.2581&hourly=temperature_2m&current_weather=true', // Košice
            'https://api.open-meteo.com/v1/forecast?latitude=48.9475&longitude=20.7957&hourly=temperature_2m&current_weather=true' // vlachy
        ];

        Promise.allSettled(urls.map(fetchWeatherData))
            .then((results) => {
                const successfulResults = results.filter(result => result.status === 'fulfilled');
                const data = successfulResults.map(result => result.value);
                setWeatherData(data);
            });
    }, []);

    return (
        <div>
            {weatherData.map((data, index) => (
                <WeatherCard
                    key={index}
                    locationName={`Location ${index + 1}`} // Example location name
                    temperature={data.temperature}
                    windSpeed={data.windspeed}
                />
            ))}
        </div>
    );
}

export default Weather;