"use strict";
(() => {
    let AudioNivel;
    (function (AudioNivel) {
        AudioNivel[AudioNivel["Minimo"] = 1] = "Minimo";
        AudioNivel[AudioNivel["Medio"] = 5] = "Medio";
        AudioNivel[AudioNivel["Maximo"] = 10] = "Maximo";
    })(AudioNivel || (AudioNivel = {}));
    const AudioActual = AudioNivel.Medio;
    console.log({ AudioNivel });
    console.log({ AudioActual });
    // Si una enumeración comienza con un valor predeterminado, el siguiente valor se incrementaría en 1. Ejemplo:
    let IncrementarEnumeracion;
    (function (IncrementarEnumeracion) {
        IncrementarEnumeracion[IncrementarEnumeracion["a"] = 10] = "a";
        IncrementarEnumeracion[IncrementarEnumeracion["b"] = 11] = "b";
        IncrementarEnumeracion[IncrementarEnumeracion["c"] = 9] = "c";
        IncrementarEnumeracion[IncrementarEnumeracion["d"] = 10] = "d"; // d sería === 10
    })(IncrementarEnumeracion || (IncrementarEnumeracion = {}));
})();
