// Необходимо напиать функцию performMathOperation(), 
// которая будет принимать первым аргументом знак математической операции, а всеми последующими - числа, 
// над которыми данную операцию нужно произвести.
// Количество передаваемых чисел не ограниченно.
// Если в момент вычислений значение становится NaN функция должна вернуть ошибку.

// Для облегчения работы с опеределением математической операции можно писать функцию getMathOperation(),
// которая будет принимать одним аргументом знак операции, и возвращать функцию, 
// которая будет выполнять необходимую операцию над двумя числами и возвращат результат

function getSign(sign) {
    switch (sign) {
        case "+":
            return ((firstElem, secondElem) => {
                return firstElem + secondElem
            })
        case "-":
            return ((firstElem, secondElem) => {
                return firstElem - secondElem
            })
        case "/":
            return ((firstElem, secondElem) => {
                return firstElem / secondElem
            })
        case "*":
            return ((firstElem, secondElem) => {
                return firstElem * secondElem
            })
        case "%":
            return ((firstElem, secondElem) => {
                return firstElem % secondElem
            })
        case "**":
            return ((firstElem, secondElem) => {
                return firstElem ** secondElem
            })
        default:
            return undefined
    }
}

function performMathOperation(sign, ...numbers) {
    var result;
    var operation = getSign(sign);
    numbers.forEach(function (elem) {
        if (typeof (elem) !== "number" || operation == undefined) {
            result = "error"
        }
    })

    if (result !== "error" && numbers.length > 0 ) {
        result = numbers.reduce((sum, number) => operation(sum, number))
    }
    return result;
}
