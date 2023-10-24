import SceneManager from "../scene/scene-manager.js";
import { clear } from "./panel.js";

function Input() {
    let _key = ''
    const keyDown = (e) => {
        // debugger
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

// const Input = {
//     _isKeyDown: false,
//     _key: '',
//     keyDown(e) {
//         debugger
//         this._isKeyDown = true
//         this._key = e.key.toLowerCase()
//     },
//     getKeyDown: () => {
//         // debugger
//         let a = this
//         // return _key
//     },
//     clearKey: () => {
//         _key = ''
//     }
// }

window.addEventListener('keydown', ipt.keyDown)
Object.prototype.Input = ipt
// window.Input = Input
// 定义 Engine（引擎）类
class Engine {
    sceneManager

    constructor() {
        this.sceneManager = new SceneManager()
        this.test = () => {
            this.update()
            this.render()
            ipt.clearKey()
            window.requestAnimationFrame(this.test)
        }
    }

    update() {
        this.sceneManager.update();
    }

    render() {
        clear()
        this.sceneManager.render();
    }
}
export default Engine