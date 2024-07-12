const { registrar, leer } = require('./operaciones');

// Obtener los argumentos de la línea de comandos
const [operacion, nombre, edad, animal, color, enfermedad] = process.argv.slice(2);

if (operacion === 'registrar') {
    registrar(nombre, edad, animal, color, enfermedad);
} else if (operacion === 'leer') {
    leer();
} else {
    console.log('Operación no válida. Usa "registrar" o "leer".');
}
