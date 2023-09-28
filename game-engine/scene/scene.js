import GameobjectManager from "../gameobject/gameobject-manager.js";
// 定义 Scene（场景）类
class Scene {
    name
    gameobjectManager

    constructor(name) {
        this.name = name;
        this.gameobjectManager = new GameobjectManager()
    }

    update() {

    }
}

export default Scene