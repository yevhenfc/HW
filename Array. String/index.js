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
    // arr.forEach((el, i, arr) => el < 100 ? arr[i] *= 1.05 : 1); 
    arr.forEach((el, i, arr) => (el < 100 && el >= 0) ? arr[i] *= 1.05 : (el < 100) ? arr[i] *= .95 : 1); 
    return arr
}
//-------------------------------------------------------------------------------------------------
// 5. getPalindrom
let getPalindrom = (word = prompt('Enter word','abcddcba')) => word == word.split('').reverse().join('') ? 
                                                               `'${word}'` + " is polindrom" : 
                                                               `'${word}'` + " isn't polindrom";


//-------------------------------------------------------------------------------------------------
// 6. getTwoStrReverse
let getTwoStrReverse = (str1 = prompt('Enter string1', 'qwerty'),
                        str2 = prompt('Enter string2', 'йцуке')) =>  (str1 + str2).split('').reverse().join('')

//-------------------------------------------------------------------------------------------------
// 7. getUpperCase
let getUpperCase = (str = prompt('Enter several words', 'qwe  asd zxc')) => 
// v.1
// {
// let arr = str.split(''), i;
// arr[0] = arr[0].toUpperCase();
// for (i = 1; i < arr.length; i++) arr[i - 1] == ' ' && arr[i] != ' ' ? arr[i] = arr[i].toUpperCase(): true;
// return arr.join('');
// }

// v.2
// {   
// let arr = str.split(' ').map(el => {return el.charAt(0).toUpperCase() + el.substring(1).toLowerCase()});
// return arr.join(' ');
// }

// v.3
str.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
/*
^\w : first character of the string
| : or
\s\w : first character after whitespace
(^\w|\s\w) Capture the pattern.
g Flag: Match all occurrences.
*/
// 7. getIndMinEl
let getIndMinEl = (arr, userNum = prompt('Enter number of min elements', 2)) => 



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
    case 5: console.log(getPalindrom());  break;
    case 6: console.log(getTwoStrReverse()); break;
    case 7: console.log(getUpperCase()); break;
    case 8: console.log(getIndMinEl(arr)); break; 
    }
}
//-------------------------------------------------------------------------------------------------

let arr = [101,20,-3,117,6,113,9,10,12,-7]; 
let arr2 = ['a','s','d','f','g','q','w','e','r','t','y'];

hwMenu();