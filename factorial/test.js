try {
    if (factorial(0) !== 1) {
        console.log('функция возвращает не то значение для 0');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для 0');
}
try {
    if (factorial(1) !== 1) {
        console.log('функция возвращает не то значение для 1');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для 1');
}
try {
    if (factorial(2) !== 2) {
        console.log('функция возвращает не то значение для 2');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для 2');
}
try {
    if (factorial(3) !== 6) {
        console.log('функция возвращает не то значение для 3');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для 3');
}
try {
    if (factorial(6) !== 720) {
        console.log('функция возвращает не то значение для 6');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для 6');
}
try {
    if (factorial(9) !== 362880) {
        console.log('функция возвращает не то значение для 9');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для 9');
}