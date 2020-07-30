let topdual = document.createElement("footer")
topdual.classList = ["ui_combo_one skin_base skin_outset_deep topdual"]
document.getElementById("nofx").appendChild(topdual)

let dualstyle = document.createElement("style")
dualstyle.innerHTML = "#s42_start {position: fixed;top: 4px;z-index: 1;}#s42_notif {position: fixed;top: 4px;right: 4px;height: 22px;z-index: 1;}#ui_menu_3 {transform: translate(0,220px)}#nofx {padding-top: 30px;}.topdual {position: fixed;top: 0;height: 30px;width: 100%;}"
document.head.appendChild(dualstyle)