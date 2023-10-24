import GameObject from "./gameobject.js"
import IUpdatable from "../interface/IUpdatable.js";

class GameobjectManager extends IUpdatable{
    gameobjects

    constructor() {
        super()
        this.gameobjects = new Map()
    }

    addRenderer() {
        this.gameobjects.forEach(gameobject => {
            gameobject.componentManager.addComponent('Renderer',{color: '#000'})
        })
    }

    addScript() {
        this.gameobjects.forEach(gameobject => {
            gameobject.componentManager.addComponent('Monster')
        })
    }

    addGameobject(name, param) {
        const gameobject = new GameObject(name, param)
        this.gameobjects.set(name, gameobject)
        return gameobject
    }

    removeGameobject(name) {
        this.gameobjects.delete(name)
    }

    update() {
        this.gameobjects.forEach(gameobject => {
            if (gameobject.activate) {
                gameobject.componentManager.update()
            }
        })
    }

    render() {
        this.gameobjects.forEach(gameobject => {
            if (gameobject.activate) {
                gameobject.componentManager.render()
            }
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