import { GameobjectManager } from "../gameobject/gameobject-manager.js";
// 定义 Scene（场景）类
class Scene {
    name
    gameobjectManager
    
    constructor(name) {
        this.name = name;
        this.gameobjectManager = new GameobjectManager()
    }
}

// 定义 SceneManager (场景管理器) 类
class SceneManager {
    scenes
    activeScene

    constructor() {
        this.scenes = new Map;
        this.activeScene = null;
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

export {
    // Scene,
    SceneManager
}