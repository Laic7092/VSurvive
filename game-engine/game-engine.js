import Engine from "./core-engine/engine.js"

const engine = new Engine()
engine.sceneManager.addScene('mainScene')

let a = engine.sceneManager.activeScene
function addPlayer() {
    let obj = a.addGameobject('player', a, { parent: {}, position: { x: 1600, y: 900 } })
    obj.addComponent(obj.gameobject, obj.transform, 'Player')
    obj.addComponent(obj.gameobject, obj.transform, 'Renderer')
}
addPlayer()
const p = 10
const q = 1
let cnt = 0
function addMonster(params) {
    for (let i = 0; i < 320 * q; i++) {
        for (let j = 0; j < 180 * q; j++) {
            let parent = {}
            let position = { x: i * p, y: j * p }
            let param = {
                parent,
                position
            }
            const gameobject = a.addGameobject(cnt++, a, param)
            gameobject.addComponent(gameobject, gameobject.transform, 'Renderer', { color: '#000' })
            gameobject.addComponent(gameobject, gameobject.transform, 'Monster', {})

        }

    }
}
addMonster()
console.log(engine)
window.onload = () => {
    window.requestAnimationFrame(engine.gameLoop)
}
