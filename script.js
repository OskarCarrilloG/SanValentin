function ocultarMenu() {
  document.getElementById("fondo").classList.replace("visible", "oculto");
  document.getElementById("botonera").classList.add("oculto");
}

function volverMenu() {
  document.getElementById("fondo").classList.replace("oculto", "visible");
  document.getElementById("opcionNo").classList.replace("visible", "oculto");
  document.getElementById("botonera").classList.remove("oculto");
}

function mostrarOpcionSi() {
  ocultarMenu();
  document.getElementById("opcionSi").classList.replace("oculto", "visible");
}

function mostrarOpcionNo() {
  ocultarMenu();
  const opcionNo = document.getElementById("opcionNo");
  opcionNo.classList.replace("oculto", "visible");

  setTimeout(() => {
    opcionNo.classList.replace("visible", "oculto");
    volverMenu();
  }, 5000);
}
