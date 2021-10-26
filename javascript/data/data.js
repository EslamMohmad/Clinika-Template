function AboutMidSec() {
    const XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const getData = (element, targetData) => {
                const myData = JSON.parse(this.responseText)[targetData]
                const targetSection = document.querySelector(element)
                let content = "";
                for (let i = 0; i < myData.length; i++) {
                    content += `
                        <div class="bord">
                            <img src=${myData[i]["img"]} />
                            <h3>${myData[i]["h3"]}</h3>
                            <p>${myData[i]["p"]}</p>
                        </div>
                    `
                }
                targetSection.innerHTML = content
            }
            getData(".about .mid .flexBox","aboutMid");
        }
    }

    XHR.open("GET","javascript/data/data.json");
    XHR.send()
}

export default AboutMidSec();