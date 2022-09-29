"use strict";
(() => {
    const heroe = "Flash";
    function regresarNombre() {
        return heroe;
    }
    const activarBatiseñal = () => "Batiseñal activada";
    console.log(typeof activarBatiseñal);
    const nombreHeroe = regresarNombre();
    console.log(nombreHeroe);
})();
