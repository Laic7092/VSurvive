const r = 20
const cl = Math.PI * 2
const ofskr = new OffscreenCanvas(800, 600)
const ctx = ofskr.getContext('2d')
self.addEventListener('message', (evt) => {
    clear()
    // debugger
    render(evt.data.ELes)
    const bitmap = ofskr.transferToImageBitmap()
    self.postMessage({bitmap})
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