// Неоходимо написать свою реализацию метода map протопипа Array.
// Функция должна принимать два аргумента, массив и callback-функцию. Должна возвращать измененный массив.
// Функция не должна изменять переданный массив

function mapArray(array, callbackFunction) {
    if (!Array.isArray(array) || typeof(callbackFunction) !== "function") {
        throw new Error("Expected: array, function")
    }
    let resultArray = [];
    for (let i = 0; i < array.length; i++) {
        resultArray.push(callbackFunction.call(this, array[i], i, array))
    }
    return resultArray;
}