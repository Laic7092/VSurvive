import Component from "../component-manager/component.js"
function monster(gameobject, transform) {
    const position = transform.position
    const { x, y } = position
    let speed = 10
    let player = null
    let playerTransform = null
    let playerPosition = null
    function start() {
        player = gameobject.scene.getGameobject()
        playerTransform = player.transform
        playerPosition = playerTransform.position
    }
    start()


    const update = () => {
        const distance = getDistance(position, playerPosition)
        if (distance.d > 5)
            follow(distance)
    }

    function move(x, y) {
        position.x -= x * speed
        position.y -= y * speed
    }

    function follow({ sin, cos }) {
        // console.log(moveV2);
        // y = 单位长*ySub/d
        move(cos, sin)
    }

    function getDistance(posiA, posiB) {
        const xSub = posiA.x - posiB.x
        const ySub = posiA.y - posiB.y
        const powX = Math.pow(xSub, 2)
        const powY = Math.pow(ySub, 2)
        const d = Math.sqrt(powX + powY)
        return {
            d,
            sin: ySub / d,
            cos: xSub / d
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