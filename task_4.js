/*Задание 4.

Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.*/

let min = Math.ceil(0);
let max = Math.floor(100);
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNumber);