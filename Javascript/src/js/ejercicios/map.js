import { personas, EDAD_MINIMA } from './personas'

// Referencia: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

/**
 * CONSIGNA: Realizar una funcion que dado un array de objetos `personas`
 * devuelva un array con un atributo `allowed` (_boolean_) que indique 
 * si puede entrar o no en un casino
 */
// 1. Necesitas un array de base (puedes usar el mismo de antes)
const personas = [
    { name: 'Maria', age: 57 },
    { name: 'Junior', age: 19 }
];

// 2. La función de transformación
function procesarEntradaCasino(lista) {
    return lista.map(persona => {
        // Creamos una copia del objeto y le agregamos el atributo 'allowed'
        return {
            ...persona, // Esto copia los datos existentes (nombre, edad)
            allowed: persona.age > 21 // Esto crea el booleano (true o false)
        };
    });
}

// 3. ¡No te olvides del console.log para verlo en la terminal!
console.log(procesarEntradaCasino(personas));

console.log('Listado Original:', personas)

const listadoCurado = (listaPersonas) => {

    return listaPersonas.map(persona =>{
        const allowed = persona.age >= EDAD_MINIMA
        return {
            ...persona,
            allowed
        }
    })
}

const listaFinal = listadoCurado(personas)
console.table(listaFinal)