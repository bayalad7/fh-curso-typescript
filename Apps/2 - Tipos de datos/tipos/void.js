"use strict";
(() => {
    function saludar() {
        // return 1; // Error: El tipo 'number' no se puede asignar al tipo 'void'.
    }
    const s = saludar();
    console.log({ s }); // Consola: {s: undefined}
    const gritar = () => {
        // return true; // Error: El tipo 'boolean' no se puede asignar al tipo 'void'.
    };
    console.log(gritar());
})();
