const { clearScreenDown } = require('readline');
const { number } = require('yargs');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        demandOption: true,
        type: 'number',
        describe:"Es la base de la tabla de multiplicar"
    }).option('l', {
        alias: 'list',
        type:'boolean',
        default: false,
        describe:"Muestra la tabla en consola"

    }).option('h',{
        alias:'hasta',
        type:'number',
        default:10,
        describe:'Fija el limete de multiplicaicon de la tabla'
    }).check((argv, option) => {
        if (isNaN(argv.b)) {
            throw 'la base debe de ser un numero';
        }
        return true;
    })
    .argv;

module.exports = argv;