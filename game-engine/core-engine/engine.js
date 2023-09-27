import { SceneManager } from "../scene/scene-manager.js";
// 定义 Engine（引擎）类
class Engine {
    sceneManager

    constructor() {
        this.sceneManager = new SceneManager()
    }

    // update() {
    //     if (this.sceneManager.activeScene) {
    //         this.sceneManager.activeScene.update();
    //     }
    // }
}

export default Engine