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
   hwUl.append(li);
   }
);
//-------------------------------------------------------------------------------------------------
// 2* выделите каждый элемент списка случайным цветом поменяв ему цвет текста или фон
arr = document.querySelectorAll('li');
arr.forEach(el => el.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16));
//-------------------------------------------------------------------------------------------------
// 3* по просьбе трудящихся :)
// объект Товара (название, цена, другие характеристики ...) создайте карточку
let hwProdUl = document.createElement('ul');
hwProdUl.classList.add('ProdUl');
// hwProdUl.style.list-style-type: ";
document.body.append(hwProdUl);

function prodCard(objProd){
   let card = document.createElement('li');
   card.classList.add('Container');
   
   let cardDiv = document.createElement('div');
   cardDiv.classList.add('cardDiv');
   cardDiv.style.height = '150px';
   cardDiv.style.width = '300px';
   cardDiv.style.border = '1px solid black';

   let cardContent = document.createElement('div');
   cardDiv.classList.add('cardContent');
   
   let prName = document.createElement('p');
   cardDiv.classList.add('prName');
   prName.innerText = 'Name: ' + objProd.prName;

   let prCategory = document.createElement('p');
   cardDiv.classList.add('prCategory');
   prCategory.innerText = 'Category: ' + objProd.prCategory;

   let prAge = document.createElement('p');
   cardDiv.classList.add('prAge');
   prAge.innerText = 'Age: ' + objProd.prAge;

   let prProducer = document.createElement('p');
   cardDiv.classList.add('prProducer');
   prProducer.innerText = 'Producer: ' + objProd.prProducer;

   cardContent.append(prName);
   cardContent.append(prCategory);
   cardContent.append(prAge);
   cardContent.append(prProducer);
   cardDiv.append(cardContent);
   card.append(cardDiv);
   return card;
}

class Product{
   constructor(prName, prCategory, prAge, prProducer){
      this.prName     = prName;
      this.prCategory = prCategory;
      this.prAge      = prAge;
      this.prProducer = prProducer;
   }
};

let Prod1 = new Product('prName1','prCategory1','prAge1','prProducer1');
let Prod2 = new Product('prName2','prCategory2','prAge2','prProducer2');
let Prod3 = new Product('prName3','prCategory3','prAge3','prProducer3');
let Prod4 = new Product('prName4','prCategory4','prAge4','prProducer4');

let arrProd = [];
arrProd.push(Prod1, Prod2, Prod3, Prod4);

arrProd.forEach(el => hwProdUl.append(prodCard(el)));