// 定义 GameObject（游戏对象）类
class GameObject {
    constructor(name) {
        this.name = name;
        this.components = [];
    }

    addComponent(component) {
        this.components.push(component);
    }

    update() {
        for (let i = 0; i < this.components.length; i++) {
            this.components[i].update();
        }
    }
}