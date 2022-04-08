//Elementos para el funcionamiento de tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

//Elemento de jquery
$("#enviar").click(function () { 
    alert("Contacto exitoso")
});