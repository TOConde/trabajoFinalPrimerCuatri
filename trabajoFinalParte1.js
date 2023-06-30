
const inputNombre = document.getElementById("inputNombre");
const inputEmail = document.getElementById("inputEmail");
const inputTelefono = document.getElementById("inputTelefono");
const inputEdad = document.getElementById("inputEdad");
const inputCategoria = document.getElementById("inputCategoria");

const btnEnviar = document.getElementById("btnEnviar");
btnEnviar.addEventListener('click', enviarForm);

const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/; // letras mayusculas, minusculas y espacios y tildes
const regexEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/; //mail del tipo string@string.string
const regexTelefono = /^\d+$/; //solo numeros

function enviarForm() {
  imprimirEnConsola();
}

function imprimirEnConsola() {
  const nombre = inputNombre.value;
  const email = inputEmail.value;
  const telefono = inputTelefono.value;
  const edad = inputEdad.value;
  const categoria = inputCategoria.value;

  let error = validarDatos(nombre, email, telefono, edad, categoria);
  if (error) {
    console.clear();
    console.log(error);
    return
  }

  console.clear();
  console.log("Nombre:", nombre);
  console.log("Email:", email);
  console.log("Telefono:", telefono);
  console.log("Edad:", edad);
  console.log("Categoría:", categoria);
}

function validarDatos(nombre, email, telefono, edad, categoria) {
  if (!nombre) {
    return "El campo nombre no debe estar vacío"
  }
  if (!regexNombre.test(nombre)) {
    return "Ingrese nombre sin números ni caracteres"
  }
  if (!email) {
    return "El campo email no debe estar vacío"
  }
  if (!regexEmail.test(email)) {
    return "Ingrese un email valido"
  }  
  if (!telefono) {
    return "El campo teléfono no debe estar vacío"
  }
  if (!regexTelefono.test(telefono)) {
    return "Ingrese un teléfono valido, solo números"
  }
  if (!edad) {
    return "El campo edad no debe estar vacío"
  }
  if (edad < 18) {
    return "El usuario debe ser mayor de 18 años"
  }
  if (categoria === "Elije una opcion...") {
    return "Elejí una opcion en categoría"
  }
}

