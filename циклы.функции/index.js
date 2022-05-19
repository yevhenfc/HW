// 1. ConsoleVar
function consoleVar(){
let vInt=11, vBool=true, vStr1='"java script"', vStr2='"100"';
console.log(vInt);
console.log(vBool);
console.log(vStr1);
console.log(vStr2);
};
//-------------------------------------------------------------------------------------------------
// 2. Greeting
function greetName(userName = prompt('Ваше имя?')){
let greeting = 'Привет';
console.log(greeting + ', ' + userName + '!')
}
//-------------------------------------------------------------------------------------------------
// 3. четверть часа
function quarterHour(minutes = prompt('Введите минуты')){
let res = (minutes/60) % 1;
switch(true){
    case res < 0.25: console.log('1-я четверть часа'); break; 
    case res < 0.5:  console.log('2-я четверть часа'); break; 
    case res < 0.75: console.log('3-я четверть часа'); break; 
    default:         console.log('4-я четверть часа');
    }
};
//-------------------------------------------------------------------------------------------------
// 4. кратность
function multNumber(minLim   = prompt('Нижняя граница =', 10)
                   ,maxLim   = prompt('Верхняя граница =', 50)
                   ,multNumb = prompt('Кратность =', 5)){
while (minLim++ <= maxLim) (minLim - 1) % multNumb ? 1 : console.log(minLim - 1);
}
//-------------------------------------------------------------------------------------------------
// 5. умножение
function multSeries(minLim = parseInt(prompt('Нижняя граница =', 5), 10)
                   ,maxLim = parseInt(prompt('Верхняя граница =', 12), 10)){
let result = 1;
for(minLim; minLim <= maxLim; minLim ++) result *= minLim;  
console.log(result);
};
//-------------------------------------------------------------------------------------------------
// проверка выбора
function checkChoice(taskChoice){
Number.isInteger(taskChoice) == true && (taskChoice >= 1 && taskChoice <= 5) ? true : (alert('необходимо число (1-5)'), hwMenu())        
}
//-------------------------------------------------------------------------------------------------
// меню
function hwMenu(taskChoice = parseInt(prompt('Выберите номер задания (1-5)'), 10)){
checkChoice(taskChoice);
switch (taskChoice) {
    case 1: consoleVar();  break;
    case 2: greetName();   break;
    case 3: quarterHour(); break;
    case 4: multNumber();  break;
    case 5: multSeries(); 
    }
}
//-------------------------------------------------------------------------------------------------

hwMenu();