//-------------------------------------------------------------------------------------------------
// 1. Создайте 10 параграфов и первым трем дайте класс 
//   Выделенный текст, который  выделяет текст например фоном.
for (let i = 0; i < 10; i++) {
    let testP = document.createElement('p');
    if (i < 3) testP.className = 'selectedText';
    testP.innerText = `It is my ${i+1} message in DOM element!`;
    testP.style.fontSize = '10px';
    document.body.append(testP)
};
let arr = document.querySelectorAll('.selectedText');
arr.forEach(el => el.style.backgroundColor = 'red');
//-------------------------------------------------------------------------------------------------
// 2. Создайте список. В каждый элемент списка напишите текст свой, например 
//   дни недели или цвета радуги.
let arrDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let hwUl = document.createElement('ul');
document.body.append(hwUl);
arrDays.forEach(el =>
   {let li = document.createElement('li');
   li.innerText = el;
   hwUl.appendChild(li);
   }
);
//-------------------------------------------------------------------------------------------------
// 2* выделите каждый элемент списка случайным цветом поменяв ему цвет текста или фон
arr = document.querySelectorAll('li');
arr.forEach(el => el.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16));
//-------------------------------------------------------------------------------------------------
// 3* по просьбе трудящихся :)
// объект Товара (название, цена, другие характеристики ...) создайте карточку

