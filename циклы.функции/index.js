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
    default:         console.log('4-я четверть часа'); break;
    }
};
//-------------------------------------------------------------------------------------------------
// 4. кратность
function multNumber(minLim   = prompt('Нижняя граница =')
                   ,maxLim   = prompt('Верхняя граница =')
                   ,multNumb = prompt('Кратность =')){
    while (minLim <= maxLim) {
        minLim % multNumb == 0 ? console.log(minLim) : 1;
        minLim++; 
    };
}
//-------------------------------------------------------------------------------------------------
// 5. умножение
function multSeries(minLim = prompt('Нижняя граница =')
                   ,maxLim = prompt('Верхняя граница =')){
let result = 1;
for(minLim; minLim <= maxLim; minLim ++){result *= minLim}   
console.log(result);
};
//-------------------------------------------------------------------------------------------------
// проверка выбора
function checkChoice(taskChoice){
    Number.isInteger(taskChoice) == true && (taskChoice >= 1 && taskChoice <= 5) ? true : (alert('необходимо число (1-5)'), hwMenu())        
}
//-------------------------------------------------------------------------------------------------
// меню
function hwMenu(taskChoice = parseInt(prompt('Выберите номер задания (1-5)'),10)){
checkChoice(taskChoice);
switch (taskChoice) {
    case 1:  consoleVar();  break;
    case 2:  greetName();   break;
    case 3:  quarterHour(); break;
    case 4:  multNumber();  break;
    default: multSeries();  break;
    }
}
//-------------------------------------------------------------------------------------------------

hwMenu();