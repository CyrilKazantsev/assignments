function formatedDate(str) {
    const arr = str.split(" ");
    const newArray = arr.map(function(item, index, arr){
        return item.replace(/\./g, '/')
        // item.split(".").join("/");
    })
    console.log(newArray);
}
dates = "23.04.1996 07.10.2002 15.08.1945"
formatedDate(dates)



//this
//при выполнении метода объекта this = объекту
const obj = {
    prop: 'Свойство',
    method: function () {
        console.log(this.prop);
    }, 
}
obj.method(); // "Свойство" 

//у стрелочной функции this нет, берется из лексического окружения

const arrayFunc = () => {
    console.log(this);
}

obj.arrayFunc()

//this равен window или undefined зависит от строгого режима
function globalFunction() {
    console.log(this, arguments);
  }

//Привязка контекста  
globalFunction = globalFunction.apply(obj, [1,3,5])
globalFunction();

//функция конструктор или класс this равен созданному объекту
function Human(name){
    this.name = name;
    this.printName = function(){
        console.log('Name: ', this.name);
    }
}


const bob = new Human('Bob');

//потеря контекста при передачи функции в обработчик события
h1.addEventListener('click', bob.printName.bind(bob))
bob.printName()