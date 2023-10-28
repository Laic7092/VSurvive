let ctx = null
const ELes = []
const r = 20
const cl = Math.PI * 2
window.addEventListener('load', () => {
    let canvas = document.querySelector('#gameCanvas')
    const offscreenCanvas = canvas.transferControlToOffscreen();

    ctx = offscreenCanvas.getContext("2d")
    ctx.strokeStyle = 'red'
})


let xl = 400
let xr = 400
let yt = 300
let yb = 300

function clear(xl, yt, xr, yb) {
    ctx.clearRect(xl - r, yt - r, xr + r, yb + r)
    xl = 400
    xr = 400
    yt = 300
    yb = 300
}

function trueRender() {
    clear(xl, yt, xr, yb)
    ctx.beginPath()
    const set = new Set()
    ELes.forEach(item => {
        const { x, y } = item
        if (x < xl) {
            xl = x
        } else if (x > xr) {
            xr = x
        }
        if (y < yt) {
            yt = y
        } else if (y > yb) {
            yb = y
        }
        const x1 = x.toFixed(1)
        const y1 = y.toFixed(1)
        const key = `${x1}-${y1}`
        if (set.has(key)) return
        set.add(key)
        ctx.moveTo(x + r, y)
        ctx.arc(x, y, r, 0, cl)
    })
    ctx.stroke()
    ELes.length = 0
}

export {
    ELes,
    trueRender
}