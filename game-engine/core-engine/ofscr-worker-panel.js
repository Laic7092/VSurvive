let worker = null
const ELes = []

window.addEventListener('load', () => {
    let a = document.querySelector('#gameCanvas')
    let offscreen = a.transferControlToOffscreen()
    worker = new Worker("./core-engine/worker.js");
    worker.postMessage({ canvas: offscreen }, [offscreen]);
})

function trueRender() {
    worker.postMessage({ ELes })
    ELes.length = 0
}

export {
    ELes,
    trueRender
}