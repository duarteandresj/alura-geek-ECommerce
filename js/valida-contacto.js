// Validacion de formulario de contacto
const $formNombre = document.getElementById("form-nombre");
const $formText = document.getElementById("form__textarea");
const $btnEnvio = document.querySelector(".form__btn");
const newSpan1 = document.createElement("span1");
newSpan1.classList.add("alerta");
const newSpan2 = document.createElement("span2");
newSpan2.classList.add("alerta");

function validaMaximoCaracteres(formString, largo) {
  return (formString.length > largo);
}
function validaTextoVacio(cualquierString) {
  return cualquierString.trim().length > 0;
}

function validaNombre() {
  nombre = $formNombre.value;
  if (!validaTextoVacio(nombre)) {
    newSpan1.textContent = "El campo no puede estar vacio";
    $formNombre.insertAdjacentElement("afterend", newSpan1);
  } else if (validaMaximoCaracteres(nombre, 40)) {
    newSpan1.textContent = "Maximo de caracteres excedido";
    $formNombre.insertAdjacentElement("afterend", newSpan1);
  } else {
    newSpan1.remove();
  }
}

function validaMensaje() {
  mensaje = $formText.value;
  if (!validaTextoVacio(mensaje)) {
    newSpan2.textContent = "El campo no puede estar vacio";
    $formText.insertAdjacentElement("afterend", newSpan2);
  } else if (validaMaximoCaracteres(mensaje, 120)) {
    newSpan2.textContent = "Maximo de caracteres excedido";
    $formText.insertAdjacentElement("afterend", newSpan2);
  } else {
    newSpan2.remove();
  }
}

$btnEnvio.addEventListener("click", (event) => {
  event.preventDefault();
  validaNombre();
  validaMensaje();
});
