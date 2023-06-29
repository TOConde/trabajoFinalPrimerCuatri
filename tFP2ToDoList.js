const btnAgregar = document.getElementById("btnAgregar");
const btnBorrar = document.getElementById("btnBorrar");

let contador = 1;

const contenedor = document.getElementById("contenedor");

btnAgregar.addEventListener('click', agregarTarea);
btnBorrar.addEventListener('click', borrarTodo);

function agregarTarea() {
  const div = document.createElement("div");
  div.setAttribute("id", "contenedorTarea" + contador);
  div.setAttribute("class", "contenedorTarea")

  const input = document.createElement("input");
  input.setAttribute("id", "tarea" + contador);
  input.setAttribute("class", "tarea");
  input.setAttribute("type", "text");

  const inputCheck = document.createElement("input");
  inputCheck.setAttribute("id", "check" + contador);
  inputCheck.setAttribute("for", "tarea" + contador);
  inputCheck.setAttribute("class", "check");
  inputCheck.setAttribute("type", "checkbox");


  inputCheck.addEventListener('click', function () {
    cambiarEstilo(inputCheck);
  })

  const borrar = document.createElement("button");
  const imagenIcono = document.createElement("img");
  imagenIcono.setAttribute("class", "deleteIcon");
  imagenIcono.setAttribute("src", "imagenes/imgParte2/deleteIcon.png")
  borrar.appendChild(imagenIcono);
  borrar.setAttribute("id", "btnDeleteTarea" + contador);
  borrar.setAttribute("class", "delete");

  borrar.addEventListener("click", function () {
    borrarUnaTarea(div);
  })

  div.appendChild(input);
  div.appendChild(inputCheck);
  div.appendChild(borrar);

  contenedor.appendChild(div);
  contador += 1;
}

function borrarUnaTarea(tarea) {
  tarea.remove();
}

function borrarTodo() {
  contador = 1
  contenedor.innerHTML = '';
}

function cambiarEstilo(inputCheck) {
  const input = document.getElementById(inputCheck.getAttribute("for"));
  if (inputCheck.checked) {
    input.style.textDecoration = "line-through";
    input.style.color = "grey"
    input.disabled = true;
  } else {
    input.style.textDecoration = "";
    input.style.color = "";
    input.disabled = false;
  }
}