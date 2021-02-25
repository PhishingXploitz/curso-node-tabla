const argv = require('./Config/yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors/safe');



console.clear();
 console.log("args:", argv);
// console.log("lista:", argv.l);




crearArchivo(argv.b, argv.l, argv.h)
    .then(fileName => console.log(colors.green(fileName)))
    .catch(err => console.log(err)); 