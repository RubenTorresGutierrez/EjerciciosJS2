/**
*   @file ejercicio1.js
*   @description Pide la edad y si es mayor de 18 años indica que ya puede conducir.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

let edad;
do{

    edad = prompt('Introduzca su edad:');

}while(edad <= 0 || edad >= 150)

if(edad >= 18)
    alert('Ya puedes conducir!!!!');