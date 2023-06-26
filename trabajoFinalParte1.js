
const inputNombre = document.getElementById("inputNombre");
const inputEmail = document.getElementById("inputEmail");
const inputTelefono = document.getElementById("inputTelefono");
const inputEdad = document.getElementById("inputEdad");
const inputCategoria = document.getElementById("inputCategoria");

const btnEnviar = document.getElementById("btnEnviar");
btnEnviar.addEventListener('click', enviarForm);

function enviarForm() {
  imprimirEnConsola();
}

function imprimirEnConsola() {
  const nombre = inputNombre.value;
  const email = inputEmail.value;
  const telefono = inputTelefono.value;
  const edad = inputEdad.value;
  const categoria = inputCategoria.value;
   
  let error = validarDatos(nombre,edad,categoria);
  if (error) {
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

function validarDatos(nombre,edad,categoria) {
  if (!nombre) {
    return "El campo nombre no debe estar vacío"
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

