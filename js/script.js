//Const
const nombre = document.getElementById("name");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const error = document.getElementById("error");
const formulario = document.getElementById("form");

//Regular expresión
let regexLetras = /^[A-Za-z]+$/;  
let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

//Variables
let msjAlerta="";
let alerta =false;

//Functions
//Valid name, lastname
function validText(campo, valor){
  if(valor.length < 4 || !regexLetras.test(valor)){
    msjAlerta += "Por favor introduce un "+ campo.name +" válido. Al menos 4 letras sin números, espacios o caracteres especiales. <br>";
    alerta =true;
  }
}
//Valid email
function validEmail(){
  if(!regexEmail.test(email.value) || email.value.length < 6){
    msjAlerta += "Por favor introduce un E-mail válido <br>";
    alerta =true;
  }
}
//Valid Form
function validForm(){
  validText(nombre,nombre.value);
  validText(apellido,apellido.value);
  validEmail();
}

//Event on form submit
formulario.addEventListener("submit",e=>{
  msjAlerta=""
  validForm();
  if (alerta){
    e.preventDefault();
    error.innerHTML = msjAlerta;
  }
  else{
    msjAlerta ="Gracias por contactarse con nosotros &#128525";
  }
})
