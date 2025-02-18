// Eventos con su tiempo en el timeline (en segundos).
const events = [
    { time: 5, label: 'Despegue' },
    { time: 15, label: 'MECO' },
    { time: 25, label: 'Stage SEP' },
    { time: 30, label: 'SES-1' },
];

let totalTime = 30; // Tiempo total en segundos (30 segundos por ejemplo)
let progressBar = document.querySelector('.progress');
let timeline = document.querySelector('.timeline');
let eventsContainer = document.querySelector('.events');

// Función para actualizar la barra de progreso
function updateProgress(percent) {
    progressBar.style.width = `${percent}%`;
}

// Función para crear el evento en el timeline
function createEvent(time, label) {
    const eventElement = document.createElement('div');
    eventElement.classList.add('event');
    eventElement.innerHTML = `<span>${label}</span>`;
    eventElement.style.left = `${(time / totalTime) * 100}%`;
    eventsContainer.appendChild(eventElement);
    return eventElement;
}

// Función para animar los eventos
function animateEvents() {
    let currentTime = 0;

    let interval = setInterval(() => {
        if (currentTime >= totalTime) {
            clearInterval(interval);  // Detener cuando el tiempo llegue al total
        } else {
            currentTime += 1;
            updateProgress((currentTime / totalTime) * 100);

            // Mostrar y mover los eventos en el timeline
            events.forEach(event => {
                if (currentTime >= event.time) {
                    let eventElement = createEvent(event.time, event.label);
                    eventElement.style.opacity = 1;
                    eventElement.style.transform = `translateX(-50%) translateY(-50px)`;
                    setTimeout(() => {
                        eventElement.style.opacity = 0;
                        eventElement.style.transform = `translateX(-50%) translateY(50px)`;
                    }, 2000); // El evento se oculta después de 2 segundos
                }
            });
        }
    }, 1000);  // Avanza cada segundo
}

// Llamar a la función de animación
animateEvents();
