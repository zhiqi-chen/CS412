const evaluate = (expression) => {

    switch (expression.charAt(1)) {
        case '+':
            return (expression) => Number(expression.charAt(0)) + Number(expression.charAt(2));
        case '-':
            return (expression) => Number(expression.charAt(0)) - Number(expression.charAt(2));
        case '*':
            return (expression) => Number(expression.charAt(0)) * Number(expression.charAt(2));
        case '/':
            return (expression) => Number(expression.charAt(0)) / Number(expression.charAt(2));
        case '^':
            return (expression) => Number(expression.charAt(0)) ** Number(expression.charAt(2));
        case '%':
            return (expression) => Number(expression.charAt(0)) % Number(expression.charAt(2));
    }
}

const expression = '8%3';
let mathFunction = evaluate(expression);
console.log(`${expression} = ${mathFunction(expression)}`);



