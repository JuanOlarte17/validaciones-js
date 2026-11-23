const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
    // Evita que el navegador recargue la página al enviar.
    event.preventDefault();

    const dato = document.getElementById("dato").value.trim();
    document.getElementById("mensaje").textContent =
        dato === "" ? "El campo está vacío." : "Enviado sin recargar: " + dato;
});
