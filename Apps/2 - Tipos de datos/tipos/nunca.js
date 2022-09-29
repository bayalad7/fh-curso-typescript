"use strict";
(() => {
    /*
    const error = (mensaje: string): never => {
        if( false ){
            throw new Error("Mensaje del error: " + mensaje )
        }
    }
    error("Auxilio");
    console.log("Hola Mundo!") // Este código si se ejecutará.
    */
    /*
    const error = (mensaje: string): never => {
        throw new Error("Mensaje del error: " + mensaje )
    }
    error("Auxilio");
    console.log("Hola Mundo!") // Este código jamás se ejecutará.
    */
    const error = (mensaje) => {
        let condicion = true;
        let retorno = 200;
        if (condicion) {
            throw new Error("Mensaje del error: " + mensaje);
        }
        return retorno;
    };
    error("Auxilio");
    console.log("Hola Mundo!"); // Este código jamás se ejecutará.
})();
