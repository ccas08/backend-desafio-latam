const fs = require('fs');

// Función para registrar una nueva cita
function registrar(nombre, edad, animal, color, enfermedad) {
    const nuevaCita = { nombre, edad, animal, color, enfermedad };

    // Leer el archivo citas.json
    fs.readFile('citas.json', 'utf8', (err, data) => {
        if (err) {
            console.log('Error al leer el archivo:', err);
            return;
        }

        // Parsear el contenido del archivo
        const citas = JSON.parse(data);

        // Agregar la nueva cita
        citas.push(nuevaCita);

        // Escribir el archivo con la nueva cita
        fs.writeFile('citas.json', JSON.stringify(citas, null, 2), 'utf8', (err) => {
            if (err) {
                console.log('Error al escribir el archivo:', err);
                return;
            }
            console.log('Cita registrada con éxito.');
        });
    });
}

// Función para leer y mostrar todas las citas
function leer() {
    fs.readFile('citas.json', 'utf8', (err, data) => {
        if (err) {
            console.log('Error al leer el archivo:', err);
            return;
        }

        // Parsear el contenido del archivo
        const citas = JSON.parse(data);

        // Mostrar todas las citas en la consola
        console.log('Citas registradas:', citas);
    });
}

module.exports = { registrar, leer };
