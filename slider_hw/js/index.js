class Slide{
    constructor(slideSrc, slideName){
        this.slideSrc  = slideSrc;
        this.slideName = slideName;
        slideCount += 1;  
    }
};

let slideArr = new Array;
let slideCount = 0;
let slide0 = new Slide('./image/0.jpeg','Image_0');
let slide1 = new Slide('./image/1.jpeg','Image_1');
let slide2 = new Slide('./image/2.jpeg','Image_2');
let slide3 = new Slide('./image/3.jpeg','Image_3');
let slide4 = new Slide('./image/4.jpeg','Image_4');
let slide5 = new Slide('./image/5.jpeg','Image_5');

for (let i = 0; i < slideCount; i++) slideArr.push(eval(`slide${i}`)); 

const slider = document.getElementById('slideContainer');

function makeSlides(arrImages, startIndex = 0, endIndex = arrImages.lenght) {
    let slides = [], imgSlide, divSlide, pSlide, i;
    for (i = startIndex; i <= endIndex; i++){
        slides[i] = document.createElement('li');
        slides[i].setAttribute('class', 'liSlide liSlide_Style');
        
        divSlide = document.createElement('div');
        if (i == startIndex) {divSlide.setAttribute('class', 'divSlide divSlide_Style divWide')}
        else {divSlide.setAttribute('class', 'divSlide divSlide_Style')};
        
        imgSlide = document.createElement('img');
        imgSlide.setAttribute('src', arrImages[i].slideSrc);
        imgSlide.setAttribute('alt', arrImages[i].slideName);
        
        pSlide = document.createElement('p');
        pSlide.setAttribute('class', 'pSlide pSlide_Style');
        pSlide.innerHTML = arrImages[i].slideName;
        
        divSlide.append(imgSlide);
        divSlide.append(pSlide);

        slider.append(divSlide);
    }
};

function setWide(target){
    removeWide();
    target.classList.add('divWide');
    setBackGroundImage();
}

function removeWide() {
    let divWide = document.querySelector('.divWide');
    divWide.classList.remove('divWide');
}

function setBackGroundImage(){
    let bgImg = document.querySelector('.divWide').firstElementChild.getAttribute('src');
    slideContainer.style.backgroundImage = `url(${bgImg})`;
};

makeSlides(slideArr, 0, 4);

setBackGroundImage();

document.querySelectorAll('.divSlide').forEach((el) => {
    el.addEventListener('click', (ev) => {
        setWide(ev.target.closest('.divSlide'))
        })
    });



