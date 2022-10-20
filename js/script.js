// Funcion del boton login
const $btnLogin=document.querySelector(".btn-login");
$btnLogin.addEventListener("click",()=>{
    location.href="login.html"}
)
// Validacion de formulario de contacto
const $formNombre=document.getElementById("form-nombre");
const $formText=document.getElementById("form__textarea");
const $btnEnvio=document.querySelector(".form__btn");

$btnEnvio.addEventListener("click",(event)=>{
    event.preventDefault();
    let nombreCorrecto=$formNombre.value.length<40;
    console.log(nombreCorrecto);
    
})


/*El formulario de contacto debe contener algunas validaciones como:

- Campo de nombre: máximo 40 caracteres.
- Campo de mensaje: máximo 120 caracteres.
- Validación para que los campos no queden vacíos o en blanco.
- Debe mostrar al usuario los mensajes de error en caso de que no se cumplan las validaciones.
- Botón Enviar mensaje: envía el mensaje si el formulario está correctamente cumplimentado.

Si necesita ayuda le sugerimos:
https://app.aluracursos.com/course/javascript-web-validacion-formularios-html5
*/