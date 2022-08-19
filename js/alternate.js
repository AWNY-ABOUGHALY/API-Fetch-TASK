document.querySelector(".divhome").remove()
apiInfo.innerHTML = `The information has been obtained by <mark>Fetch API</mark> & Written by <mark>BackTick</mark>`
var openDiv = document.createElement("div")
openDiv.setAttribute("class","divhome")
document.body.appendChild(openDiv)

var myHome = document.querySelector(`.divhome`)
myHome.classList.add("row")
document.body.appendChild(myHome)
// document.body.innerHTML += `<div class="divhome" style="border: 2px solid #000;padding:20px;display:flex;flex-wrap:wrap;justify-content: center"></div>`

myHome.style.cssText = `padding:20px; display:flex; flex-wrap:wrap; justify-content:center`

fetch(`data/data.json`)
.then( (res) => res.json())
.then( (data) => {
    data.forEach(e => {
        myHome.innerHTML += `
        <div style="max-width:275px; text-align:center; background-color:white; color:white; font-weight:bold; margin:25px; padding:10px; border-radius:5px; box-shadow:1px 1px 10px 2px #888">
           <img src="${e.src}" style="max-width:100%;">
           <h3 style="margin-top:5px;color:${e.color}">${e.name}</h3>
           <hr style="margin-left:auto;margin-right:auto;width:80%; border:2px dashed ${e.color}">
           <p style="color:${e.color}">Price: ${e.price}</p>
           <p style="color:${e.color}">Color: ${e.color}</p>
           <p style="color:${e.color}">Model: ${e.model}</p>
        </div>`;
    });
})

