/**
*   @file ejercicio2.js
*   @description Pide una nota (número). Muestra la calificación según la nota: 0-3: Muy deficiente, 3-5: Insuficiente, 5-6: Suficiente, 6-7: Bien, 7-9: Notable, 9-10: Sobresaliente
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

let nota;

do{

    nota = parseInt(prompt('Introduzca una nota:'));

}while(nota < 0 || nota > 10)

switch(nota){

    case 0:
    case 1:
    case 2:
        alert('Muy deficiente');
        break;
    case 3:
    case 4:
        alert('Insuficiente');
        break;
    case 5:
        alert('Suficiente');
        break;
    case 6:
        alert('Bien');
        break;
    case 7:
    case 8:
        alert('Notable');
        break;
    case 9:
    case 10:
        alert('Sobresaliente');
        break;


}