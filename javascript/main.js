const hidIcon = document.querySelector(".hid-icon");
const asideSection = document.querySelector(".aside-section")
hidIcon.onclick = function () {
    const overlay = document.querySelector("." + this.getAttribute("data-overlay"))
    overlay.classList.toggle("active");
    this.classList.toggle("active");

    const asideWidth =  getStyleVal("aside-section", "width");
    const wave =  getStyleVal("aside-section .wave", "width");
    const result = (asideWidth + wave).toString() + "px";


    if (!asideSection.classList.contains("active")) {
        asideSection.classList.add("active")
        asideSection.style.transform = "translateX(0px)"
    } else {
        asideSection.classList.remove("active")
        asideSection.style.transform = "translateX(" + result + ")";
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
    asideSection.style.transform = "translateX(" + result + ")";
    asideSection.classList.remove("active")
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