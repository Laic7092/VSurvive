import SceneManager from "../scene/scene-manager.js";
import { trueRender } from "./panel.js";
// import { trueRender } from "./ofscr-panel.js";
// import { trueRender } from "./ofscr-worker-panel.js";
// import { trueRender } from "./async-ofscr-worker-panel.js";

let evtNum = 0
let loopNum = 0
function uInput() {
    let _key = ''
    const keyDown = (e) => {
        // console.log(++evtNum,'evt')
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
window['deltaTime'] = 0
let lastTm = 0
// 定义 Engine（引擎）类
class Engine {
    sceneManager

    constructor() {
        this.sceneManager = new SceneManager()
        this.gameLoop = (curTm) => {
            // if (++loopNum%1000 === 0)
                // console.log(++loopNum,'loop')
            deltaTime = (curTm - lastTm) / 1000 // 转换为秒
            // console.log(deltaTime);
            this.update()
            this.render()
            trueRender()
            ipt.clearKey()

            lastTm = curTm
            window.requestAnimationFrame(this.gameLoop)
        }
    }

    update() {
        this.sceneManager.update();
    }

    render() {
        this.sceneManager.render();
    }
}
export default Engine