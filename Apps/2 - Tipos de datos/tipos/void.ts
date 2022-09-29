(()=>{
	function saludar(): void {
		// return 1; // Error: El tipo 'number' no se puede asignar al tipo 'void'.
	}
	const s: void = saludar();
	console.log({s}) // Consola: {s: undefined}

	const gritar = (): void => {
		// return true; // Error: El tipo 'boolean' no se puede asignar al tipo 'void'.
	}
	console.log(gritar())
})()