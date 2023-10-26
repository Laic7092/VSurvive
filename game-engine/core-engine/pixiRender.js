import PIXI from "../../pixijs/pixi.min.js";

const ELes = []

const canvas = document.createElement('canvas')
const view = canvas.transferControlToOffscreen()



const app = new PIXI.Application({ view, background: 0x1099bb, resizeTo: window })

const graphics = new PIXI.Graphics();
app.stage.addChild(graphics);
// app.ticker.add((delta) => {
//     debugger
// });

document.body.appendChild(canvas)

export {
    ELes,
    app,
    graphics
}