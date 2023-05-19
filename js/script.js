/* FORMULARIO + VALIDACIÓN  */

function validarFormulario1() {
  var nombre = document.forms["formulario1"]["nombre"].value;
  if (nombre == "") {
    alert("Por favor, ingresa un nombre válido.");
    return false;
  
  }
  /* if (!isNaN(nombre)) {
    alert("Por favor, ingresa un nombre válido (no se permiten números).");
    return false;
  } 
    VER COMO HACER PARA QUE NO ME DEJE PONER NÚMEROS EN EL NOMBRE  
  */ 
}

function validarFormulario2() {
  var email = document.forms["formulario2"]["email"].value;
  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email == "") {
    alert("Por favor, ingresa una dirección de correo electrónico.");
    return false;
  }

  if (!email.match(emailRegex)) {
    alert("Por favor, ingresa una dirección de correo electrónico válida.");
    return false;
  }
}
// Traer los labels para las func
function validarFormulario1(){
  validarFormulario1();
  validarFormulario2();
}

/* EVENT LISTENER PARA LAS CAJAS DE LOS ARTÍCULOS PERIODÍSTICOS */

