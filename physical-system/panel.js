import { CANVAS_HEIGHT,CANVAS_WIDTH } from "./config.js";

window.addEventListener('pagehide', () => {
    // debugger
})

window.addEventListener('pageshow', () => {
    // debugger
})

const canvas = document.createElement('canvas')
canvas.height = CANVAS_HEIGHT
canvas.width = CANVAS_WIDTH
const ctx = canvas.transferControlToOffscreen().getContext('2d')
// const ctx = canvas.getContext('2d')

document.body.appendChild(canvas)

// 清除画布
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export {
    ctx,
    clearCanvas
}

