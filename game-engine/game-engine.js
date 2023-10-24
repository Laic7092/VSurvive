import Engine from "./core-engine/engine.js"
console.log("Hello World!")

const engine = new Engine()
engine.sceneManager.addScene('testScene')

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
a.addRenderer()
a.addScript()
function addPlayer() {
    let obj = a.addGameobject((999,999), {parent: {},position: {x:40,y:40}})
    debugger
    obj.componentManager.addComponent('Player')
    obj.componentManager.addComponent('Renderer')
}
addPlayer()
console.log(engine)
window.onload = () => {
    window.requestAnimationFrame(engine.test)
}
