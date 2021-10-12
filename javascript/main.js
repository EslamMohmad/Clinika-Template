const hidIcon = document.querySelector(".hid-icon");
hidIcon.onclick = function () {
    const overlay = document.querySelector("." + this.getAttribute("data-overlay"))
    overlay.classList.toggle("active");
    this.classList.toggle("active");
    const aside = document.querySelector(".aside-section");

    const asideSection =  getStyleVal("aside-section", "width");
    const wave =  getStyleVal("aside-section .wave", "width");
    const result = (asideSection + wave).toString() + "px";


    if (!aside.classList.contains("active")) {
        aside.classList.add("active")
        aside.style.transform = "translateX(0px)"
    } else {
        aside.classList.remove("active")
        aside.style.transform = "translateX(" + result + ")";
    }
}

//value style
function getStyleVal(ele, style) {
    const Reg = new RegExp(/px/g);
    const element = document.querySelector("." + ele);
    const myStyle = window.getComputedStyle(element).getPropertyValue(style);
    return Number(myStyle.replace(Reg,""));
}

const asideSection =  getStyleVal("aside-section", "width");
const wave =  getStyleVal("aside-section .wave", "width");
const result = (asideSection + wave).toString() + "px";
document.querySelector(".aside-section").style.transform = "translateX(" + result + ")"
