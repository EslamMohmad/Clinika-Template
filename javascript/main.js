const hidIcon = document.querySelector(".hid-icon");
const asideSection = document.querySelector(".aside-section")
const aside = 
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