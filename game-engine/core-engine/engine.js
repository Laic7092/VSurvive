import SceneManager from "../scene/scene-manager.js";
import { clear,trueRender } from "./panel.js";

function Input() {
    let _key = ''
    const keyDown = (e) => {
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

const ipt = new Input()

window.addEventListener('keydown', ipt.keyDown)
Object.prototype.Input = ipt
// window.Input = Input
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
        clear()
        this.sceneManager.render();
        trueRender()
    }
}
export default Engine