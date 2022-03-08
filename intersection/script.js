/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 * 
 */

function intersection(arr1, arr2) {
    const intersectionArray = arr1.reduce(function (acc, item) {
        if (arr2.indexOf(item) !== -1 && acc.indexOf(item) === -1) {
            acc.push(item)
        }
        return acc;
    }, [])

    return intersectionArray;

}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []
console.log(intersection([1, 5, 4, 2, 3, 8], [8, 91, 4, 1, 3]));