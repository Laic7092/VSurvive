window.addEventListener('load', initPanel)

const width = 800
const height = 600
let ctx = null

function initPanel() {
    const panel = document.getElementById('panel')
    panel.setAttribute('width',width)
    panel.setAttribute('height',height)
    panel.classList.add('panel')
    if (panel.getContext) {
        ctx = panel.getContext("2d")
        drawBorder()
    } else {
        alert("不支持canvas")
    }
}

function drawBorder() {
    ctx.strokeRect(0, 0, width, height)
}