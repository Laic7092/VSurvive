import SceneManager from "../scene/scene-manager.js";
import { clear } from "./panel.js";
// 定义 Engine（引擎）类
class Engine {
    sceneManager

    constructor() {
        this.sceneManager = new SceneManager()
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