"use strict";
(() => {
    let vengadores = 0;
    const villanos = 20;
    if (vengadores < villanos) {
        console.log("Tenemos problemas!");
    }
    else {
        console.log("Estamos salvados!");
    }
    vengadores = Number("55A");
    console.log({ vengadores });
})();
