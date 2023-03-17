/*Задание 3.

Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".*/

let str = 'Hello!';
let result = str.split('').reverse().join('');

console.log(result);