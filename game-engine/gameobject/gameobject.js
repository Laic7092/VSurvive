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

export default GameObject