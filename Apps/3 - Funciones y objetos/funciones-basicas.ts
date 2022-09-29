(() => {
    const heroe: string = "Flash";
    function regresarNombre(): string {
        return heroe;
    }
    const activarBatiseñal = (): string => "Batiseñal activada";
    console.log( typeof activarBatiseñal );
    const nombreHeroe: string = regresarNombre();
    console.log( nombreHeroe );
})()