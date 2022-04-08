try {
    let res = intersection([1, 5, 4, 2], [8, 91, 4, 1, 3]);
    res.sort();
    if (JSON.stringify(res) !== JSON.stringify([1, 4])) {
        console.log('функция возвращает не то значение для [1, 5, 4, 2], [8, 91, 4, 1, 3]');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для [1, 5, 4, 2], [8, 91, 4, 1, 3]');
}
try {
    res = intersection([1, 5, 4, 2], [7, 12]);
    res.sort();
    if (JSON.stringify(res) !== JSON.stringify([])) {
        console.log('функция возвращает не то значение для [1, 5, 4, 2], [7, 12]');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для [1, 5, 4, 2], [7, 12]');
}
try {
    res = intersection([1, 1, 5, 4, 2], [8, 91, 4, 1, 1, 3]);
    res.sort();
    if (JSON.stringify(res) !== JSON.stringify([1, 4])) {
        console.log('функция возвращает не то значение для [1, 1, 5, 4, 2], [8, 91, 4, 1, 1, 3] правильно [1, 4]');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для [1, 1, 5, 4, 2], [8, 91, 4, 1, 1, 3] правильно [1, 4]');
}