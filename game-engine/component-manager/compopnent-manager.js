import Transform from "./transform.js"
import Renderer from "./renderer.js"
import Script from "./script.js"

import IUpdatable from "../interface/IUpdatable.js"

const componentConstructors = new Map()
componentConstructors.set('Transform', Transform)
componentConstructors.set('Renderer', Renderer)
componentConstructors.set('Script', Script)

class ComponentManager extends IUpdatable{
    components

    constructor(param) {
        super()
        this.components = new Map()
        this.addComponent('Transform', param)
    }

    update() {
        this.components.forEach(component => {
            component.update()
        })
    }

    render() {
        const renderer = this.components.get('Renderer')
        if (renderer) {
            renderer.render()
        }
    }

    addComponent(name, param) {
        const componentConstructor = componentConstructors.get(name)
        if (componentConstructor) {
            this.components.set(name, new componentConstructor(param))
        }
    }

    removeComponent(name) {
        this.components.delete(name)
    }

    getComponent(name) {
        return this.components.get(name)
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
