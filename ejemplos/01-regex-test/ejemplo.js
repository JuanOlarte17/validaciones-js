function mostrar(texto) {
    console.log(texto);
    document.getElementById("salida").textContent += texto + "\n";
}

// Entre 6 y 10 dígitos
const cumple = /^\d{6,10}$/.test("123456");
mostrar("123456 -> " + cumple);                       // true

mostrar("12345 -> " + /^\d{6,10}$/.test("12345"));    // false (muy corto)
mostrar("12345678901 -> " + /^\d{6,10}$/.test("12345678901")); // false (muy largo)
mostrar("12a456 -> " + /^\d{6,10}$/.test("12a456"));  // false (tiene una letra)

// Teléfono: exactamente 10 dígitos
mostrar("3001234567 (teléfono) -> " + /^\d{10}$/.test("3001234567"));

// Contraseña: 8+ caracteres, una mayúscula y un dígito
const patronClave = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
mostrar("Clave1234 -> " + patronClave.test("Clave1234"));  // true
mostrar("clave1234 -> " + patronClave.test("clave1234"));  // false (sin mayúscula)
mostrar("Clave1 -> " + patronClave.test("Clave1"));        // false (menos de 8)
