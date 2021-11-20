/**
*   @file ejercicio4.js
*   @description Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

let numeros = [];
let numero;

do{

    numero = prompt('Introduce un número:');
    if(numero !== null && numero !== '' && !isNaN(numero))
        numeros.push(parseInt(numero));
    else if(isNaN(null) && numero !== null)
        alert('El dato introducido no es un número');

}while(numero !== null)

alert(numeros.reduce((x, y) => x + y));