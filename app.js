const burger = document.querySelector(".burger");
const nav = document.querySelector("#nav-links");
const navLinks = document.querySelectorAll(".nav-links li");
const navbar = document.querySelector(".nav");


burger.addEventListener('click', () => {

    console.log(navbar.offsetWidth);    

    if(nav.style.transform == "translateX(100%)"){
        nav.style.transform = "translateX(0%)"
        // nav.style.setProperty("transform", "translateX(0%)");
        navbar.style.zIndex = "100";
        navbar.style.height = "130rem";
    } else {
        nav.style.transform = "translateX(100%)"
        // nav.style.setProperty("transform", "translateX(100%)");
        navbar.style.zIndex = "0";
    }

});

function myfunction(x) {
    console.log("working");
    if (x.matches) {
        nav.style.setProperty("transform", "translateX(0%)");
    }
}

let x = window.matchMedia("(min-width: 950px)")
myfunction(x);
x.addListener(myfunction);