'use strict';

const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if(window.scrollY > headerHeight){
        header.classList.add("header--dark");
    } else {
        header.classList.remove("header--dark");
    }
});

const home = document.querySelector(".home_container");
const homeHeight = home.offsetHeight;
document.addEventListener("scroll", ()=>{
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

/*
const about = document.querySelector('#about');
const aboutHeight = about.getBoundingClientRect().height;
const aboutOffHeight = about.offsetHeight;
document.addEventListener("scroll", ()=>{
    if(window.scrollY > aboutHeight){
        about.style.opacity = 1 - window.scrollY / homeHeight;
    } else {
        about.style.opacity = 1 + window.scrollY / homeHeight;
    }

});
*/
