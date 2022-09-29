"use strict";
(() => {
    const nombreCompleto = (nombres, ...restParametros) => {
        console.log(restParametros[0]); // Joseph
        console.log(restParametros[1]); // Kent
        return `${nombres} ${restParametros.join(' ')}`;
    };
    const superman = nombreCompleto("Clark", "Joseph", "Kent");
    console.log(superman);
})();
