/*Задание 6.

Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.*/

let arr = [9, 23, 99, 7, 48];
let checking = typeof(arr[0]); //получаем тип первого элемента массива
let result = arr.every(element=>typeof(element)==checking);

console.log(result);