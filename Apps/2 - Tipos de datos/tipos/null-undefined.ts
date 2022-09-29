(() => {
	let nada: undefined = undefined;
	console.log({nada});

	/*
	Error: Se declara "numero", pero su valor no se lee nunca
	Error: El tipo 'undefined' no se puede asignar al tipo 'number'
	*/
	// let numero: number = undefined;

	/*
	Error: Se declara "esActivo", pero su valor no se lee nunca.
	Error: El tipo 'undefined' no se puede asignar al tipo 'boolean'
	*/
	// let esActivo: boolean = undefined;

	let calificacion: (number | undefined) = undefined; // Todo Ok
	let esAdministrador: (boolean | undefined) = undefined; // Todo Ok
})()