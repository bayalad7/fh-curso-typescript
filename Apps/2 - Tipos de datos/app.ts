/**
 * Cuando declaramos los tipos de datos en TS, es muy recomendable declara exactamente que tipo de dato es.
 * Ejemplo:
 * 1.- Si la constante a es un número, después de los 2 puntos ":". Especificar que el tipo de dato es Number.
 * 2.- Si nosotros no especificáramos que tipos de datos tendrían las variables, para el TS entraría un tipo de dato muy famoso llamado <any> para este tipo de dato en TS significa cualquiera.
 */
(() => {
	const a: Number = 10;
	let b: Number;
	let c: String;
})()
/**
 * Para las funciones, por defecto en los argumentos que enviamos tiene marcado el tipo de dato <any> y nos lo marca como error, esto es por que en el archivo de configuración de TSConfig.json en la propiedad de "noImplicitAny": viene marcado por defecto el valor de verdadero (true).
 * Esto significa que TS habilita el informe de errores para expresiones y declaraciones con un tipo implícito "<any>". Por eso TS estipula como error los argumentos que se encuentren marcados como un tipo de dato <any>. Esto es una regla muy útil, por lo cual no se recomienda poner en valor de (false) la propiedad de "noImplicitAny": en el TSConfig.json
 */

function Saludar( msg: String ){
	console.log( msg );
}

/**
 * Funciones anónimas autoinvocadas
 */
(() => {
	const x: Number = 10;
	let y: Number = 29;
	let z: String = "Hola Mundo!";
	console.log( x , y , z );
})()