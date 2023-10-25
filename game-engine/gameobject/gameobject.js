import Transform from "../component-manager/transform.js"
import Renderer from "../component-manager/renderer.js"

import IUpdatable from "../interface/IUpdatable.js"

import Player from "../diy-script/player.js"
import Monster from "../diy-script/monster.js"
const componentConstructors = new Map()
const subjectComponents = new Set()
componentConstructors.set('Transform', Transform)
componentConstructors.set('Renderer', Renderer)

componentConstructors.set('Player', Player)
componentConstructors.set('Monster', Monster)
subjectComponents.add('Player')
subjectComponents.add('Monster')

// 定义 GameObject（游戏对象）类
class GameObject extends IUpdatable {
    name
    scene
    components
    scripts
    transform
    gameobject
    activate
    isSubject

    constructor(name, scene, param) {
        super()
        this.name = name
        this.scene = scene
        this.components = new Map()
        this.gameobject = this
        this.transform = this.addComponent(this.gameobject, this.transform, 'Transform', param)
        this.activate = true
        this.isSubject = false
    }

    update() {
        if (this.isSubject) {
            this.scripts.forEach(component => {
                component.update()
            })
        }
    }

    render() {
        const renderer = this.components.get('Renderer')
        if (renderer) {
            renderer.render()
        }
    }

    addComponent(gameobject, transform, name, param) {
        const componentConstructor = componentConstructors.get(name)
        if (componentConstructor) {
            const component = new componentConstructor(gameobject, transform, param)
            this.components.set(name, component)
            if (subjectComponents.has(name)) {
                this.scripts = this.scripts ? this.scripts : new Map()
                this.scripts.set(name, component)
                this.isSubject = true
            }
            return component
        }
    }

    removeComponent(name) {
        this.components.delete(name)
    }

    getComponent(name) {
        return this.components.get(name)
    }

}


export default GameObject