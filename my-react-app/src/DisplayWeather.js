import React, { useState, useEffect } from 'react';
import { fetchWeatherData } from './utils/api';

const DisplayWeather = ({ city }) => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchWeatherData(city);
                setWeatherData(data);
            } catch (error) {
                console.error('Error fetching weather data:', error.message);
            }
        };

        fetchData();
    }, [city]);

    return (
        <div>
            {weatherData ? (
                <p>Текущая температура в {weatherData.name}: {weatherData.main?.temp}°C</p>
            ) : (
                <p>Идет загрузка данных...</p>
            )}
        </div>
    );
};

export default DisplayWeather;
