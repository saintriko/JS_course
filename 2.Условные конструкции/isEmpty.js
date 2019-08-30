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
    if (typeof(valueToCheck) === "number" && valueToCheck == 0) {
        result = false
    } else if (typeof(valueToCheck) === "boolean") {
        result = false
    } else {
        result = valueToCheck ? false : true
    }
    return result;
}
