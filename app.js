const burger = document.querySelector(".burger");
const nav = document.querySelector("#nav-links");
const navLinks = document.querySelectorAll(".nav-links li");
const navbar = document.querySelector(".nav");


burger.addEventListener('click', () => {

    // console.log(navbar.style.z-index);

    if(nav.style.transform == "translateX(100%)"){
        nav.style.setProperty("transform", "translateX(0%)");
        navbar.style.zIndex = "100";
        navbar.style.height = "130rem";
    } else {
        nav.style.setProperty("transform", "translateX(100%)");
        navbar.style.zIndex = "0";
        navbar.style.height = "500px";
    }


    // nav.classList.toggle(".nav-active");

});


// nav -> z-index: 100;
// height: 110rem;