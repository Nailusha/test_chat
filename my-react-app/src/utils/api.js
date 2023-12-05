const apiKey = 'dc20a418d2f2c96c8633a9dd33fb2cdd'; 

const fetchWeatherData = async (city) => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message || 'Не удалось получить данные о погоде.');
    }
  } catch (error) {
    throw new Error('Произошла ошибка при выполнении запроса к API.');
  }
};

export { fetchWeatherData };
