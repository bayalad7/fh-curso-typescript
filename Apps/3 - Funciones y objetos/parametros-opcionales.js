"use strict";
(() => {
    // Nota Importante.
    // Como buena práctica de programación.
    // Si algún parámetro es opcional en la función, se deben especificar hasta el final de la función.
    const nombreHeroe = (nombres, apellidoPaterno, apellidoMaterno) => {
        return `${nombres} ${apellidoPaterno || '-----'} ${apellidoMaterno || '-----'}`.trim();
    };
    const tony = nombreHeroe("Tony");
    const hulk = nombreHeroe("Hulk");
    console.log("Hola " + tony);
    console.log("Hola " + hulk);
})();
