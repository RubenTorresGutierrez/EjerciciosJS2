/**
*   @file ejercicio3.js
*   @description Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

let cadenas = [];
let cadena;

do{

    cadena = null;
    cadena = prompt('Introduzca una cadena de texto:');
    cadenas.push(cadena);

}while(cadena != null)

alert(cadenas.join('-'));