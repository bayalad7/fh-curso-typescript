"use strict";
(() => {
    const nombreHeroe = (nombres, apellidoPaterno, apellidoMaterno) => {
        if (!nombres)
            throw new Error("Nombre obligatorio...");
        return `${nombres} ${apellidoPaterno} ${apellidoMaterno}`.trim();
    };
    const tony = nombreHeroe(" Tony", " Stark  ", true);
    const noHulk = null;
    const hulk = nombreHeroe(noHulk, " Verde  ", true);
    console.log("Hola " + tony);
    console.log("Hola " + hulk);
})();
