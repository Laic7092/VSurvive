// 定义 Scene（场景）类
class Scene {
    constructor(name) {
        this.name = name;
        this.gameObjects = [];
    }

    addGameObject(gameObject) {
        this.gameObjects.push(gameObject);
    }

    update() {
        for (let i = 0; i < this.gameObjects.length; i++) {
            this.gameObjects[i].update();
        }
    }
}

// 定义 SceneManager (场景管理器) 类
class SceneManager {
    constructor() {
        this.scenes = {};
        this.activeScene = null;
    }

    addScene(name, scene) {
        this.scenes[name] = scene;
    }

    setActiveScene(name) {
        if (name in this.scenes) {
            this.activeScene = this.scenes[name];
        } else {
            console.error(`Scene "${name}" does not exist.`);
        }
    }
}