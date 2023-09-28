import Transform from "./transform.js"
import IUpdatable from "../interface/IUpdatable.js"

class ComponentManager extends IUpdatable{
    components
    constructor() {
        super()
        this.components = new Map()
        this.addComponent('Transform', new Transform())
    }

    update() {
        this.components.forEach(component => {
            component.update()
        })
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
