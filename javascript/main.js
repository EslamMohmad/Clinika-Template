const hidIcon = document.querySelector(".hid-icon");
const asideSection = document.querySelector(".aside-section")
hidIcon.onclick = function () {
    const overlay = document.querySelector("." + this.getAttribute("data-overlay"))
    overlay.classList.toggle("active");
    this.classList.toggle("active");

    //fadeEffect(effect, element, speed) function
    fadeEffect("fadeIn", ".overlay", 50)

    const asideWidth =  getStyleVal("aside-section", "width");
    const wave =  getStyleVal("aside-section .wave", "width");
    const result = (asideWidth + wave).toString() + "px";

    const headerTxt = document.querySelector("header .txt");

    if (!asideSection.classList.contains("active")) {
        asideSection.classList.add("active")
        asideSection.style.transform = "translateX(0px)";
        //fadeEffect(effect, element, speed) function
        fadeEffect("fadeIn", ".overlay", 50)
        headerTxt.style.zIndex = 0;
    } else {
        asideSection.classList.remove("active")
        asideSection.style.transform = "translateX(" + result + ")";
        //fadeEffect(effect, element, speed) function
        fadeEffect("fadeOut", ".overlay", 50);
        headerTxt.style.position = "relative";
        headerTxt.style.zIndex = 1;
    }
}

//value of style
function getStyleVal(ele, style) {
    const Reg = new RegExp(/px/g);
    const element = document.querySelector("." + ele);
    const myStyle = window.getComputedStyle(element).getPropertyValue(style);
    return Number(myStyle.replace(Reg,""));
}

const asideWidth =  getStyleVal("aside-section", "width");
const wave =  getStyleVal("aside-section .wave", "width");
const result = (asideWidth + wave).toString() + "px";
document.querySelector(".aside-section").style.transform = "translateX(" + result + ")";

//close aside section and overlay
const overlay = document.querySelector("header .overlay");
overlay.onclick = function () {
    this.classList.remove("active");
    //fadeEffect(effect, element, speed) function
    fadeEffect("fadeOut", ".overlay", 50)
    asideSection.style.transform = "translateX(" + result + ")";
    asideSection.classList.remove("active")
    hidIcon.classList.remove("active")
}

//when scrolling 
window.onscroll = function () {
    let scrollTop = this.scrollY;
    const navSection = document.querySelector("header nav");
    const imgScr = document.querySelector("header nav .icon img");
    if (scrollTop >= 100) {
        navSection.classList.add("active")
        imgScr.src = "images/header/theme_clinika_logo_dark.png";
    } else {
        navSection.classList.remove("active");
        imgScr.src = "images/header/theme_clinika_logo.png";
    }
}

//fadeEffect(effect, element, speed) function
function fadeEffect(effect, element, speed) {
    const targetElement = document.querySelector(element);
    const style = window.getComputedStyle(targetElement).getPropertyValue("opacity");
    effect == "fadeIn" ? fadeIn() : fadeOut()
    let opacityVal = Number(style);
    //fadeIn
    function fadeIn() {
        const In = setInterval(_ => {
            if (opacityVal <= 1) {
                targetElement.style.display = "block";
                targetElement.style.opacity = opacityVal;
                opacityVal = opacityVal + 0.1;
            } else {
                clearInterval(In)
            }
        },speed)
    }

    //fadeOut
    function fadeOut() {
        const Out = setInterval(_ => {
            if (opacityVal >= 0) {
                targetElement.style.opacity = opacityVal;
                opacityVal = opacityVal - 0.1;
            } else {
                targetElement.style.opacity = 0;
                targetElement.style.display = "none";
                clearInterval(Out)
            }
        },speed)
    }
}


//get data to (about mid section)
import "./data/data.js";

//click on about bot icons section
const flexIcons = document.querySelectorAll(".about .bot .flexIcons .icon");
const aboutBotBox = document.querySelectorAll(".about .bot .flexBox .bord");
flexIcons.forEach((ele,ind,arr) => {
    ele.onclick = function () {
        for (let i = 0; i < arr.length; i++) {
            arr[i].classList.remove("active");
            aboutBotBox[i].classList.remove("active")
        }
        ele.classList.add("active")

        let eleData = ele.getAttribute("data-article");
        let article = document.querySelector(".about .bot .flexBox ." + eleData);
        
        article.classList.add("active")
    }
})

//when width is less than 576px add slick.js class
import "./slider/slider.js"