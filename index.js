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