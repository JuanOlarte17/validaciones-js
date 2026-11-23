function validarNombre() {
    const nombre = document.getElementById("nombre").value.trim();
    const errorNombre = document.getElementById("errorNombre");

    if (nombre.length < 3) {
        errorNombre.textContent = "El nombre debe tener mínimo 3 caracteres.";
        return false;
    } else {
        errorNombre.textContent = "";
        return true;
    }
}

// "input" se dispara cada vez que cambia el valor mientras se escribe.
document.getElementById("nombre").addEventListener("input", validarNombre);
