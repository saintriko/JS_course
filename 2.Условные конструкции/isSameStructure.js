// Часто при разработке возникает ситуация, когда нужно проверить, соответствует ли объект определенной структуре.
// Существует функция isSameStructure, которая принимает один аргумент, и проверяет его на соответствие
// заданной структуре объекта. Необходимо дописать эту функцию.

// <имя свойства> :== <тип>
// <имя свойства>?: <тип> - опциональное поле (может как существовать и быть определенного типа,
// так и не существовать и быть равно undefined)

/*
Необходимая структура

{
    name: string;
    id: number;
    achievments: array;
    avatarURL: string;
}
*/

// Переданный объект также может иметь структуру некоторого объекта, описывающего, например, ошибку.
// Необходимо также проверять данный случай.

/*
Структура объекта ошибки

{
    error: boolean;
    code: number;
    message?: string;
}
*/

function isSameStructure(objectToCheck) {
    let result;
    if (typeof objectToCheck !== "object") {
        result = false;
    } else {
        if (typeof(objectToCheck.name) === "string" && typeof(objectToCheck.id) === "number" && Array.isArray(objectToCheck.achievments) && typeof(objectToCheck.avatarURL) === "string"
            || typeof(objectToCheck.error) === "boolean" && typeof(objectToCheck.code) === "number" && (typeof(objectToCheck.message) === "string" || typeof(objectToCheck.message) === "undefined")) {
            result = true
        } else {
            result = false
        }
    }
    return result;
}
