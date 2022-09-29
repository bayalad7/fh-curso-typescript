(() => {
    // Tipos
    const batman: string = 'Bruce';
    const superman: string = 'Clark';
    const existe: boolean = false;
  
    // Tuplas
    const parejaHeroes: [string, string] = [batman,superman];
    const villano: [string, number, boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
	enum Fuerza {
		Acuaman = 0,
		Batman = 1,
		Flash = 5,
		Superman = 100
	}
	const FuerzaFlash: Fuerza = Fuerza.Flash;
    const FuerzaSuperman: Fuerza = Fuerza.Superman;
    const FuerzaBatman: Fuerza = Fuerza.Batman;
    const FuerzaAcuaman: Fuerza = Fuerza.Acuaman;

    // Retorno de funciones
    function activar_batiseñal(): string{
      return 'activada';
    }
    function pedir_ayuda(): void{
      console.log('Auxilio!!!');
    }

    // Castear la aserción del tipo de dato
    const poder: any = '100';
    const largoDelPoder: number = (poder as string).length;
    console.log({largoDelPoder});
})()  