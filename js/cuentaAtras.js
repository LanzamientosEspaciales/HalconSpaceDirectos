//// Establecer la fecha límite de la cuenta atrás
var countDownDate = new Date("2025/02/18 20:06:23").getTime();   //// año/mes/dia hh:mm:ss
var nombreMision = "STARLINK 10-12";
document.getElementById('missionName').textContent = nombreMision;

// Variables para controlar el estado de la cuenta atrás
var hold = false;
var scrub = false;
var abort = false;
var exito = false;
var anomalia = false;

// Obtener el elemento del contador
var countdownElement = document.getElementById('countdown');

var countdownElement = document.getElementById('countdown');
var eventoActualElement = document.getElementById('eventoActual');
var eventoActual1Element = document.getElementById('eventoActualDIV');
var eventosDIV = document.getElementById('eventosDIV');

var x = setInterval(function() {

  // Obtener la hora actual
  var now = new Date().getTime();
    
  // Encontrar la distancia entre la hora actual y la fecha límite
  var distance = countDownDate - now;
    
    // Cálculos de tiempo para dias, horas, minutos y segundos
    var hours = Math.floor(distance / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var tiempoCompleto = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
  
    // Mostrar la cuenta atrás en el elemento con el ID "countdown"
    if (distance > 0) {
      // Si todavía hay tiempo restante, mostrar la cuenta atrás

      if(scrub === true) {
        document.getElementById("countdown").innerHTML = "CANCELADO"
        document.getElementById('countdown-container').classList.add('cancelado');
    } else if(abort === true) {
      document.getElementById("countdown").innerHTML = "ABORTO"
      document.getElementById('countdown-container').classList.add('abort');
      
  } else if(hold === true || (scrub && hold) === true) {
        document.getElementById("countdown").innerHTML = "HOLD";
        document.getElementById('countdown-container').classList.add('hold');
        
    } else if(anomalia === true) {
      document.getElementById("countdown").innerHTML = "ANOMALIA";
      document.getElementById('countdown-container').classList.add('anomalia');
      
    } else {
        document.getElementById("countdown").innerHTML = "T-" + formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
      }
      

} else {
    // Si la cuenta atrás ha terminado, mostrar el cronómetro
    var elapsed = -distance + 1000;
var elapsedHours = Math.floor(elapsed / (1000 * 60 * 60));
var elapsedMinutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
var elapsedSeconds = Math.floor((elapsed % (1000 * 60)) / 1000);

if(scrub === true) {
    document.getElementById("countdown").innerHTML = "CANCELADO"
    document.getElementById('countdown-container').classList.add('cancelado');
} else if(abort === true) {
  document.getElementById("countdown").innerHTML = "ABORTO"
  document.getElementById('countdown-container').classList.add('abort');
}  else if(hold === true || (scrub && hold) === true) {
    document.getElementById("countdown").innerHTML = "HOLD";
    document.getElementById('countdown-container').classList.add('hold');
} else if(anomalia === true) {
  document.getElementById("countdown").innerHTML = "ANOMALIA";
  document.getElementById('countdown-container').classList.add('anomalia');
} else {
  document.getElementById("countdown").innerHTML = "T+" + formatTime(elapsedHours) + ":" + formatTime(elapsedMinutes) + ":" + formatTime(elapsedSeconds);
  // Verificar si coincide con algún evento
var tiempoActual = `${formatTime(elapsedHours)}:${formatTime(elapsedMinutes)}:${formatTime(elapsedSeconds)}`;
var indiceEvento = TMas_EventosTiempo.indexOf(tiempoActual);
if (indiceEvento !== -1) {
    eventoActualElement.textContent = TMas_EventosNombre[indiceEvento];
    eventoActual1Element.style.display = 'block';
    eventoActual1Element.classList.remove('slide-up');
    eventoActual1Element.classList.add('slide-down');
    setTimeout(() => {
        eventoActual1Element.classList.remove('slide-down');
        eventoActual1Element.classList.add('slide-up');
        setTimeout(() => {
            eventoActual1Element.style.display = 'none';
        }, 500); // Duración de la animación de ocultación
    }, 3000); // Mostrar durante 3 segundos antes de iniciar la ocultación
}
}

if(exito === true ){
  document.getElementById("eventoActual").innerHTML = "MISIÓN EXITOSA";
  document.getElementById('countdown-container').classList.add('exito');
  eventoActual1Element.style.display = 'block';
  eventoActual1Element.classList.remove('slide-up');
  eventoActual1Element.classList.add('slide-down');

} else return;

}
}, 1000);

// Función para formatear los números de tiempo como dos dígitos
function formatTime(time) {
  if (time < 10) {
    return "0" + time;
  } else {
    return time;
  }
}