(() => {
	let esSuperman: Boolean = true;
	let esBatman: Boolean = false;
	console.log( {esSuperman} );
	console.log( {esBatman} );

	esSuperman = (!esBatman) ? true : false;
	console.log( {esSuperman} );

	esSuperman = true && false;
	console.log( {esSuperman} );
})()