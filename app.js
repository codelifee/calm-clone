const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");


burger.addEventListener('click', () => {
    console.log("hello");

    console.log(nav);
    console.log(nav.style);

    nav.style.transfrom = 'translateX(0px)';


});