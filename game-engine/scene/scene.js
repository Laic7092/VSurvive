import GameObject from "../gameobject/gameobject.js"
import IUpdatable from "../interface/IUpdatable.js";

// 定义 Scene（场景）类
class Scene extends IUpdatable {
    name
    gameobjects

    constructor(name) {
        super()
        this.gameobjects = new Map()
        this.name = name
    }

    addGameobject(name, scene, param) {
        const gameobject = new GameObject(name, scene, param)
        this.gameobjects.set(name, gameobject)
        return gameobject
    }

    removeGameobject(name) {
        this.gameobjects.delete(name)
    }

    update() {
        this.gameobjects.forEach(gameobject => {
            if (gameobject.activate) {
                gameobject.update()
            }
        })
    }

    render() {
        this.gameobjects.forEach(gameobject => {
            if (gameobject.activate) {
                gameobject.render()
            }
        })
    }

    /**
     * @description: 临时函数加渲染器的
     * @param {String}
     * @return: 数组
    */
    addRenderer() {
        this.gameobjects.forEach(gameobject => {
            gameobject.addComponent(gameobject, gameobject.transform, 'Renderer', {color: '#000'})
        })
    }
    /**
     * @description: 临时函数加自定义脚本的
     * @param {String}
     * @return: 数组
    */
    addScript() {
        this.gameobjects.forEach(gameobject => {
            gameobject.addComponent(gameobject, gameobject.transform, 'Monster', {})
        })
    }
}

export default Scene