/*
 * Задача 13: «Сумма двух»
 *
 * Напишите функцию sumOfTwo(arr, num). Её аргументы: массив целых чисел arr
 * и целое число num. Функция должна вернуть true, если в переданном массиве
 * есть какие-то два числа, чья сумма равна num. Если же такой пары чисел нет,
 * функция должна вернуть false.
 * 
 */

function sumOfTwo(arr, sum) {
    const sumAll = arr.reduce(function (acc, item) {
        return acc = acc + item
    }, 0);
    if (sumAll < sum) {
        return false;
    }

    let firstAddend;
    let secondAddend;

    while (arr.length >= 2) {
        firstAddend = arr.pop();
        secondAddend = sum - firstAddend;
        isFound = arr.some(function (item) {
            return item === secondAddend;
        });
        if (isFound) {
            return true;
        }
    }

    return false;

}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(sumOfTwo([1, 2, 3, 4, 5], 4)); // true (так как 1 + 3 === 4)
console.log(sumOfTwo([1, 2, 3, 4, 5], 100)); // false