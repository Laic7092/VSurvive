import Engine from "./core-engine/engine.js"

const engine = new Engine()
engine.sceneManager.addScene('mainScene')

let a = engine.sceneManager.activeScene
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 6; j++) {
        let parent = {}
        let position = {x: 100*i, y: 100*j}
        let param = {
            parent,
            position
        }
        a.addGameobject(`(${i},${j})`, a, param)
    }

}
a.addRenderer()
a.addScript()
function addPlayer() {
    let obj = a.addGameobject((999,999),a, {parent: {},position: {x:40,y:40}})
    obj.addComponent(obj.gameobject, obj.transform, 'Player')
    obj.addComponent(obj.gameobject, obj.transform, 'Renderer')
}
addPlayer()
console.log(engine)
window.onload = () => {
    window.requestAnimationFrame(engine.gameLoop)
}
