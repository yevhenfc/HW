// prompt('2+2') == 4 ? alert('+'):alert('-')

// let i=1, sum=0,answ, res;
// // for(i=1;i<=19;i=i+2){sum = sum + i};
 
// // do {answ=prompt('2+2')} while (answ!=4)

// while (i<20){sum=sum+i;i=i+2}
// alert(sum);

// function add(a,b){return Number(a)+Number(b)};
// function sub(a,b){return a-b};
// function mult(a,b){return a*b};
// function devi(a,b){return a/b};
// function print(res){console.log(res)}

// let a,b,c;
// a = prompt('enter a');
// b = prompt('enter b');
// // do {
// // c = prompt('choose act, 1-4');
// // switch (c) {
// //     case 1: 
// //             print(add(a,b));
// //             break;
// //     case 2:
// //             print(sub(a,b));
// //             break;
// //     case 3:
// //             print(mult(a,b));
// //             break;
// //     case 4:
// //             print(devi(a,b));
// //             break;
// //     default: console.log('try againe')
// //     }
// // } while (c!=5);
// console.log(add(a,b));
// console.log(sub(a,b));
// console.log(mult(a,b));
// console.log(devi(a,b));


// function fn_1(num,mas){
//     for (i = 1; i <= num; i++) {console.log(mas + ', ' + i)}
// };
// fn_1(5, 'hello');

// function star(symb,num){
//     while (0 < num) {
//         console.log(symb.repeat(num));
//         num--;
//     }
// };

// star('$',10);

// 1. ConsoleVar
function consoleVar(){
    let vInt=11, vBool=true, vStr1='"java script"', vStr2='"100"';
    console.log(vInt);
    console.log(vBool);
    console.log(vStr1);
    console.log(vStr2);
};
consoleVar();


// // 2. Greeting
// function greetName(userName = prompt('Ваше имя?')){
//     let greeting = 'Привет';
//     console.log(greeting + ', ' + userName + '!')
// }
// greetName();

// // 3. четверть часа

// function quarterHour(minutes = prompt('Минуты')){
// let res = (minutes/60) % 1;
// switch(true){
//     case res < 0.25: 
//         console.log('1-я четверть часа');
//         break; 
//     case (res >= 0.25 && res < 0.5):
//         console.log('2-я четверть часа'); 
//         break; 
//     case (res >= 0.5 && res < 0.75):
//         console.log('3-я четверть часа');
//         break; 
//     default: 
//         console.log('4-я четверть часа');
//         break;
//     }
// };
// quarterHour();

// // 4. кратность
// function multNumber(minLim = prompt('Нижняя граница =')
//                  ,maxLim = prompt('Верхняя граница =')
//                  ,multNumb = prompt('Кратность =')){
//     while (minLim <= maxLim) {
//         minLim % multNumb == 0 ? console.log(minLim) : 1;
//         minLim++; 
//     };
// }
// multNumber();

// // 5. умножение
// function multSeries(minLim = prompt('Нижняя граница =')
//              ,maxLim = prompt('Верхняя граница =')){
// let result = 1;
// for(minLim; minLim <= maxLim; minLim ++){result *= minLim}   
// console.log(result);
// };
// multSeries();




