// 定义 Component（组件）类
class Component {
    name
    active
    gameobject
    transform

    constructor(name, gameobject, transform) {
        this.active = true
        this.name = name
        this.gameobject = gameobject
        this.transform = transform
    }

    update() {
        //console.log('hh')

    }
}

export default Component