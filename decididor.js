

document.getElementById("button").onclick = function() {
    let x= Math.floor(Math.random()*2)+1
    if(x===1) {
        document.getElementById("h3").innerHTML = "DECIDE JUAQUIS :("
    }
    else{
        document.getElementById("h3").innerHTML = "DECIDE VALCHU >:)"
    }
}