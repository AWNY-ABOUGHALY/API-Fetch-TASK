document.body.style = "display:flex;flex-direction:column;align-items:center; padding:20px"
let modeBtn = document.createElement("button")
document.body.appendChild(modeBtn)
modeBtn.innerHTML = "Show Items"
modeBtn.style.cssText = "width:125px; background-color:tomato; border-radius:50px; border-color:white; box-shadow:1px 1px 10px 2px red; color:white; padding:5px; font-wEight:500;"
let apiInfo = document.createElement("p")
document.body.appendChild(apiInfo)
apiInfo.innerHTML = ""
apiInfo.style.cssText = "margin-top:20px; padding:7px; text-align:center; color:tomato; font-weight:bold;"
var openDiv = document.createElement("div")
openDiv.setAttribute("class","divhome")
document.body.appendChild(openDiv)

modeBtn.addEventListener("click",()=>{
    let myScript = document.querySelector("#myscript")
    if(myScript.getAttribute("src") === "") {
        document.body.removeChild(myScript)
        let myJs = document.createElement("script")
        myJs.setAttribute("src","js/main.js")
        myJs.setAttribute("id","myscript")
        document.body.appendChild(myJs)
        modeBtn.innerHTML = "Fetch Method"
    } else if (myScript.getAttribute("src") !== "") {
        if(myScript.getAttribute("src") === "js/main.js") {
            document.body.removeChild(myScript)
            let myJs = document.createElement("script")
            myJs.setAttribute("src","js/alternate.js")
            myJs.setAttribute("id","myscript")
            modeBtn.innerHTML = "XML Method"
            document.body.appendChild(myJs)
        } else if (myScript.getAttribute("src") === "js/alternate.js") {
            document.body.removeChild(myScript)
            let myJs = document.createElement("script")
            myJs.setAttribute("src","js/main.js")
            myJs.setAttribute("id","myscript")
            document.body.appendChild(myJs)
            modeBtn.innerHTML = "Fetch Method"
        }
    }
})
