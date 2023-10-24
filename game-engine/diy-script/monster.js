import Component from "../component-manager/component.js"
function monster(componentManager) {
    const transform = componentManager.transform
    const position = transform.position
    const { x, y } = position
    let speed = 2
    start()

    function start() {

    }

    const update = () => {
    }

    function move(x = 0, y = 0) {
        position.x += x*speed;
        position.y += y*speed
    }

    return update
}

class Monster extends Component {
    update

    constructor(componentManager, param) {
        super('Monster', componentManager)
        this.update = monster(componentManager)
    }
}

export default Monster