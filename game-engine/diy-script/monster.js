import Component from "../component-manager/component.js"

function monster(gameobject, transform) {
    const position = transform.position
    let speed = 1
    let player = null
    let playerTransform = null
    let playerPosition = null

    const span = 60
    let counter = 0
    let updateHz = 1
    let maxD = 2000
    let distance = null
    let d = -1
    let v2 = null;

    (function start() {
        player = gameobject.scene.getGameobject()
        playerTransform = player.transform
        playerPosition = playerTransform.position
    })()

    const update = () => {
        counter++
        if (counter >= updateHz) {
            counter = 0
            distance = transform.getDistance(position, playerPosition)
            d = distance.d
            v2 = distance.v2
            if (d > maxD) {
                updateHz = span
            } else if (updateHz === span) {
                updateHz = 1
            }
            if (d > 3)
                transform.moveTowards(v2, speed * updateHz)
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