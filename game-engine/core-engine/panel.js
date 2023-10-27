let ctx = null
const ELes = []
const r = 20
const cl = Math.PI * 2
window.addEventListener('load', () => {
    let a = document.querySelector('#gameCanvas')
    ctx = a.getContext("2d")
    ctx.strokeStyle = 'red'
})

function clear() {
    ctx.clearRect(0, 0, 800, 600)
}

function trueRender() {
    clear()
    ctx.beginPath()
    ELes.forEach(item => {
        const { x, y } = item
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