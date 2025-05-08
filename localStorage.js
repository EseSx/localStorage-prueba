// Traigo los elementos del html
const botonVer = document.getElementById("botonVer");
const contraseña = document.getElementById("contraseña");
const botonEnviar = document.getElementById("botonEnviar");
const inputUsuario = document.getElementById("inputUsuario");
const formulario = document.getElementById("formulario");

// Creo una variable donde voy a guardar el objeto
let usuarioGuardado = {};

// Cambio la visibilidad de la contraseña
botonVer.addEventListener("click", () => {
  if (contraseña.type == "password") {
    contraseña.type = "text";
  } else {
    contraseña.type = "password";
  }
});

botonEnviar.addEventListener("click", () => {
  if (!inputUsuario.value || !contraseña.value) {
    alert("Ingrese los datos solicitados");
  } else {
    let inputU = inputUsuario.value;
    let inputC = contraseña.value;
    if (inputU.toLowerCase() == "clear" && inputC.toLowerCase() == "clear") {
      localStorage.clear();
    } else {
      alert("Datos enviados con exito recargue la paguina");
      const datosDeLogin = new FormData(formulario); // Guarda todos los datos del formulario en una variable
      const valores = Object.fromEntries(datosDeLogin.entries()); // Convierto los mismos datos en un obejeto con el contructor
      // TIP: el contructor Object es la opcion mas viable en caso de que los datos sean volatiles o ya esten almacenados en algun otro lado, en caso de sean especificos o que no esten almacenados en ninguna otra variable recominedo crear el objeto de forma literal:
      // const usuario = {
      //  "nombre" : "Hasbulla",
      //  "contraseña" : "noSeYaPerdiLaImaginacion"
      // }
      // Nota2: Me estoy deprimiendo escuchando "Forever", me arrepiento de tanto

      localStorage.setItem("usuario", JSON.stringify(valores)); // Guardo los datos en el localStorage usando la clave "usuario" y convirtiendo "valores" en un string para poder guardar todos los datos
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  usuarioGuardado = JSON.parse(localStorage.getItem("usuario")); // Recupero la informacion guardada en localStorage y convierto el string devuelta a un objeto para usarlo
  // Nota4: Me siento confuso escuchando "EARFQUAKE", Tyler me confunde

  if (localStorage.length == 1) {
    inputUsuario.value = usuarioGuardado.usuario;
    contraseña.value = usuarioGuardado.contraseña;
    // Asigno los valores a los inputs cada vez que se reinicia la pagina
  }
});
