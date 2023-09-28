import Engine from "./core-engine/engine.js"
console.log("Hello World!")

const engine = new Engine()
engine.sceneManager.addScene('testScene')

// debugger
let a = engine.sceneManager.activeScene.gameobjectManager
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 6; j++) {
        let parent = {}
        let position = {x: 100*i, y: 100*j}
        let param = {
            parent,
            position
        }
        a.addGameobject(`(${i},${j})`, param)
    }

}
a.addGameobject('testObj', {})

let b = a.gameobjects.get('testObj')
// debugger

let c = b.componentManager.components.get('Transform')
// debugger

a.addRenderer()
a.addScript()
console.log(engine)
// setInterval(() => {
//     engine.update()
//     engine.render()

// }, 200);
window.requestAnimationFrame(engine.test)