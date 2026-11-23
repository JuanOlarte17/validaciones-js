// Marca visualmente un campo como válido (verde) o inválido (rojo).
function marcarCampo(id, valido) {
    const campo = document.getElementById(id);
    campo.classList.toggle("error", !valido);
    campo.classList.toggle("exito", valido);
}

// BLOQUE 1. VALIDAR NOMBRE
function validarNombre() {
    const nombre = document.getElementById("nombre").value.trim();
    const errorNombre = document.getElementById("errorNombre");

    if (nombre.length < 3) {
        errorNombre.textContent = "El nombre debe tener mínimo 3 caracteres.";
        marcarCampo("nombre", false);
        return false;
    } else {
        errorNombre.textContent = "";
        marcarCampo("nombre", true);
        return true;
    }
}

document.getElementById("nombre").addEventListener("input", validarNombre);

// BLOQUE 2. VALIDAR APELLIDOS
function validarApellidos() {
    const apellidos = document.getElementById("apellidos").value.trim();
    const errorApellidos = document.getElementById("errorApellidos");

    if (apellidos.length < 3) {
        errorApellidos.textContent = "Los apellidos deben tener mínimo 3 caracteres.";
        marcarCampo("apellidos", false);
        return false;
    } else {
        errorApellidos.textContent = "";
        marcarCampo("apellidos", true);
        return true;
    }
}

document.getElementById("apellidos").addEventListener("input", validarApellidos);

// BLOQUE 3. VALIDAR DOCUMENTO
function validarDocumento() {
    const documento = document.getElementById("documento").value.trim();
    const errorDocumento = document.getElementById("errorDocumento");

    // ! significa NOT (negación): indica que el patrón NO se debe cumplir.
    // / / delimitan la expresión regular.
    // ^ indica el inicio del texto.
    // \d representa un dígito del 0 al 9.
    // {6,10} indica que debe tener entre 6 y 10 dígitos.
    // $ indica el final del texto.
    // .test() comprueba si el documento cumple el patrón.

    if (!/^\d{6,10}$/.test(documento)) {
        errorDocumento.textContent = "Ingrese un documento entre 6 y 10 números.";
        marcarCampo("documento", false);
        return false;
    } else {
        errorDocumento.textContent = "";
        marcarCampo("documento", true);
        return true;
    }
}

document.getElementById("documento").addEventListener("input", validarDocumento);

// BLOQUE 4. VALIDAR CORREO
function validarCorreo() {
    const correo = document.getElementById("correo").value.trim();
    const errorCorreo = document.getElementById("errorCorreo");

    // ^ indica el inicio del texto.
    // [^\s@]+ permite uno o más caracteres que no sean espacios ni arrobas.
    // @ exige que exista una arroba.
    // [^\s@]+ exige caracteres después de la arroba, sin espacios ni otra arroba.
    // \. exige un punto después del dominio.
    // [^\s@]+ exige caracteres después del punto.
    // $ indica el final del texto.
    // .test() comprueba si el correo cumple el patrón.
    // ! niega el resultado: si NO cumple, muestra el error.

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
        errorCorreo.textContent = "Ingrese un correo electrónico válido.";
        marcarCampo("correo", false);
        return false;
    } else {
        errorCorreo.textContent = "";
        marcarCampo("correo", true);
        return true;
    }
}

document.getElementById("correo").addEventListener("input", validarCorreo);

// BLOQUE 5. VALIDAR TELÉFONO
function validarTelefono() {
    const telefono = document.getElementById("telefono").value.trim();
    const errorTelefono = document.getElementById("errorTelefono");

    if (!/^\d{10}$/.test(telefono)) {
        errorTelefono.textContent = "El teléfono debe tener exactamente 10 números.";
        marcarCampo("telefono", false);
        return false;
    } else {
        errorTelefono.textContent = "";
        marcarCampo("telefono", true);
        return true;
    }
}

document.getElementById("telefono").addEventListener("input", validarTelefono);

// BLOQUE 6. VALIDAR EDAD
function validarEdad() {
    const edad = parseInt(document.getElementById("edad").value.trim());
    const errorEdad = document.getElementById("errorEdad");

    if (isNaN(edad) || edad < 18 || edad > 60) {
        errorEdad.textContent = "La edad debe estar entre 18 y 60 años.";
        marcarCampo("edad", false);
        return false;
    } else {
        errorEdad.textContent = "";
        marcarCampo("edad", true);
        return true;
    }
}

document.getElementById("edad").addEventListener("input", validarEdad);

