try {
    if (isPrime(0) !== false) {
        console.log('функция возвращает не то значение для 0');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для 0');
}
try {
    if (isPrime(1) !== false) {
        console.log('функция возвращает не то значение для 1');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для 1');
}
try {
    if (isPrime(2) !== true) {
        console.log('функция возвращает не то значение для 2');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для 2');
}
try {
    if (isPrime(3) !== true) {
        console.log('функция возвращает не то значение для 3');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для 3');
}
try {
    if (isPrime(6) !== false) {
        console.log('функция возвращает не то значение для 6');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для 6');
}
try {
    if (isPrime(17) !== true) {
        console.log('функция возвращает не то значение для 17');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для 17');
}
try {
    if (isPrime(997) !== true) {
        console.log('функция возвращает не то значение для 997');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для 997');
}
try {
    if (isPrime(998) !== false) {
        console.log('функция возвращает не то значение для 998');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для 998');
}