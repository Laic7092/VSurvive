import Engine from "./core-engine/engine.js"
console.log("Hello World!")

const engine = new Engine()
engine.sceneManager.addScene('testScene')

// debugger
let a = engine.sceneManager.activeScene.gameobjectManager
for (let i = 0; i < 80; i++) {
    for (let j = 0; j < 60; j++) {
        let parent = {}
        let position = {x: 10*i, y: 10*j}
        let param = {
            parent,
            position
        }
        a.addGameobject(`test${i}${j}`, param)
    }

}
a.addGameobject('testObj', {})

let b = a.gameobjects.get('testObj')
// debugger

let c = b.componentManager.components.get('Transform')
// debugger

a.test()

setInterval(() => {
    engine.update()
    engine.render()
    // console.log(engine)
}, 1000);