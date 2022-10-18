import "./css/index.css"

var ccBgColorFirst = document.querySelector(
  ".cc-bg svg > g g:nth-child(1) path"
)
var ccBgColorSecond = document.querySelector(
  ".cc-bg svg > g g:nth-child(2) path"
)

var ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")

function setCardColor(type) {
  const colors = {
    visa: ["#436D99", "#2D57F2"],
    mastercard: ["#DF6F29", "C69347"],
    default: ["black", "gray"],
  }

  ccBgColorFirst.setAttribute("fill", colors[type][0])
  ccBgColorSecond.setAttribute("fill", colors[type][1])

  ccLogo.setAttribute("src", "cc-" + type + ".svg")
}

setCardColor("visa")
