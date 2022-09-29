(() => {

	const Batman: String = 'Batman';
	const BatmanEdad: Number = 37;
	const Superman: String = "Superman";
	const Aquaman: String = `Aquaman`;

	console.log( Batman.toUpperCase() )
	console.log( Superman.toUpperCase() )
	console.log( Aquaman.toUpperCase() )

	// Concatenaciones
	console.log( `Yo soy ${Batman}, ${ BatmanEdad.toString() }` )

	// Posiciones de las cadenas
	console.log( Batman[10]?.toUpperCase() || 'No hay carácter' )
})()