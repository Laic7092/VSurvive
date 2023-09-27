// 定义 Component（组件）类
class Component {
    name
    active
    constructor() {
    }

    update() {
        console.log('This is the base Component class.');
    }
}

class ComponentManager {
    components
    constructor() {
        this.components = {}
    }

    addComponent(name, component) {
        this.components[name] = component
    }

    removeComponent(name) {
        delete this.components[name]
    }

    activateComponent(name) {
        this.components[name].active = true
    }

    deActiveComponent(name) {
        this.components[name].active = false
    }
}

export default Component