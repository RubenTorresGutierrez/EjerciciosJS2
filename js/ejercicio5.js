/**
*   @file ejercicio5.js
*   @description Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad). Busca el algoritmo en Internet.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

const LETRA = 'TRWAGMYFPDXBNJZSQVHLCKE';
const dni = prompt('Introduzca su dni:');
const letra = dni.charAt(8);
const numeros = dni.substring(0, 8);

if(letra == LETRA[numeros%23])
    alert('DNI Correcto');
else
    alert('DNI Incorrecto');