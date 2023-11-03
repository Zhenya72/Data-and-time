
const output=document.getElementById("output")
const fullBtn=document.getElementById("full")
const dataBtn=document.getElementById("data")
const timeBtn=document.getElementById("time")
const now = new Date()

fullBtn.onclick=function(){
    bindMode("full")
}
dataBtn.onclick=function(){
    bindMode("data")
}
timeBtn.onclick=function(){
    bindMode("time")
}

let mode = "time"
function bindMode(nameMode){
    mode=nameMode
    update()
}

setInterval(() => {
    update()
}, 1000);

function update(){
    output.textContent=format(mode)
}

function format(formatMode){
    const now = new Date()
    switch (formatMode){
        case "time": return now.toLocaleTimeString()
        case "data": return now.toLocaleDateString()
        case "full": return now.toLocaleDateString()+" "+now.toLocaleTimeString()
        default: return now.toLocaleTimeString()
    }
}
