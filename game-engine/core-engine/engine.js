import SceneManager from "../scene/scene-manager.js";
// 定义 Engine（引擎）类
class Engine {
    sceneManager

    constructor() {
        this.sceneManager = new SceneManager()
    }

    update() {
        const activeScene = this.sceneManager.activeScene
        if (activeScene) {
            this.sceneManager.update();
        }
    }
}

export default Engine