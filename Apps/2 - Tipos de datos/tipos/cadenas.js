"use strict";
(() => {
    var _a;
    const Batman = 'Batman';
    const BatmanEdad = 37;
    const Superman = "Superman";
    const Aquaman = `Aquaman`;
    console.log(Batman.toUpperCase());
    console.log(Superman.toUpperCase());
    console.log(Aquaman.toUpperCase());
    // Concatenaciones
    console.log(`Yo soy ${Batman}, ${BatmanEdad.toString()}`);
    // Posiciones de las cadenas
    console.log(((_a = Batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No hay carácter');
})();
