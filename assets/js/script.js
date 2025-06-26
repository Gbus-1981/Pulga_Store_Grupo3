function mostrarFecha() {
  const fecha = new Date();
  const diasSemana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
  const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio",
                "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

  const mensaje = `Hoy es ${diasSemana[fecha.getDay()]} ${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}, y son las ${fecha.getHours()} horas, ${fecha.getMinutes()} minutos con ${fecha.getSeconds()} segundos.`;

  console.log("Fecha y hora actual:", mensaje);
  document.getElementById("fechayhora").innerHTML = mensaje;

  
}

window.onload = mostrarFecha;
