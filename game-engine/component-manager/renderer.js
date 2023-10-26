import Component from "./component.js";
import { ELes } from "../core-engine/panel.js";

class Renderer extends Component {
    color
    shape

    constructor(gameObject, transform, param = {}) {
        super('Render', gameObject, transform)
        const { color } = param
        this.color = color || 'red'
        this.shape = 'cirle'
    }

    render() {
        // return
        const { x, y } = this.transform.position
        if (x > 900 || y > 700) return
        ELes.push({ x, y })
        // if ((x > 395 && x < 405) && (y > 295 && y < 305)) return
        // ctx.strokeStyle = this.color
        // // ctx.strokeRect(x, y, 10, 10)
        // ctx.beginPath()
        // ctx.arc(x, y, 20, 0, 2 * Math.PI)
        // ctx.stroke()
    }
}

export default Renderer