const city = document.getElementById('city').value;

const latitude = document.getElementById('latitude');
const longitude = document.getElementById('longitude');

const lon_value = document.querySelector("#lon_value");
lon_value.textContent = longitude.value;
longitude.addEventListener("input", (event) => {
    lon_value.textContent = event.target.value;
});

const lat_value = document.querySelector("#lat_value");
lat_value.textContent = latitude.value;
latitude.addEventListener("input", (event) => {
    lat_value.textContent = event.target.value;
});


function showWeatherDetailsByCity(event){

    // prevent the default behavior of the form submission event
    event.preventDefault();

    // prepare OpenWeatherMap API key and URL
    const apiKey = '0c10cd4d42148e2a0df2fe4df08d6ac6'; // Replace with newer API key from 'https://home.openweathermap.org/api_keys'
    const apiUrlCity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    
    // fetch initiates an asynchronous HTTP requesto to the apiURl
    // response is handled by the a promise using .then() 
    // first .then() converts the response to json format
    // second .then() access the results
    fetch(apiUrlCity)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            console.log(data);
            // dynamically updating the html file with structured infos
            weatherInfo.innerHTML = `
            <h2>${data.name} city's current weather</h2>
            <p>Temperature = ${data.main.temp}&#176;&#8490; or ${convertKelvinToCelsius(data.main.temp)} &#8451;</p>
            <p>Weather description: ${data.weather[0].description}</p>
        `;
        })
        .catch(error => {
            console.log("Error fetching weather: ", error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <p>Failed to fetch the weather. Please try again.</p>
            `;

        });
}



function showWeatherDetailsByCoordinates(event) {

    // prevent the default behavior of the form submission event
    event.preventDefault();

    const lon = longitude.value;
    const lat= latitude.value;
    const apiKey = '0c10cd4d42148e2a0df2fe4df08d6ac6'; // Replace with newer API key from 'https://home.openweathermap.org/api_keys'
    const apiUrlCoordinates = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    // fetch initiates an asynchronous HTTP requesto to the apiURl
    fetch(apiUrlCoordinates)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            console.log(data);
            // dynamically updating the html file with structured infos
            weatherInfo.innerHTML = `
            <h2>${data.name} city's current weather</h2>
            <p>Temperature = ${data.main.temp}&#176;&#8490; or ${convertKelvinToCelsius(data.main.temp)} &#8451;</p>
            <p>Weather description: ${data.weather[0].description}</p>
        `;
        })
        .catch(error => {
            console.log("Error fetching weather: ", error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <p>Failed to fetch the weather. Please try again.</p>
            `;

        });
}

// attach an event listener to the weatherForm element
// listening for a 'submit' event triggers the showWeatherDetails function 
document.getElementById('weatherFormCity').addEventListener('submit', showWeatherDetailsByCity);
document.getElementById('weatherFormCoordinates').addEventListener('submit', showWeatherDetailsByCoordinates);





function convertKelvinToCelsius(kel) {
    // 32°F --> (32°F − 32) × 5/9 = 0°C
    const cel = kel - 273.15;
    return cel.toFixed(2);
}