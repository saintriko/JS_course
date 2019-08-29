// Существует функция isEmpty, которая принимает один аргумент и проверяет, является ли его значение пустым.
// Необходимо дописать функцию isEmpty
// Функция должа обрабатывать любые типы значений. Не должна изменять переданный аргумент.
// Не должна обрабатывать вложенные структуры данных

// Примеры:
// isEmpty(NaN) === true
// isEmpty(0) === false
// isEmpty(false) === false
// isEmpty(undefined) === true
// isEmpty([[], []]) === false

// Ниже функции, в комментарии, описать случая, которые были использованы для тестирования

function isEmpty(valueToCheck) {
    let result;
    let typeOfValue = typeof(valueToCheck);
    if (typeOfValue === "undefined") {
        result = true
    } else if (typeOfValue === "number") {
        if (isNaN(valueToCheck)) {
            result = true
        }
        result = false
    } else if (valueToCheck === "") {
        result = true
    } else if (valueToCheck == null) {
        result = true
    } else {
        result = false
    }
    return result;
}
