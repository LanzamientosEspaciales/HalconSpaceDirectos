// Función para cargar el archivo JSON con la fecha de lanzamiento
function cargarFechaLanzamiento() {
    fetch('../fecha_lanzamiento.json')
        .then(response => response.json())
        .then(data => {
            const fechaLanzamiento = new Date(data.lanzamiento); // Obtener la fecha desde el JSON
            iniciarCuentaRegresiva(fechaLanzamiento);
        })
        .catch(error => console.error("Error cargando el JSON:", error));
}

// Función para iniciar la cuenta regresiva
function iniciarCuentaRegresiva(fechaLanzamiento) {
    const countdownElement = document.getElementById('countdown');

    const intervalo = setInterval(() => {
        const ahora = new Date();
        const diferencia = fechaLanzamiento - ahora;

        if (diferencia <= 0) {
            clearInterval(intervalo);
            countdownElement.textContent = "¡Lanzamiento en curso!";
        } else {
            const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

            countdownElement.textContent = `${horas}h ${minutos}m ${segundos}s`;
        }
    }, 1000);
}

// Cargar la fecha de lanzamiento al cargar la página
cargarFechaLanzamiento();
