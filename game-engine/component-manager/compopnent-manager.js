import Transform from "./transform.js"
import Renderer from "./renderer.js"

import IUpdatable from "../interface/IUpdatable.js"

import Player from "../diy-script/player.js"
import Monster from "../diy-script/monster.js"
const componentConstructors = new Map()

componentConstructors.set('Transform', Transform)
componentConstructors.set('Renderer', Renderer)

componentConstructors.set('Player', Player)
componentConstructors.set('Monster', Monster)

class ComponentManager extends IUpdatable{
    components
    gameobject
    transform

    constructor(gameobject, param) {
        super()
        this.components = new Map()
        this.gameobject = gameobject
        this.transform = this.addComponent('Transform', param)
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

    addComponent(name, param, componentManager = this) {
        const componentConstructor = componentConstructors.get(name)
        if (componentConstructor) {
            const component = new componentConstructor(componentManager, param)
            this.components.set(name, component)
            return component
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
