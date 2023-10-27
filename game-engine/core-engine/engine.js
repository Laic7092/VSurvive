import SceneManager from "../scene/scene-manager.js";
// import { trueRender } from "./panel1.js";
// import { trueRender } from "./panel.js";
// import { trueRender } from "./ofscr-panel.js";
import { trueRender } from "./ofscr-worker-panel.js";

function uInput() {
    let _key = ''
    const keyDown = (e) => {
        e.preventDefault()
        _key = e.key.toLowerCase()
    }

    const getKeyDown = () => _key

    const clearKey = () => {
        _key = ''
    }
    return {
        keyDown,
        getKeyDown,
        clearKey
    }
}

const ipt = new uInput()

window.addEventListener('keydown', ipt.keyDown)
window['Input'] = ipt
// 定义 Engine（引擎）类
class Engine {
    sceneManager

    constructor() {
        this.sceneManager = new SceneManager()
        this.gameLoop = () => {
            this.update()
            this.render()
            ipt.clearKey()
            window.requestAnimationFrame(this.gameLoop)
        }
    }

    update() {
        this.sceneManager.update();
    }

    render() {
        this.sceneManager.render();
        trueRender()
    }
}
export default Engine