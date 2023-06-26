document.addEventListener('DOMContentLoaded', function () {

  const inputNombre = document.getElementById("inputNombre");
  const inputEmail = document.getElementById("inputEmail");
  const inputTelefono = document.getElementById("inputTelefono");
  const inputEdad = document.getElementById("inputEdad");
  const inputCategoria = document.getElementById("inputCategoria");
  const btnEnviar = document.getElementById("btnEnviar");

  btnEnviar.addEventListener('click', imprimirEnConsola);

  function imprimirEnConsola() {
    console.log("Nombre:", inputNombre.value);
    console.log("Email:", inputEmail.value);
    console.log("Telefono:", inputTelefono.value);
    console.log("Edad:", inputEdad.value);
    console.log("Categoría:", inputCategoria.value);
  }

});