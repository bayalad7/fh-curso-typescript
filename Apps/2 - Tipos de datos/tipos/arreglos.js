"use strict";
(() => {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const masNumeros = [1, 2, 3, 4, "5", 6, 7, 8, 9, 10];
    // numeros.push("11"); // Error: No se puede asignar un argumento de tipo "string" al parámetro de tipo "number"
    masNumeros.push("11");
    console.log({ numeros });
    console.log({ masNumeros });
    // Muchos tipos de datos en un arreglo
    const muchosTipos = ["Hola Mundo", 7, true, false];
    muchosTipos.push(true);
    console.log({ muchosTipos });
    const villanos = ["Dormamu", "Duende Verde", "Omega Rojo"];
    villanos.forEach(villano => {
        console.log(`El villano: ${villano}`);
    });
})();
