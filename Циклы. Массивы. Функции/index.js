//-------------------------------------------------------------------------------------------------
// проверка выбора
// let checkChoice = (taskChoice, messageChoice, fun) =>  Number.isInteger(taskChoice) == true ? true : (alert(messageChoice), fun*);

// 1. showStars
let showStars = (numberStars = prompt('Enter number of stars ', 1)) => {

// checkChoice(numberStars,'An integer [1-6] is required',showStars());

let res = '', i = 0;
while (i++ < numberStars) res +='*';
return (res);
//return("*".repeat(numberStars));
};

// 2. Multiplicity
let  getMultNumber =(minLim   = prompt('Нижняя граница =', 10)
                   ,maxLim   = prompt('Верхняя граница =', 50)
                   ,multNumb = prompt('Кратность =', 5)) => {
let res = '';
for (minLim; minLim <= maxLim; ++minLim){ minLim % multNumb ? 1 : res += `${minLim} `};
return(res);
};

let arr = [1,20,3,17,6,13,9,10,12,7];
//-------------------------------------------------------------------------------------------------
// 3. getEvenElSum
let getEvenElSum = (arr) => {
let res = 0, i = 0;
for (i; i < arr.length; i++) arr[i] % 2 ? 1 : res += arr[i];
return(res);
}
//-------------------------------------------------------------------------------------------------
// 4. showZeroLessTen
let showZeroLessTen = (arrS) => {
    for (i = 0; i < arrS.length; i++) arrS[i] < 10 ? arrS[i] = 0: 0;
    return arrS;
};
//-------------------------------------------------------------------------------------------------
// 5. addZero
let getSign = (val) => {
    sign = '', len = 0;
    val < 0 ? (sign += '-', len=`${val}`.length-1): len=`${val}`.length;
    return sign, len;
};

let addZero = (userNum = prompt('Enter number =', -4)
              ,userLen = prompt('Enter length =', 6)) => {
let res = getSign(userNum);            


for (i = 0; i < arrS.length; i++) arrS[i] < 10 ? arrS[i] = 0: 0;
return arrS;
};
// //-------------------------------------------------------------------------------------------------
// // 5. умножение
// function multSeries(minLim = parseInt(prompt('Нижняя граница =', 5), 10)
//                    ,maxLim = parseInt(prompt('Верхняя граница =', 12), 10)){
// let result = 1;
// //for(minLim; minLim <= maxLim; minLim ++) result *= minLim;  
// while (minLim++ <= maxLim) result *= (minLim - 1);  
// console.log(result);
// };

//-------------------------------------------------------------------------------------------------
// меню
function hwMenu(taskChoice = parseInt(prompt(`1. Вывести знак * столько раз сколько задаст пользователь 
                                            \n2. Вывод чисел от limit1 до limit2, которые кратны num
                                            \n3. Сумма четных элементов массива
                                            \n4. Обнулите все элементы массива меньше 10
                                            \n5. Напишите функцию, которая дополняет нулями целое число до оказанной длины. Поработайте вариант с отрицательными числами. Например, fun(-4,6) вернет строку -000004
                                            \n6. Cоедините два массива в один большой
                                            \nВыберите номер задания (1-6)`), 10)){
//checkChoice(taskChoice,'необходимо число (1-6)',hwMenu());
switch (taskChoice) {
    case 1: console.log(showStars());  break;
    case 2: console.log(getMultNumber());  break;
    case 3: console.log(getEvenElSum(arr)); break;
    case 4: console.log(showZeroLessTen(arr));  break;
    case 5: console.log(getSign(-4));  break;
    case 5: multSeries(); 
    }
}
//-------------------------------------------------------------------------------------------------

hwMenu();