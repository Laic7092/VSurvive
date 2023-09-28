// 定义 Component（组件）类
class Component {
    name
    active

    constructor(name) {
        this.active = true
        this.name = name
    }

    update() {
        console.log('hh')
    }
}

export default Component