import ComponentManager from "../component/compopnent-manager.js";

// 定义 GameObject（游戏对象）类
class GameObject {
    name
    activate
    componentManager
    constructor(name) {
        this.name = name
        this.activate = true
        this.componentManager = new ComponentManager()
    }
}

class GameobjectManager {
    gameobjects
    
    constructor() {
        this.gameobjects = new Map()
    }

    addGameobject(name, gameobject = new GameObject(name)) {
        this.gameobjects.set(name, gameobject)
    }

    removeGameobject(name) {
        this.gameobjects.delete(name)
    }

//     activateGameobject(name) {
//         this.Gameobjects[name].active = true
//     }

//     deActivateComponent(name) {
//         this.components[name].active = false
//     }
}

export {
    GameObject,
    GameobjectManager
}