// BLOQUE 7. VALIDAR CONTRASEÑA
function validarContrasena() {
    const contrasena = document.getElementById("contrasena").value;
    const errorContrasena = document.getElementById("errorContrasena");

    // (?=.*[A-Z]) exige al menos una mayúscula.
    // (?=.*\d) exige al menos un dígito.
    // .{8,} exige mínimo 8 caracteres.
    if (!/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(contrasena)) {
        errorContrasena.textContent = "Mínimo 8 caracteres, una mayúscula y un número.";
        marcarCampo("contrasena", false);
        return false;
    } else {
        errorContrasena.textContent = "";
        marcarCampo("contrasena", true);
        return true;
    }
}

document.getElementById("contrasena").addEventListener("input", validarContrasena);

// BLOQUE 8. CONFIRMAR CONTRASEÑA
function validarConfirmar() {
    const contrasena = document.getElementById("contrasena").value;
    const confirmar = document.getElementById("confirmar").value;
    const errorConfirmar = document.getElementById("errorConfirmar");

    if (confirmar === "" || confirmar !== contrasena) {
        errorConfirmar.textContent = "Las contraseñas no coinciden.";
        marcarCampo("confirmar", false);
        return false;
    } else {
        errorConfirmar.textContent = "";
        marcarCampo("confirmar", true);
        return true;
    }
}

document.getElementById("confirmar").addEventListener("input", validarConfirmar);
// Si cambia la contraseña original, se vuelve a comprobar la coincidencia.
document.getElementById("contrasena").addEventListener("input", validarConfirmar);

// BLOQUE 9. VALIDAR PROGRAMA
function validarPrograma() {
    const programa = document.getElementById("programa").value;
    const errorPrograma = document.getElementById("errorPrograma");

    if (programa === "") {
        errorPrograma.textContent = "Seleccione un programa de formación.";
        marcarCampo("programa", false);
        return false;
    } else {
        errorPrograma.textContent = "";
        marcarCampo("programa", true);
        return true;
    }
}

document.getElementById("programa").addEventListener("change", validarPrograma);

// BLOQUE 10. VALIDAR TÉRMINOS Y CONDICIONES
function validarTerminos() {
    const terminos = document.getElementById("terminos").checked;
    const errorTerminos = document.getElementById("errorTerminos");

    if (!terminos) {
        errorTerminos.textContent = "Debe aceptar los términos y condiciones.";
        return false;
    } else {
        errorTerminos.textContent = "";
        return true;
    }
}

document.getElementById("terminos").addEventListener("change", validarTerminos);

// BLOQUE 11. VALIDAR TODO EL FORMULARIO
const formulario = document.getElementById("formulario");
const btnRegistrar = document.getElementById("btnRegistrar");
const mensajeFinal = document.getElementById("mensajeFinal");

function validarFormulario() {
    let resultado = true;

    if (!validarNombre()) resultado = false;
    if (!validarApellidos()) resultado = false;
    if (!validarDocumento()) resultado = false;
    if (!validarCorreo()) resultado = false;
    if (!validarTelefono()) resultado = false;
    if (!validarEdad()) resultado = false;
    if (!validarContrasena()) resultado = false;
    if (!validarConfirmar()) resultado = false;
    if (!validarPrograma()) resultado = false;
    if (!validarTerminos()) resultado = false;

    btnRegistrar.disabled = !resultado;
    return resultado;
}

// BLOQUE 12. ENVIAR FORMULARIO
function enviarFormulario(event) {
    event.preventDefault();

    if (validarFormulario()) {
        mensajeFinal.textContent = "¡Estudiante registrado correctamente!";
        mensajeFinal.style.color = "green";
        formulario.reset();

        const campos = document.querySelectorAll("input, select");
        for (let i = 0; i < campos.length; i++) {
            campos[i].classList.remove("error", "exito");
        }

        const mensajes = document.querySelectorAll("small");
        for (let i = 0; i < mensajes.length; i++) {
            mensajes[i].textContent = "";
            mensajes[i].className = "";
        }

        btnRegistrar.disabled = true;
    } else {
        mensajeFinal.textContent = "";
    }
}

formulario.addEventListener("submit", enviarFormulario);

// El botón se vuelve a habilitar en cuanto la persona corrige o escribe algo,
// para que pueda volver a intentar el envío.
formulario.addEventListener("input", function() {
    btnRegistrar.disabled = false;
    mensajeFinal.textContent = "";
});
formulario.addEventListener("change", function() {
    btnRegistrar.disabled = false;
});
