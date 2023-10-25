import Component from "../component-manager/component.js"

function monster(gameobject, transform) {
    const position = transform.position
    let speed = 1
    let player = null
    let playerTransform = null
    let playerPosition = null;

    (function start() {
        player = gameobject.scene.getGameobject()
        playerTransform = player.transform
        playerPosition = playerTransform.position
    })()

    const update = () => {
        const distance = transform.getDistance(position, playerPosition)
        const { d, ...v2 } = distance
        if (d > 5) {
            transform.moveTowards(v2, speed)
        }
    }

    return update
}



class Monster extends Component {
    update

    constructor(gameobject, transform, param) {
        super('Monster', gameobject, transform)
        this.update = monster(gameobject, transform)
    }
}

export default Monster