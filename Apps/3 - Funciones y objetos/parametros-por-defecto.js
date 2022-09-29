"use strict";
(() => {
    const nombreHeroe = (nombres, apellidoPaterno, convertirMayusculas = true) => {
        if (convertirMayusculas) {
            return `${nombres} ${apellidoPaterno || '-----'}`.toUpperCase().trim();
        }
        else {
            return `${nombres} ${apellidoPaterno || '-----'}`.trim();
        }
    };
    const tony = nombreHeroe("Tony", "Stark");
    const hulk = nombreHeroe("Hulk", "", false);
    console.log("Hola " + tony);
    console.log("Hola " + hulk);
})();
