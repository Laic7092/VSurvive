import ComponentManager from "../component-manager/compopnent-manager.js";

// 定义 GameObject（游戏对象）类
class GameObject {
    name
    activate
    componentManager

    constructor(name, param) {
        this.name = name
        this.activate = true
        this.componentManager = new ComponentManager(this, param)
    }
}

export default GameObject