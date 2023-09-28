class GameobjectManager {
    gameobjects

    constructor() {
        this.gameobjects = new Map()
    }

    addGameobject(name, gameobject = new GameObject(name)) {
        this.gameobjects.set(name, gameobject)
    }

    removeGameobject(name) {
        this.gameobjects.delete(name)
    }

//     activateGameobject(name) {
//         this.Gameobjects[name].active = true
//     }

//     deActivateComponent(name) {
//         this.components[name].active = false
//     }
}

export default GameobjectManager