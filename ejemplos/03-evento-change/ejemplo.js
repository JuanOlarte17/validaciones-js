function validarPrograma() {
    const programa = document.getElementById("programa").value;
    document.getElementById("errorPrograma").textContent =
        programa === "" ? "Seleccione un programa de formación." : "";
}

function validarTerminos() {
    const marcado = document.getElementById("terminos").checked;
    document.getElementById("errorTerminos").textContent =
        marcado ? "" : "Debe aceptar los términos y condiciones.";
}

// En listas y casillas se usa "change" en lugar de "input".
document.getElementById("programa").addEventListener("change", validarPrograma);
document.getElementById("terminos").addEventListener("change", validarTerminos);
