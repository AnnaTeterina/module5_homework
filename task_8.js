/*Задание 8.

Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

Используйте шаблонные строки.*/

let food = new Map ([
  ["fruit", "orange"], 
  ["vegetable", "cucumber"],
  ["berry", "raspberry"]
]);

for (let category of food.keys()) {
  console.log(`Ключ — ${category}, значение — ${food.get(category)}`); 
}