//-------------------------------------------------------------------------------------------------
// 1. getPosEl
let getPosEl = (arr) => arr.filter(el => el >= 0);

// 2. getSumLess100
let getSumLess100 = (arr) => arr.filter(el => el < 100).reduce((accum, val) => accum + val);

//-------------------------------------------------------------------------------------------------
// 3. getReduce3Per
let getReduce3Per = (arr) => {
    arr.forEach((el, i, arr) => arr[i] *= .97); 
    return arr
}

//-------------------------------------------------------------------------------------------------
// 4. getIncr3Per
let getIncr3Per = (arr) => {
    arr.forEach((el, i, arr) => el < 100 ? arr[i] *= 1.05 : 1); 
    return arr
}
//-------------------------------------------------------------------------------------------------
// 5. addZero
let preCalc = (val) => {
    sign = '', len = 0, num = Math.abs(val);
    val < 0 ? (sign += '-', len=`${val}`.length - 1): len=`${val}`.length;
    return {sign, len, num};
};

let calcZero = (len, userLen) => showSymb(userLen-len,'0'); 

let addZero = (userNum = prompt('Enter number =', -4)
              ,userLen = prompt('Enter length =', 6)) => preCalc(userNum).sign + calcZero(preCalc(userNum).len, userLen) + preCalc(userNum).num;
//----------------------------let getSumLess100 = (arr) => arr.filter(el => el < 100).reduce((accum, val) => accum + val);
//---------------------------------------------------------------------
// 6. getArrConc
let getArrConc = (arr1,arr2) => {
arrLen = arr1.length;
for(i = 0; i < arr2.length; i++) arr1[i + arrLen] = arr2[i];  
return arr1;
};

//-------------------------------------------------------------------------------------------------
// меню
function hwMenu(taskChoice = parseInt(prompt(`1. Отфильтруйте отрицательные элементы в массиве, оставив только положительные 
                                            \n2. Найдите сумму элементов массива которые меньше 100 по значению
                                            \n3. Уменьшите каждый элемент массива на 3%
                                            \n4. Если все элементы массива меньше 100 увеличьте их на 5%
                                            \n5. Проверьте является ли слово палиндромом (например слово abcddcba подходит т.к. оно "зеркальное")
                                            \n6. Соедините две строки в одну и переверните наоборот
                                            \n7. Напишите функцию, которая преобразует первую букву каждого слова строки в верхний регистр.
                                            \n8. Вывести индексы минимальных элементов массива
                                            \nВыберите номер задания (1-6)`), 10)){
//checkChoice(taskChoice,'необходимо число (1-6)',hwMenu());
switch (taskChoice) {
    case 1: console.log(getPosEl(arr));  break;
    case 2: console.log(getSumLess100(arr));  break;
    case 3: console.log(getReduce3Per(arr)); break;
    case 4: console.log(getIncr3Per(arr));  break;
    case 5: console.log(addZero());  break;
    case 6: console.log(getArrConc(arr,arr2)); 
    }
}
//-------------------------------------------------------------------------------------------------

let arr = [101,20,-3,117,6,113,9,10,12,-7]; 
let arr2 = ['a','s','d','f','g','q','w','e','r','t','y'];

hwMenu();