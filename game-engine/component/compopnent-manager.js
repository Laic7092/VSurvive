import Transform from "./transform.js"

class ComponentManager {
    components
    constructor() {
        this.components = new Map()
        this.addComponent('Transform', new Transform())
    }

    addComponent(name, component) {
        this.components.set(name, component)
    }

    removeComponent(name) {
        this.components.delete(name)
    }

//     activateComponent(name) {
//         this.components[name].active = true
//     }

//     deActiveComponent(name) {
//         this.components[name].active = false
//     }
}

// import Transform from "./transform.js";

export default ComponentManager
