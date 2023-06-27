const btnAgregar = document.getElementById("btnAgregar");
const btnBorrar = document.getElementById("btnBorrar");
const btnDeleteTarea = document.getElementById("btnDeleteTarea");

const contenedor = document.getElementById("contenedor");

btnAgregar.addEventListener('click', agregarTarea);
btnBorrar.addEventListener('click', borrarUnaTarea);
btnDeleteTarea.addEventListener('click', borrarTodo);

let contador = 1;

function click() {
  console.log("Click")
}

function agregarTarea() {
  const div = document.createElement("div");
  div.className = "contenedorTarea";

  const input = document.createElement("input");
  input.setAttribute("id", "tarea" + contador);
  input.setAttribute("class", "tarea");
  input.setAttribute("type", "text");

  const inputCheck = document.createElement("input");
  inputCheck.setAttribute("for", "tarea" + contador);
  inputCheck.setAttribute("class", "check");
  inputCheck.setAttribute("type", "checkbox");

  const borrar = document.createElement("button");
  borrar.innerHTML = "Borrar";
  borrar.setAttribute("id", "btnDeleteTarea" + contador);
  borrar.setAttribute("class", "delete");

  div.appendChild(input);
  div.appendChild(inputCheck);
  div.appendChild(borrar);

  contenedor.appendChild(div);
  contador += 1;
}

function borrarUnaTarea() {
  contenedor.innerHTML = '';
}

function borrarTodo() {

}

function checkear() {

}