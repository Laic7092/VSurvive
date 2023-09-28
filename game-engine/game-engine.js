import Engine from "./core-engine/engine.js"
console.log("Hello World!")

const engine = new Engine()
engine.sceneManager.addScene('testScene')

// debugger
let a = engine.sceneManager.activeScene.gameobjectManager
a.addGameobject('testObj')

let b = a.gameobjects.get('testObj')
// debugger

let c = b.componentManager.components.get('Transform')
// debugger

setInterval(() => {
    engine.update()
}, 1000);