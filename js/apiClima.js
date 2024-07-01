window.addEventListener('load', () => {
    let lon;
    let lat;

    // Referencio los elementos del DOM:
    let temperaturaValor = document.getElementById('temperatura-valor');
    let temperaturaDescripcion = document.getElementById('temperatura-descripcion');
    let ubicacion = document.getElementById('ubicacion');
    let iconoAnimado = document.getElementById('iconoAnimado');
    let vientoVelocidad = document.getElementById('vientoVelocidad');

    // Uso la condición si:
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            // Obtener la longitud y latitud del usuario
            lon = position.coords.longitude;
            lat = position.coords.latitude;

            // Construir la URL con la API de OpenWeatherMap
            const API_KEY = 'eb9cb74ea7b696231f527c393939a619'; // Aquí debería ir tu clave de API

            // ubicación por ciudad (en este caso, Necochea):
            const URL = `https://api.openweathermap.org/data/2.5/weather?q=Necochea&lang=es&units=metric&appid=${API_KEY}`;
            console.log(URL); // Mostrar la URL construida en la consola

            // Solicitud fetch a la API de OpenWeatherMap:
            fetch(URL)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok ' + response.statusText);
                    }
                    return response.json();
                })
                .then(data => {
                    let temp = Math.round(data.main.temp);
                    temperaturaValor.textContent = `${temp} °C`;

                    let desc = data.weather[0].description;
                    temperaturaDescripcion.textContent = desc.toUpperCase();

                    ubicacion.textContent = data.name;

                    vientoVelocidad.textContent = `${data.wind.speed} m/s`;

                    //forma de configurar iconos estáticos:
                    if (data.weather[0].icon) {
                        iconoAnimado.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
                        iconoAnimado.alt = desc;
                        console.log(data)
                    }

                    /* //trabajar con iconos animados:
                     //ver correspondencia de código de correspondencia para cada icono según url donde saco los iconos.
                     console.log(data)
                     switch (data.weather[0].main) {
                         case 'Clear':
                             iconoAnimado.src = '../icons-api-clima/day.svg'
                             console.log('LIMPIO')
                             break;
 
                         case 'Clouds':
                             iconoAnimado.src = '../icons-api-clima/cloudy.svg'
                             console.log('NUBES')
                             break;
 
                         case 'Thunderstorm':
                             iconoAnimado.src = '../icons-api-clima/thunder.svg'
                             console.log('TORMENTA')
                             break;
 
                         case 'Rain':
                             iconoAnimado.src = '../icons-api-clima/rainy-7.svg'
                             console.log('LLUVIA')
                             break;
 
                         case 'Drizzle':
                             iconoAnimado.src = '../icons-api-clima/rainy-2.svg'
                             console.log('LLOVIZNA')
                             break;
 
                         case 'Snow':
                             iconoAnimado.src = '../icons-api-clima/snowy-6.svg'
                             console.log('NIEVE')
                             break;
 
                         case 'Atmosphere':
                             iconoAnimado.src = '../icons-api-clima/weather.svg'
                             console.log('ATMOSFERA')
                             break;
 
                         default:
                             iconoAnimado.src = '../icons-api-clima/cloudy-day-2.svg'
                             console.log('por defecto');
                     }*/



                })
                // Si tenemos un error lo mostramos por consola:
                .catch(error => {
                    console.log('Error al obtener datos de OpenWeatherMap:', error);
                });
        });
    } else {
        console.warn('Geolocalización no está disponible en este navegador.');
    }
});
