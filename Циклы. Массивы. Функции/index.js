//-------------------------------------------------------------------------------------------------
// проверка выбора
// let checkChoice = (taskChoice, messageChoice, fun) =>  Number.isInteger(taskChoice) == true ? true : (alert(messageChoice), fun);

// 1. showStars
let showSymb = (numberSymb = prompt('Enter number of stars ', 1)
                ,Symb = '*') => {
// checkChoice(numberStars,'An integer [1-6] is required',showStars());
let res = '', i = 0;
while (i++ < numberSymb) res +=Symb;
return (res);
//return("*".repeat(numberSymb));
};

// 2. Multiplicity
let  getMultNumber =(minLim   = prompt('Нижняя граница =', 10)
                   ,maxLim   = prompt('Верхняя граница =', 50)
                   ,multNumb = prompt('Кратность =', 5)) => {
let res = '';
for (minLim; minLim <= maxLim; ++minLim){ minLim % multNumb ? 1 : res += `${minLim} `};
return(res);
};

//-------------------------------------------------------------------------------------------------
// 3. getEvenElSum
let getEvenElSum = (arr) => {
let res = 0, i = 0;
for (i; i < arr.length; i++) arr[i] % 2 ? 1 : res += arr[i];
return(`Sum of even elements ${res}`);
}
//-------------------------------------------------------------------------------------------------
// 4. showZeroLessTen
let showZeroLessTen = (arrS) => {
    for (i = 0; i < arrS.length; i++) arrS[i] < 10 ? arrS[i] = 0: 0;
    return arrS;
};
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
//-------------------------------------------------------------------------------------------------
// 6. getArrConc
let getArrConc = (arr1,arr2) => {
res = [];
for(i = 0; i < arr1.length; i++) res[i] = arr1[i];  
for(j = 0; j < arr2.length; j++) res[i + j] = arr2[j];  
return res;
};

//-------------------------------------------------------------------------------------------------
// меню
let arr = [1,20,3,17,6,13,9,10,12,7]; 
let arr2 = ['a','s','d','f','g','q','w','e','r','t','y'];

function hwMenu(taskChoice = parseInt(prompt(`1. Вывести знак * столько раз сколько задаст пользователь 
                                            \n2. Вывод чисел от limit1 до limit2, которые кратны num
                                            \n3. Сумма четных элементов массива
                                            \n4. Обнулите все элементы массива меньше 10
                                            \n5. Напишите функцию, которая дополняет нулями целое число до оказанной длины. Поработайте вариант с отрицательными числами. Например, fun(-4,6) вернет строку -000004
                                            \n6. Cоедините два массива в один большой
                                            \nВыберите номер задания (1-6)`), 10)){
//checkChoice(taskChoice,'необходимо число (1-6)',hwMenu());
switch (taskChoice) {
    case 1: console.log(showSymb());  break;
    case 2: console.log(getMultNumber());  break;
    case 3: console.log(getEvenElSum(arr)); break;
    case 4: console.log(showZeroLessTen(arr));  break;
    case 5: console.log(addZero());  break;
    case 6: console.log(getArrConc(arr,arr2)); 
    }
}
//-------------------------------------------------------------------------------------------------

hwMenu();