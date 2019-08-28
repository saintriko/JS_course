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
    let result:
    
    // Тут код
    
    return result;
}

// Примеры
// isSameStructure({}) === false
// isSameStructure(12) === false;
// isSameStructure({error: true, code: 404}) === true
// isSameStructure({name: "John Doe", id: 127543, avatarURL: "https://example.com/image/127543.webp"}) === false;