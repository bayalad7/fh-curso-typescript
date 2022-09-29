(() => {
    const nombreHeroe = ( nombres: string , apellidoPaterno: string , apellidoMaterno: (string|boolean) ): string => {
        if( !nombres )
            throw new Error("Nombre obligatorio...");
        return `${nombres} ${apellidoPaterno} ${apellidoMaterno}`.trim();
    }
    const tony: string = nombreHeroe( " Tony" , " Stark  " , true);
    const noHulk: any = null;
    const hulk: string = nombreHeroe( noHulk , " Verde  " , true);
    console.log( "Hola " + tony );
    console.log( "Hola " + hulk );
})()