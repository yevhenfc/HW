//-------------------------------------------------------------------------------------------------
/* Task 1 Создайте объект ноутбука 
1 Серийный номер 3V5E7EA
2 Модель HP 255 G8
3 Экран:
Тип экрана IPS
Разрешение 1920x1080
4 Процессор Восьмиядерный AMD Ryzen 7 5700U (1.8 - 4.3 ГГц)
5 Оперативная память 8 ГБ
6 Накопители данных:
Объём HDD 256 ГБ SSD
Видеокарта AMD Radeon Graphics
7 Корпус: 
Цвет Серебристый
Вес 1,7
Габариты (Ш х Г х В) 358 x 242 x 19
*/

let laptop = {
    SerialNumber: '3V5E7EA',
    Model: 'HP 255 G8',
    Display: {
        Type: 'IPS',
        Resolution: {
            h: 1920,
            w: 1080,
        },  
    },
    CPU: {
        CoresNumber: 8,
        Producer: 'AMD',
        Model: 'Ryzen 7 5700U',
        Frequency: {
            Min: '1.8 Gh',
            Max: '4.3 Gh',
        },
    },
    dataStorage: {
        HDD: {
            Capacity: '1 TB', 
        },
        SSD: {
            Capacity: '256 GB',
        },    
    },
    GPU: {
        Producer: 'AMD',
        Model: 'Radeon Graphics',
        },
    Case: {
        Color: 'Silver',
        Weight: '1.7 Kg',
        Size: {
            Width: 358,
            Height: 242,
            Depth: 19,
        },
    },
}

//------------------------------------------------------------------------------------------------- 
/*
Task 2 Создайте класс который описывает создание нового пользователя с помощью логина и пароля. 
Сделайте несколько обьектов. Создайте массив из нескольких обьектов (не вводите id)
*/
class NewUser{
    constructor(userName, userPsw){
        this.userName = userName;
        this.userPsw = userPsw;
    }
    outObject(){
        console.log(this);
    }
};

let user1 = new NewUser('User1','Psw1');
let user2 = new NewUser('User2','Psw2');
let user3 = new NewUser('User3','Psw3');
let user4 = new NewUser('User4','Psw4');

let usersArr = [user1, user2, user3, user4];

//-------------------------------------------------------------------------------------------------
/*
Task 3 Из полученого массива в задании 2 сделайте карту (map). в качестве ключа используйте логин
*/
let getArrayMap1 = (arr) => {
    let arrayMap = new Map(), i;
    for (i = 0; i < arr.length; i++) arrayMap.set(arr[i].userName, arr[i]);
    return arrayMap;
};

let getArrayMap2 = (arr) => {
    let arrayMap = new Map();
    arr.forEach((el, i)  => {arrayMap = arrayMap.set(el.userName, el)});
    return arrayMap;
};

console.log(getArrayMap1(usersArr));
console.log(getArrayMap2(usersArr));

//-------------------------------------------------------------------------------------------------
/*
Task 4* разными способами решите вопрос соединения двух массивов без повторов
*/
let arr1 = [1, 2, 3, 'q', 'w',], arr2 = ['q','w','e','r', 3, 2,];

let getConcatSet1 = (arr1, arr2) => Array.from(new Set([...arr1, ...arr2]));
let getConcatSet2 = (arr1, arr2) => Array.from(new Set(arr1.concat(arr2)));
let getConcatSet3 = (arr1, arr2) => {
    arr1.push(...arr2);
    return Array.from(new Set(arr1));
};
let getConcatSet4 = (arr1, arr2) => [... new Set([...arr1, ...arr2])];
let getConcatSet5 = (arr1, arr2) => [...arr1, ...arr2].filter((el, ind) => ind === [...arr1, ...arr2].indexOf(el));

// console.log(getConcatSet1(arr1, arr2));
// console.log(getConcatSet2(arr1, arr2));
// console.log(getConcatSet3(arr1, arr2));
// console.log(getConcatSet4(arr1, arr2));
// console.log(getConcatSet5(arr1, arr2));