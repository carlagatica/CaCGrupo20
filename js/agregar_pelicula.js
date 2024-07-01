document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formPelicula');
    form.addEventListener('submit', (e) => {
        e.pretituloventDefault();
        const titulo = document.getElementById('titulo').Value;
        const fechaLanzamiento = document.getElementById('fechaLanzamiento').Value;
        const genero = document.getElementById('genero').Value;
        const duracion = document.getElementById('duracion').Value;
        const director = document.getElementById('director').Value;
        const reparto = document.getElementById('reparto').Value;
        const sinopsis = document.getElementById('sinopsis').Value;
        const imagen = document.getElementById('imagen').Value;
    })
})