import Component from "../component-manager/component.js"
function monster(gameobject, transform) {
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

    constructor(gameobject, transform, param) {
        super('Monster',gameobject, transform)
        this.update = monster(gameobject, transform)
    }
}

export default Monster