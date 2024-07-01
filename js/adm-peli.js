/*let peliculas = [];

document.getElementById('agregarPelicula').addEventListener('click', function () {
    let pelicula = {
        titulo: document.getElementById('titulo').value,
        fechaNacimiento: document.getElementById('fechaNacimiento').value,
        genero: document.getElementById('genero').value,
        duracion: document.getElementById('duracion').value,
        director: document.getElementById('director').value,
        reparto: document.getElementById('reparto').value,
        sinopsis: document.getElementById('sinopsis').value
    };
    peliculas.push(pelicula);
    console.log(peliculas);
    alert('Película agregada');
});

document.getElementById('borrarPelicula').addEventListener('click', function () {
    let titulo = document.getElementById('buscarPelicula').value;
    peliculas = peliculas.filter(pelicula => pelicula.titulo !== titulo);
    console.log(peliculas);
    alert('Película borrada');
});

document.getElementById('modificarPelicula').addEventListener('click', function () {
    let titulo = document.getElementById('buscarPelicula').value;
    let pelicula = peliculas.find(pelicula => pelicula.titulo === titulo);
    if (pelicula) {
        pelicula.fechaNacimiento = document.getElementById('fechaNacimiento').value;
        pelicula.genero = document.getElementById('genero').value;
        pelicula.duracion = document.getElementById('duracion').value;
        pelicula.director = document.getElementById('director').value;
        pelicula.reparto = document.getElementById('reparto').value;
        pelicula.sinopsis = document.getElementById('sinopsis').value;
        console.log(peliculas);
        alert('Película modificada');
    } else {
        alert('Película no encontrada');
    }
});

document.getElementById('buscarBtn').addEventListener('click', function () {
    let titulo = document.getElementById('buscarPelicula').value;
    let pelicula = peliculas.find(pelicula => pelicula.titulo === titulo);
    if (pelicula) {
        document.getElementById('titulo').value = pelicula.titulo;
        document.getElementById('fechaNacimiento').value = pelicula.fechaNacimiento;
        document.getElementById('genero').value = pelicula.genero;
        document.getElementById('duracion').value = pelicula.duracion;
        document.getElementById('director').value = pelicula.director;
        document.getElementById('reparto').value = pelicula.reparto;
        document.getElementById('sinopsis').value = pelicula.sinopsis;
    } else {
        alert('Película no encontrada');
    }
});

document.getElementById('borrarDatos').addEventListener('click', function () {
    document.getElementById('titulo').value = '';
    document.getElementById('fechaNacimiento').value = '';
    document.getElementById('genero').value = '';
    document.getElementById('duracion').value = '';
    document.getElementById('director').value = '';
    document.getElementById('reparto').value = '';
    document.getElementById('sinopsis').value = '';
});*/




let peliculas = []; // Esta será tu lista local de películas, inicialmente vacía

// Función para agregar una película
document.getElementById('agregarPelicula').addEventListener('click', async function () {
    // Obtener los datos del formulario
    let pelicula = {
        titulo: document.getElementById('titulo').value,
        fechaNacimiento: document.getElementById('fechaNacimiento').value,
        genero: document.getElementById('genero').value,
        duracion: document.getElementById('duracion').value,
        director: document.getElementById('director').value,
        reparto: document.getElementById('reparto').value,
        sinopsis: document.getElementById('sinopsis').value
    };

    // Realizar una petición POST para agregar la película a la API
    const response = await fetch('https://api.themoviedb.org/3', {
        method: 'POST',
        headers: {
            accept: 'application/json', // Tipo de respuesta esperada (JSON)
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTJjYTAwZDYxZWIzOTEyYjZlNzc4MDA4YWQ3ZmNjOCIsInN1YiI6IjYyODJmNmYwMTQ5NTY1MDA2NmI1NjlhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4MJSPDJhhpbHHJyNYBtH_uCZh4o0e3xGhZpcBIDy-Y8'

        },
        body: JSON.stringify(pelicula)
    });

    if (response.ok) {
        // Si la película se agregó correctamente en la API, también la agregamos localmente
        peliculas.push(pelicula);
        console.log(peliculas);
        alert('Película agregada');
    } else {
        alert('Error al agregar la película');
    }
});

// Función para borrar una película
document.getElementById('borrarPelicula').addEventListener('click', async function () {
    let titulo = document.getElementById('buscarPelicula').value;
    // Realizar una petición DELETE para borrar la película en la API
    const response = await fetch(`https://api.themoviedb.org/3/${titulo}`, {
        method: 'DELETE',
        // Puedes incluir cabeceras adicionales aquí
    });

    if (response.ok) {
        // Si la película se borró correctamente en la API, también la borramos localmente
        peliculas = peliculas.filter(pelicula => pelicula.titulo !== titulo);
        console.log(peliculas);
        alert('Película borrada');
    } else {
        alert('Error al borrar la película');
    }
});

// Función para modificar una película
document.getElementById('modificarPelicula').addEventListener('click', async function () {
    let titulo = document.getElementById('buscarPelicula').value;
    let pelicula = peliculas.find(pelicula => pelicula.titulo === titulo);
    if (pelicula) {
        // Actualizar los datos de la película localmente y en la API
        pelicula.fechaNacimiento = document.getElementById('fechaNacimiento').value;
        pelicula.genero = document.getElementById('genero').value;
        pelicula.duracion = document.getElementById('duracion').value;
        pelicula.director = document.getElementById('director').value;
        pelicula.reparto = document.getElementById('reparto').value;
        pelicula.sinopsis = document.getElementById('sinopsis').value;

        // Realizar una petición PUT para modificar la película en la API
        const response = await fetch(`https://api.themoviedb.org/3/${titulo}`, {
            method: 'PUT',
            headers: {
                accept: 'application/json', // Tipo de respuesta esperada (JSON)
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTJjYTAwZDYxZWIzOTEyYjZlNzc4MDA4YWQ3ZmNjOCIsInN1YiI6IjYyODJmNmYwMTQ5NTY1MDA2NmI1NjlhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4MJSPDJhhpbHHJyNYBtH_uCZh4o0e3xGhZpcBIDy-Y8'

            },
            body: JSON.stringify(pelicula)
        });

        if (response.ok) {
            console.log(peliculas);
            alert('Película modificada');
        } else {
            alert('Error al modificar la película');
        }
    } else {
        alert('Película no encontrada');
    }
});

// Función para buscar una película localmente
document.getElementById('buscarBtn').addEventListener('click', function () {
    let titulo = document.getElementById('buscarPelicula').value;
    let pelicula = peliculas.find(pelicula => pelicula.titulo === titulo);
    if (pelicula) {
        // Mostrar los datos de la película encontrada en el formulario
        document.getElementById('titulo').value = pelicula.titulo;
        document.getElementById('fechaNacimiento').value = pelicula.fechaNacimiento;
        document.getElementById('genero').value = pelicula.genero;
        document.getElementById('duracion').value = pelicula.duracion;
        document.getElementById('director').value = pelicula.director;
        document.getElementById('reparto').value = pelicula.reparto;
        document.getElementById('sinopsis').value = pelicula.sinopsis;
    } else {
        alert('Película no encontrada');
    }
});

// Función para limpiar los datos del formulario
document.getElementById('borrarDatos').addEventListener('click', function () {
    document.getElementById('titulo').value = '';
    document.getElementById('fechaNacimiento').value = '';
    document.getElementById('genero').value = '';
    document.getElementById('duracion').value = '';
    document.getElementById('director').value = '';
    document.getElementById('reparto').value = '';
    document.getElementById('sinopsis').value = '';
});
