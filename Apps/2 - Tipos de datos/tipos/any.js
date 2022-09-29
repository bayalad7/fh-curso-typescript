"use strict";
(() => {
    let vengador = 123;
    //let vengador: number; // Aquí validará la función charAt que es incorrecta usarla con un tipo de dato numérico
    //let vengador: string; // Aquí validará la función toFixed que es incorrecta usarla con un tipo de dato cadena
    vengador = "Dr Strange";
    console.log({ vengador });
    console.log(vengador[0]);
    console.log(vengador.charAt(0));
    /**
     * Casting - 01
     */
    console.log(vengador.charAt(0));
    vengador = 130.394203;
    console.log(vengador.toFixed(3));
    /**
     * Casting - 02
     */
    console.log(vengador.toFixed(4));
})();
