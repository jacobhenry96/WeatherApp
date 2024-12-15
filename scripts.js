const API_KEY = "390eeb1d7f05657dc5c990b8c42170c5";

document.getElementById("weatherForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    const city = document.getElementById("cityInput").value;
    const resultDiv = document.getElementById("result");

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        resultDiv.innerHTML = `
            <div class="weather-info">
                <h2 class="city-name">${data.name}</h2>
                <p class="temperature">${data.main.temp}°C</p>
                <p class="description">${data.weather[0].description}</p>
            </div>
        `;
    } catch (error) {
        resultDiv.textContent = `Error: ${error.message}`;
    }
});