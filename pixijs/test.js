import PIXI from './pixi.min.js'


const canvas = document.createElement('canvas')
const view = canvas.transferControlToOffscreen()

// Create the application helper and add its render target to the page
const app = new PIXI.Application({ view, background: 0x1099bb, resizeTo: window });
// debugger
document.body.appendChild(canvas);

// const container = new PIXI.Container()
// app.stage.addChild(container)

let obj = new PIXI.Graphics();
obj.beginFill(0xff0000);
obj.drawRect(0, 0, 200, 100);
obj.drawCircle(300, 100, 20)
setTimeout(() => {
  // obj.clear()
  app.stage.removeChildAt(0)
  console.log(app.stage)
}, 3000);
app.stage.addChild(obj);