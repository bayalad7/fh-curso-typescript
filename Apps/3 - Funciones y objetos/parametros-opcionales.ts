(() => {
    // Nota Importante.
    // Como buena práctica de programación.
    // Si algún parámetro es opcional en la función, se deben especificar hasta el final de la función.
    const nombreHeroe = ( nombres: string , apellidoPaterno?: string , apellidoMaterno?: (string|boolean) ): string => {
        return `${nombres} ${apellidoPaterno || '-----' } ${apellidoMaterno || '-----' }`.trim();
    }
    const tony: string = nombreHeroe( "Tony" );
    const hulk: string = nombreHeroe( "Hulk" );
    console.log( "Hola " + tony );
    console.log( "Hola " + hulk );
})()