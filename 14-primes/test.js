try {
    if (JSON.stringify(primes(6)) !== JSON.stringify([2, 3, 5])) {
        console.log('функция возвращает не то значение для 6');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для 6');
}
try {
    if (JSON.stringify(primes(17)) !== JSON.stringify([2, 3, 5, 7, 11, 13, 17])) {
        console.log('функция возвращает не то значение для 17');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для 17');
}
try {
    if (JSON.stringify(primes(-1)) !== JSON.stringify([])) {
        console.log('функция возвращает не то значение для -1');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для -1');
}
try {
    if (JSON.stringify(primes(25)) !== JSON.stringify([2, 3, 5, 7, 11, 13, 17, 19, 23])) {
        console.log('функция возвращает не то значение для 25');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для 25');
}