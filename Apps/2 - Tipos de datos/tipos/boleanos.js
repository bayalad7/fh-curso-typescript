"use strict";
(() => {
    let esSuperman = true;
    let esBatman = false;
    console.log({ esSuperman });
    console.log({ esBatman });
    esSuperman = (!esBatman) ? true : false;
    console.log({ esSuperman });
    esSuperman = true && false;
    console.log({ esSuperman });
})();
