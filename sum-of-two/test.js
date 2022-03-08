try {
    if (sumOfTwo([1, 2, 3, 4, 5], 4) !== true) {
        console.log('функция возвращает не то значение для [1, 2, 3, 4, 5], 4');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для [1, 2, 3, 4, 5], 4');
}
try {
    if (sumOfTwo([1, 2, 3, 4, 5], 100) !== false) {
        console.log('функция возвращает не то значение для [1, 2, 3, 4, 5], 100');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для [1, 2, 3, 4, 5], 100');
}
try {
    if (sumOfTwo([1, 1, 1], 2) !== true) {
        console.log('функция возвращает не то значение для [1, 1, 1], 2');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для [1, 1, 1], 2');
}
try {
    if (sumOfTwo([1, -1, 1], 0) !== true) {
        console.log('функция возвращает не то значение для [1, -1, 1], 0');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для [1, -1, 1], 0');
}
try {
    if (sumOfTwo([1, 5], 5) !== false) {
        console.log('функция возвращает не то значение для [1, 5], 5');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для [1, 5], 5');
}
try {
    if (sumOfTwo([5], 5) !== false) {
        console.log('функция возвращает не то значение для [5], 5');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для [5], 5');
}
try {
    if (sumOfTwo([], 0) !== false) {
        console.log('функция возвращает не то значение для [], 0');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для [], 0');
}