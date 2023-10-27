let ctx = null
const ELes = []
const r = 20
const cl = Math.PI * 2
window.addEventListener('load', () => {
    let a = document.querySelector('#gameCanvas')
    ctx = a.getContext("2d")
})

// 创建 offscreen canvas
const offscreenCanvas = new OffscreenCanvas(800, 600);
// 获取 2D 上下文
const offscreenContext = offscreenCanvas.getContext('2d');
offscreenContext.strokeStyle = 'red'

function clear() {
    ctx.clearRect(0, 0, 800, 600)
    offscreenContext.clearRect(0, 0, 800, 600)
}

function trueRender() {
    // return
    offscreenContext.beginPath()
    // ctx.beginPath()
    ELes.forEach(item => {
        const { x, y } = item
        // ctx.moveTo(x + r, y)
        // ctx.arc(x, y, r, 0, cl)
        offscreenContext.moveTo(x + r, y)
        offscreenContext.arc(x, y, r, 0, cl)
    })
    ctx.stroke()
    offscreenContext.stroke()
    ELes.length = 0
    ctx.drawImage(offscreenCanvas, 0, 0);
}

function name(params) {

}

export {
    clear,
    ctx,
    ELes,
    trueRender
}