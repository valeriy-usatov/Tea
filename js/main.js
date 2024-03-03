// const menu=document.querySelector(".menu");
const menuBtn = document.querySelector(".menu__btn");
const menuClose = document.querySelector(".menu__close");
const menuList = document.querySelector(".menu__list");

menuBtn.addEventListener("click", (event) => {
  menuList.classList.toggle("menu__list--open");  
});



menuClose.addEventListener("click", (event) => {
  menuList.classList.remove("menu__list--open");

});

window.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
        menuList.classList.remove("menu__list--open");
    }
    
});

