// Иногда, во время разработки, бывает нужно трассировать порядок вызова различных функций. 
// Для нахождения багов или проблем произовалительности.
// Но писать одни и те же конструкции каждый раз неудобно.
// Вместо этого, можно написать функцию, которая будет преобразовывать любые переданную ей функцию, 
// под задачу сбора нужной информации.

// Необходимо написать функцию withDegubInfo(), которая будет принимать единственным аргументом функцию,
// и модифициовать её таким образом, чтобы при её вызове в консоль браузера выводилось сообщение по такому шаблону:
// <имя функции; время вызова; массив аргументов>

function withDebugInfo(calledFunction) {
    if (typeof (calledFunction) !== "function") {
        throw new Error('Not a function');
    }
    return function (...args) {
        console.log(`<${calledFunction.name}; ${new Date().toTimeString()}; ${args}>`);
        return calledFunction(...args);
    }
}

function summarize(...args) {
    let result = 0;
    for (const i in args) {
        result = result + args[i];
    }
    return result;
};

console.log(withDebugInfo(summarize)(1, 2, 3, 4, 5));