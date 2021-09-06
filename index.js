// меню бургер

const menuBurger = document.querySelector('.menu__burger');
const menuList = document.querySelector('.menu__list');

if(menuBurger){
    menuBurger.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        menuBurger.classList.toggle('_active');
        menuList.classList.toggle('_active');
    });
}

if (menuBurger.classList.contains('_active')){
    document.body.classList.remove('_lock');
    menuBurger.classList.remove('_active');
    enuList.classList.remove('_active');
}

// слайдер

let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.right').addEventListener('click', function () {
    offset = offset + 375;
    if (offset > 1500) {
        offset = 0;
    }
    sliderLine.style.left = - offset + 'px';
})

document.querySelector('.left').addEventListener('click', function () {
    offset = offset - 375;
    if (offset < 0) {
        offset = 1500;
    }
    sliderLine.style.left = - offset + 'px';
})

document.querySelector('.wood-texture').addEventListener('click', function () {
    sliderLine.style.left = 0;
})
document.querySelector('.glass-texture').addEventListener('click', function () {
    sliderLine.style.left = -375 + 'px';
})
document.querySelector('.linoleum-texture').addEventListener('click', function () {
    sliderLine.style.left = -750 + 'px';
})
document.querySelector('.cloth-texture').addEventListener('click', function () {
    sliderLine.style.left = -1125 + 'px';
})
document.querySelector('.marble-texture').addEventListener('click', function () {
    sliderLine.style.left = -1500+ 'px';
})

