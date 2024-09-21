const cityInput = document.getElementById('cityInput');
const getWeatherBtn = document.getElementById('getWeatherBtn');
const weatherResult = document.getElementById('weatherResult');

getWeatherBtn.addEventListener('click', async () => {
    const city = cityInput.value;
    const apiKey = '647fc89903f75a17004550ca28c1aa8e'; // Replace with your OpenWeatherMap API key

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (data.cod === 200) {
            weatherResult.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Condition: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
        } else {
            weatherResult.innerHTML = `<p>${data.message}</p>`;
        }
    } catch (error) {
        weatherResult.innerHTML = 'Error fetching weather data. Please try again.';
    }
});
