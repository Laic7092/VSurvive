// console.log(self)
const r = 20
const cl = Math.PI * 2
let init = true
let canvas = null
let ctx = null
// const aa = new Worker('./core-engine/worker.js')
self.addEventListener('message', (evt) => {
    if (init) {
        init = false
        canvas = evt.data.canvas
        ctx = canvas.getContext("2d")
    } else {
        const ELes = evt.data.ELes
        clear()
        render(ELes)
    }
})

function clear() {
    ctx.clearRect(0, 0, 800, 600)
}

function render(ELes) {
    ctx.beginPath()
    ELes.forEach(item => {
        const { x, y } = item
        ctx.moveTo(x + r, y)
        ctx.arc(x, y, r, 0, cl)
    })
    ctx.stroke()
}
