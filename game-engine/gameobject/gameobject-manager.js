import GameObject from "./gameobject.js"
import IUpdatable from "../interface/IUpdatable.js";

class GameobjectManager extends IUpdatable{
    gameobjects

    constructor() {
        super()
        this.gameobjects = new Map()
    }

    addGameobject(name, gameobject = new GameObject(name)) {
        this.gameobjects.set(name, gameobject)
    }

    removeGameobject(name) {
        this.gameobjects.delete(name)
    }

    update() {
        this.gameobjects.forEach(gameobject => {
            gameobject.componentManager.update()
        })
    }

//     activateGameobject(name) {
//         this.Gameobjects[name].active = true
//     }

//     deActivateComponent(name) {
//         this.components[name].active = false
//     }
}

export default GameobjectManager