const botonVer = document.getElementById("botonVer");
const contraseña = document.getElementById("contraseña");
const botonEnviar = document.getElementById("botonEnviar");
const inputUsuario = document.getElementById("inputUsuario");
const formulario = document.getElementById("formulario");

let usuarioGuardado = {};

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
    alert("Datos enviados con exito recargue la paguina");
    const datosDeLogin = new FormData(formulario);
    const valores = Object.fromEntries(datosDeLogin.entries());

    localStorage.setItem("usuario", JSON.stringify(valores));
  }
});

document.addEventListener("DOMContentLoaded", () => {
  usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));

  if (localStorage.length == 1) {
    inputUsuario.value = usuarioGuardado.usuario;
    contraseña.value = usuarioGuardado.contraseña;
  }
});
