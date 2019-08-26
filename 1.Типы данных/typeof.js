// Для каждого описаного ниже выражения определить его тип. 
// По мере возможность описать в комментарии к выражению почему тип такой

typeof 1 === "number"; // Это число

typeof "hello" === "string"; // Это строка

typeof true === "boolean"; // Это булевый тип

typeof {} === "object"; // Это объект, его свойства заключаются в фигурные скобки

typeof [] === "object"; // Массив - является составным типом данных

typeof (() => {}) === "function"; // Какая-то стрелочная функция, не знаю

typeof new Map() === "object"; // Ассоциативный массив

typeof 1.toString() === "string"; // Число преведено к строке, только тут должно быть (1).toString() или это тип Error, не знаю

typeof null === "object"; // null это объект, потому что это баг

typeof undefined === "undefined"; // Неопределенный тип

const obj = {a: new String("")};
typeof obj.a === "object"; // Объект созданый из строки
typeof obj.b === "undefined"; // Нет метода b
typeof obj.valueOf === "function"; // Переопределение функции valueOf
typeof obj.valueOf() === "object"; // Метод valueOf() возвращает значение объекта obj

typeof this === "object";  // Указывает на объект в зависимости от того где вызывается

typeof Object.keys({a: 1, b: 2}) === "object"; // Массив ключей

typeof Set === "function"; // Массив уникальных значений, должно быть это объект, но пишет что фунция, я не знаю