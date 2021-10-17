                // menu burger first-page

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

                // slider three-page     
let offset = 0;
let widthDevice = 0;
                
function showDevice(){
    if (window.innerWidth < 894) {
        widthDevice = 375;
    }
    else if (window.innerWidth >= 894 == window.innerWidth < 1280) {
        widthDevice = 894;
    }
    else if (window.innerWidth >= 1280) {
        widthDevice = 1280;
    }
}

const sliderLine = document.querySelector('.slider-line');

document.querySelector('.right').addEventListener('click', function () {
    showDevice();
    offset = offset + widthDevice;
    if (offset > widthDevice * 4) {
        offset = 0;
    }
    sliderLine.style.left = - offset + 'px';
})

document.querySelector('.left').addEventListener('click', function () {
    showDevice();
    offset = offset - widthDevice;
    if (offset < 0) {
        offset = widthDevice * 4;
    }
    sliderLine.style.left = - offset + 'px';
})

document.querySelector('.wood-texture').addEventListener('click', function () {
    sliderLine.style.left = 0;
})
document.querySelector('.glass-texture').addEventListener('click', function () {
    sliderLine.style.left = -widthDevice + 'px';
})
document.querySelector('.linoleum-texture').addEventListener('click', function () {
    sliderLine.style.left = -(widthDevice*2) + 'px';
})
document.querySelector('.cloth-texture').addEventListener('click', function () {
    sliderLine.style.left = -(widthDevice*3) + 'px';
})
document.querySelector('.marble-texture').addEventListener('click', function () {
    sliderLine.style.left = -(widthDevice*4)+ 'px';
})

                        // slider five-page
let widhtDeviceTwo = 0;

function showDeviceTwo(){
    if (window.innerWidth < 894) {
        widthDeviceTwo = 330;
    }
    else {
        widthDeviceTwo = 497;
    }
}

showDeviceTwo();

const sliderMouse = document.querySelector('.slider-line__mouse');

document.querySelector('.one').addEventListener('click', function () {
    sliderMouse.style.left = 0;
})
document.querySelector('.two').addEventListener('click', function () {
    sliderMouse.style.left = - widthDeviceTwo + 'px';
})
document.querySelector('.three').addEventListener('click', function () {
    sliderMouse.style.left = - (widthDeviceTwo*2) + 'px';
})
document.querySelector('.four').addEventListener('click', function () {
    sliderMouse.style.left = - (widthDeviceTwo*3) + 'px';
})
document.querySelector('.five').addEventListener('click', function () {
    sliderMouse.style.left = - (widthDeviceTwo*4) + 'px';
})
document.querySelector('.six').addEventListener('click', function () {
    sliderMouse.style.left = - (widthDeviceTwo*5) + 'px';
})


