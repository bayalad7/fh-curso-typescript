"use strict";
(() => {
    const agregarNumeros = (a, b) => a + b;
    const saludar = (nombres) => `Hola ${nombres}`;
    const salvarMundo = () => `El mundo se salvó`;
    // Al momento de asignar la función a la variable let miFuncion y mandarla a llamar TS realizará la validación de los parámetros
    let miFuncion;
    miFuncion = agregarNumeros; // Asignación Ok
    console.log(miFuncion(1, 2));
    miFuncion = saludar; // Asignación Ok
    console.log(miFuncion("Benyi"));
    miFuncion = salvarMundo; // Asignación Ok
    console.log(miFuncion());
    // miFuncion = 10; // Asignación Error
    // Especificación de la firma de los tipos de datos a enviar como parámetros y recibir como retorno en el tipo función...
    let miFuncion2;
    miFuncion2 = agregarNumeros; // Asignación Ok
    console.log(miFuncion(1, 2));
    // miFuncion2 = saludar; // Asignación Error
    // console.log( miFuncion( "Benyi" ) )
    // miFuncion2 = salvarMundo; // Asignación Error
    // console.log( miFuncion() )
    // miFuncion2 = 10; // Asignación Error
})();
