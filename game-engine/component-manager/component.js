// 定义 Component（组件）类
class Component {
    name
    active
    componentManager

    constructor(name, componentManager) {
        this.active = true
        this.name = name
        this.componentManager = componentManager
    }

    update() {
        //console.log('hh')

    }
}

export default Component