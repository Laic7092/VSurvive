import Scene from "./scene.js";
import IUpdatable from "../interface/IUpdatable.js";
// 定义 SceneManager (场景管理器) 类
class SceneManager extends IUpdatable{
    scenes
    activeScene

    constructor() {
        super()
        this.scenes = new Map();
        this.activeScene = null;
    }

    update() {
        const activeScene = this.activeScene
        if (activeScene) {
            activeScene.gameobjectManager.update()
        }
    }

    render() {
        const activeScene = this.activeScene
        if (activeScene) {
            activeScene.gameobjectManager.render()
        }
    }

    addScene(name, scene = new Scene(name)) {
        this.scenes.set(name, scene)
        this.activeScene = scene
    }

    setActiveScene(name) {
        const scene = this.scenes.get(name)
        if (scene) {
            this.activeScene = scene
        }
    }
}

export default SceneManager
