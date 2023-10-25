import Component from "./component.js";

class Vector2 {
    constructor(x = 0, y = 0) {
        return {
            x,
            y
        }
    }
}

class Transform extends Component {
    position
    parent

    constructor(gameobject, transform, { parent = null, position = new Vector2() }) {
        super('Transform', gameobject)
        this.transform = this
        this.position = position
        this.parent = parent
    }

    moveTowards(vector2, v) {
        const { x, y } = vector2
        this.position.x -= x * v
        this.position.y -= y * v
    }

    getDistance(posiA, posiB) {
        const xSub = posiA.x - posiB.x
        const ySub = posiA.y - posiB.y
        const powX = Math.pow(xSub, 2)
        const powY = Math.pow(ySub, 2)
        const d = Math.sqrt(powX + powY)
        return {
            d,
            y: ySub / d,
            x: xSub / d
        }
    }
}

export default Transform
