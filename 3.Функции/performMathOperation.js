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
        return (firstElem, secondElem) => firstElem + secondElem;
    }
    if (sign == "-") {
        return (firstElem, secondElem) => firstElem - secondElem;
    }
    if (sign == "/") {
        return (firstElem, secondElem) => firstElem / secondElem;
    }
    if (sign == "*") {
        return (firstElem, secondElem) => firstElem * secondElem;
    }
    return undefined;
}

function performMathOperation(sign, firstOperand, ...numbers) {
    let operation = getSign(sign);
    if (typeof(firstOperand) === "number" && operation !== undefined) {
        let result = firstOperand;
        numbers.forEach((number) => {
                if (typeof number !== "number" || isNaN(number)) {
                    throw new Error('Expected number');
                } else {
                    result = operation(result, number);
                }
            }
        )
        return result;
    }
    else {
        throw new Error('Error. Expected: (sign, numbers)');
    }
}

console.log(performMathOperation("*", 2, 1, 20))