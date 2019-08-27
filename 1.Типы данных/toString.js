// Для каждого приведенного ниже выражения, дописать, чему будет равен результат приведения к строке
// Описать в комментарии к выражению, почему именно так.

(1).toString() === "1"; // Число 1 приведено к строке

({a:1}).toString() === "[object Object]"; // Объект приведен к строке, метод toString унаследован от object

[1].toString() === "1"; // Array переопределяет метод toString, выводит его компоненты
[].toString() === "";

"".toString.toString() === "function toString() {[native code]}"; // По сути мы вызываем метод toString() для функции toString, выводит тело этой функции

(() => 1).toString() === "() => 1"; // Вызывает метод toString для функции, выводит код этой функции

Object.keys({a:1,b:2}).toString() === "a,b"; // keys возвращает array ключей, у него переопределен метод toString, выводит его компоненты
Object.entries({a:1,b:2}).toString() === "a,1,b,2"; // entries возвращает array ключей и значения
Object.toString() === "function Object() {[native code]}"; // Конструктор object, является функцией, для нее переопределен метод toString

(1 / 0).toString() === "Infinity" ; // Бесконечность в строку
(1 / "1").toString() === "1"; // "1" приводится к number, ответ снова к строке

Number(1).toString() === "1"; // У объекта созданого через Number переопределен метод toString, выводит значение
(1 / "zero").toString() === "NaN"; // "zero" не число

new String(({a:1}).b) === "undefined"; // Метод b не определен для объекта, получаем объект String со свойствами "u", "n", "d..
new String(null) === "null"; //

({} === {}).toString() === "false"; // boolean в строку
(true).toString() === "true";