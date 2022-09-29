(()=>{
	enum AudioNivel{
		Minimo = 1,
		Medio = 5,
		Maximo = 10
	}
	const AudioActual: AudioNivel = AudioNivel.Medio;

	console.log({AudioNivel});
	console.log({AudioActual});

	// Si una enumeración comienza con un valor predeterminado, el siguiente valor se incrementaría en 1. Ejemplo:
	enum IncrementarEnumeracion {
		a=10,
		b,		// b sería === 11
		c=9,
		d		// d sería === 10
	}
})()