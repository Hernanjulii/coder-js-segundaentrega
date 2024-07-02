let listaPersonas = [];
let persona = undefined;

/*Obtenemos los elementos del formulario (DOM)*/
let nombre = document.getElementById("inputName");
let apellido = document.getElementById("inputApellido");
let id = document.getElementById("inputClub");
let edad = document.getElementById("inputEdad");
let dni = document.getElementById("inputDni");
let consultaDni = document.getElementById("inputConsDni");
let agregar = document.getElementById("btnAgregar");
let consultar = document.getElementById("btnConsultar");
let borrar = document.getElementById("btnBorrar");

/* Obtenemos el Form */
let forms = document.querySelectorAll("form");

/* Asignamos los listener a los botones */
agregar.addEventListener("click", (e) => {
  e.preventDefault();
  listaPersonas.push(
    new Persona(
      id.value,
      nombre.value,
      apellido.value,
      parseInt(edad.value),
      parseInt(dni.value)
    )
  );
  alert("Alta exitosa...");
  limpiarForms();
});

consultar.addEventListener("click", consultarPersona);
borrar.addEventListener("click", borrarPersona);

/* Funciones */
function consultarPersona(evento) {
  evento.preventDefault();
  let dniC = parseInt(consultaDni.value);
  persona = buscarPersona(dniC);
  console.log("Persona " + persona);
  if (persona != undefined) {
    nombre.value = persona.nombre;
    apellido.value = persona.apellido;
    club.value = persona.club;
    edad.value = persona.edad;
    dni.value = persona.dni;
  } else {
    alert("Persona no encontrada...");
    limpiarForms();
  }
}

function buscarPersona(dni) {
  let elemento;
  elemento = listaPersonas.find((elem) => {
    if (elem.dni == dni) {
      return elem;
    }
  });
  return elemento;
}

function borrarPersona(dni) {
  const elemento = (elem) => {
    let index = listaPersonas.indexOf(elem);
    if (elem.dni == dni) {
      listaPersonas.splice(index, 1);
      alert("Persona eliminada con exito...");
    }
  };
}

function limpiarForms() {
  forms.forEach((form) => {
    form.reset();
  });
}