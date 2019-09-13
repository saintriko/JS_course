// Необходимо напиать функцию performMathOperation(), 
// которая будет принимать первым аргументом знак математической операции, а всеми последующими - числа, 
// над которыми данную операцию нужно произвести.
// Количество передаваемых чисел не ограниченно.
// Если в момент вычислений значение становится NaN функция должна вернуть ошибку.

// Для облегчения работы с опеределением математической операции можно писать функцию getMathOperation(),
// которая будет принимать одним аргументом знак операции, и возвращать функцию, 
// которая будет выполнять необходимую операцию над двумя числами и возвращат результат

function getSign(sign) {
    if (sign == "+") {
        return ((firstElem, secondElem) =>
            firstElem + secondElem);
    }
    if (sign == "-") {
        return ((firstElem, secondElem) =>
            firstElem - secondElem)
    }
    if (sign == "/") {
        return ((firstElem, secondElem) =>
            firstElem / secondElem)
    }
    if (sign == "*") {
        return ((firstElem, secondElem) =>
            firstElem * secondElem)
    }
    return undefined
}

function performMathOperation(sign, firstOperand, ...numbers) {
    var operation = getSign(sign);
    if (typeof(firstOperand) === "number" && operation !== undefined) {
        return numbers.reduce((sum, number) => typeof number === "number" ? operation(sum, number) : null
            , firstOperand)
    } else {
        throw new Error('Error');
    }
}

console.log(performMathOperation("+", 1, 2, 3))