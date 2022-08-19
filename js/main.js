document.querySelector(".divhome").remove()
apiInfo.innerHTML = "The information has been obtained by <mark>XML API</mark> & Written by <mark>DOM</mark>"
var openDiv = document.createElement("div")
openDiv.setAttribute("class","divhome")
document.body.appendChild(openDiv)

var myRequest = new XMLHttpRequest();
myRequest.open("get","data/data.json")
myRequest.send();

myRequest.onreadystatechange = function () {
    if(myRequest.readyState === 4 && myRequest.status === 200) {
        let myObj = JSON.parse(myRequest.response)
        var myHome = document.querySelector(".divhome")
        myHome.classList.add("row")
        myHome.style.cssText = "padding:20px; display:flex; flex-wrap:wrap; justify-content:center"
        for (let i = 0; i < myObj.length; i++) {
            let element = myObj[i];

            let myProduct = document.createElement("div");
            let proImg = document.createElement("img");
            let proName = document.createElement("h3");
            let proHrLine = document.createElement("hr");
            let proPrice = document.createElement("p");
            let proColor = document.createElement("p");
            let proModel = document.createElement("p");

            let proNameText = document.createTextNode(element.name)
            let proPriceText = document.createTextNode("Price: " + element.price)
            let proColorText = document.createTextNode("Color: " + element.color)
            let proModelText = document.createTextNode("Model: " + element.model)

            proImg.setAttribute("src",element.src)
            proName.appendChild(proNameText);
            proPrice.appendChild(proPriceText);
            proColor.appendChild(proColorText);
            proModel.appendChild(proModelText);

            myProduct.appendChild(proImg);
            myProduct.appendChild(proName);
            myProduct.appendChild(proHrLine);
            myProduct.appendChild(proPrice);
            myProduct.appendChild(proColor);
            myProduct.appendChild(proModel);
            myHome.appendChild(myProduct);

            proName.style.color = element.color
            proPrice.style.color = element.color
            proColor.style.color = element.color
            proModel.style.color = element.color
            proHrLine.style.cssText = "margin-left:auto;margin-right:auto;width:80%; border:2px dashed"
            proHrLine.style.color = element.color
            proName.style.marginTop = "5px"
            proImg.style.cssText = "max-width:100%"
            myProduct.style.cssText = "max-width:275px; text-align:center; background-color:white; font-weight:bold; margin:25px; padding:10px; border-radius:5px; box-shadow:1px 1px 10px 2px #888"
        }
    }
}