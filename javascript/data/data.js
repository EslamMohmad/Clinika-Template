function AboutMidSec() {
    const XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const aboutMidMidData = JSON.parse(this.responseText)["aboutTopMid"];
            const aboutMidMidSec = document.querySelector(".about .mid .flexBox");
            let contnet = "";
            for (let i = 0; i < aboutMidMidData.length; i++) {
                contnet += `
                    <div class="bord">
                        <img src=${aboutMidMidData[i]["icon"]} />
                        <h3 class="jost">${aboutMidMidData[i]["h3"]}</h3>
                        <p>${aboutMidMidData[i]["p"]}</p>
                    </div>
                ` 
            }
            aboutMidMidSec.innerHTML = contnet;
        }
    }

    XHR.open("GET","javascript/data/data.json");
    XHR.send()
}

export default AboutMidSec();