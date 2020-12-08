//Variables
const burger = document.querySelector(".burger");
const nav = document.querySelector("#nav-links");
const navLinks = document.querySelectorAll("#nav-links li");
const navbar = document.querySelector(".nav");
const html = document.getElementsByTagName("html");
const body = document.querySelector(".body");

//EventListeners
burger.addEventListener('click', () => {

    if(nav.style.transform == "translateX(100%)"){
        // nav.style.transform = "translateX(0%)"
        nav.style.setProperty("transform", "translateX(0%)");
        navbar.style.zIndex = "100";
        body.style.display = "none";
        
    } else { 
        nav.style.setProperty("transform", "translateX(100%)");
        // nav.style.transform = "translateX(100%)"
        navbar.style.zIndex = "0";
        body.style.display = "";
        
    }

});

navLinks.forEach(item => {

    item.addEventListener('click', ()=>{

        item.classList.remove("active");


    });


    item.addEventListener('click', ()=>{

        console.log(item.classList.contains("active"));
        // if()

        item.classList.toggle("active");


    });
    

});

//Functions
function myfunction(x) {
    if (x.matches) {
        nav.style.setProperty("transform", "translateX(0%)");
    }
};

let x = window.matchMedia("(min-width: 950px)")
myfunction(x);
x.addListener(myfunction);