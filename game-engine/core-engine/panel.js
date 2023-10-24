let ctx = null
window.addEventListener('load', () => {
    let a = document.querySelector('#gameCanvas')
    ctx = a.getContext("2d")
})

function clear() {
    ctx.clearRect(0, 0, 3200, 1800)
}

export {
    clear,
    ctx
}