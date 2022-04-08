/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    if(str.trim().length === 0) return "";
    //краевые условия

    const regexp = /[^\wA-ЯЁа-яё]+/g;
    const arrWord = str.trim().split(regexp);

    const result = arrWord.map( word => {
     return word[0].toUpperCase() + word.slice(1);
    });

    return result.join(" ")
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"
console.log(capitalize(' '));
