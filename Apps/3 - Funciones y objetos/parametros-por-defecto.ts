(() => {
    const nombreHeroe = ( nombres: string , apellidoPaterno?: string , convertirMayusculas: boolean = true ): string => {
        if( convertirMayusculas )
        {
            return `${nombres} ${apellidoPaterno || '-----' }`.toUpperCase().trim();
        }
        else
        {
            return `${nombres} ${apellidoPaterno || '-----' }`.trim();
        }
    }
    const tony: string = nombreHeroe( "Tony" , "Stark" );
    const hulk: string = nombreHeroe( "Hulk" , "" , false );
    console.log( "Hola " + tony );
    console.log( "Hola " + hulk );
})()