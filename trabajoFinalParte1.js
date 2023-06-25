document.addEventListener('DOMContentLoaded', function() {
  
  const inputNombre = document.getElementById("inputNombre");
  const inputEmail = document.getElementById("inputEmail");
  const inputTelefono = document.getElementById("inputTelefono");
  const inputEdad = document.getElementById("inputEdad");
  const inputCategoria = document.getElementById("inputCategoria");
  const btnEnviar = document.getElementById("btnEnviar");
  
  btnEnviar.addEventListener('click', imprimirEnConsola);
  
  function imprimirEnConsola() {
    const nombre = inputNombre.value;
    const email = inputEmail.value;
    const telefono = inputTelefono.value;
    const edad = inputEdad.value;
    const categoria = inputCategoria.value;
  
    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("Telefono:", telefono);
    console.log("Edad:", edad);
    console.log("Categoría:", categoria);
  }
  
});