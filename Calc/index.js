function addition() {
    const firstNumber = prompt('первое слагаемое', '');
    const secondNumber = prompt('второе слагаемое', '');
    alert(`Результат: ${+firstNumber + +secondNumber}`);
}

function subtraction() {
    const firstNumber = prompt('уменьшаемое', '');
    const secondNumber = prompt('вычитаемое', '');
    alert(`Результат: ${+firstNumber - +secondNumber}`);
}

function multiplication() {
    const firstNumber = prompt('первый множитель', '');
    const secondNumber = prompt('второй множитель', '');
    alert(`Результат: ${+firstNumber * +secondNumber}`);
}

function division() {
    const firstNumber = prompt('делимое', '');
    const secondNumber = prompt('делитель;', '');
    alert(`Результат: ${+firstNumber / +secondNumber}`);
}