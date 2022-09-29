"use strict";
(() => {
    // Típicamente un arreglo contiene de cero a muchos objetos
    // de un solo tipo. TypeScript tiene un análisis especial en
    // torno a los arreglos que contengan múltiples tipos, y
    // donde es importante el orden en que se indexan.
    // Estos se llaman tuplas (en inglés **tuples**). Piensa en
    // ellas como una forma de conectar algunos datos pero con
    // menos sintaxis que un objeto ordenado por llaves.
    // Puedes crear una tupla utilizando la sintaxis de arreglos
    // en JavaScript:
    const DrStrange = ["Dr Strange", 100];
    // pero necesitarás declarar su tipo como una tupla.
    const Spiderman = ["Spiderman", 100];
    DrStrange[0] = 100;
    DrStrange[1] = "Dr Strange";
    // Spiderman[0] = 100;			// Error: El tipo 'number' no se puede asignar al tipo 'string'.ts(2322)
    // Spiderman[1] = "Spiderman"; // Error: El tipo 'number' no se puede asignar al tipo 'string'.ts(2322)
})();
