let ctx = null
const ELes = []
const r = 20
const cl = Math.PI * 2

let xl = 400
let xr = 400
let yt = 300
let yb = 300

window.addEventListener('load', () => {
    let a = document.querySelector('#gameCanvas')
    ctx = a.getContext("2d")
    ctx.strokeStyle = 'red'
})

function clear(xl, yt, xr, yb) {
    ctx.clearRect(xl - r, yt - r, xr + r, yb + r)
    // console.log(arguments)
    xl = 0
    xr = 800
    yt = 0
    yb = 600
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