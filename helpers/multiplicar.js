const fs = require('fs');
const { option } = require('yargs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta) => {
    let salida = "";
    let consola =   '';

    try {


        for (let index = 1; index <= hasta; index++) {
            salida += `${base} ${ 'x'.rainbow} ${index} =  ${base * index}\n`;
        }

        if (listar) {

            console.log(colors.rainbow("======================="));
            console.log(`  Tabla del: ${ colors.green(base)}`.underline.red);
            console.log(colors.rainbow("======================="));

            console.log(salida);

        }

        const data = new Uint8Array(Buffer.from(salida));
        fs.writeFileSync(`./salida/tabla-${base}.txt`, data);
    } catch (error) {
        throw error;

    }

    return `tabla-${base}.txt`;
}

module.exports = {
    crearArchivo
}