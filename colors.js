console.log("COLORS.JS CHECK BEGIN")
console.log(top.colorElement)
console.log("Colors...")
console.log(document)
console.log("Windows93...")
console.log(top.document)
console.log("COLORS.JS CHECK END")

document.getElementById("confirm").addEventListener("click", ()=>{
    top.colorElement.innerHTML = ""
    
    if(document.getElementById(bg).checked) {
        top.colorElement.innerHTML = top.colorElement.innerHTML + "#s42_background{background:linear-gradient(135deg,"+document.getElementById("primary").value+","+document.getElementById("secondary").value+")}"
    }
    
    if(document.getElementById(title).checked) {
        top.colorElement.innerHTML = top.colorElement.innerHTML + ".ui_window__head,.ui_window--active .ui_window__head{background:linear-gradient(135deg,"+document.getElementById("primary").value+","+document.getElementById("secondary").value+")}"
    }

    top.document.head.appendChild(colorElement)
})