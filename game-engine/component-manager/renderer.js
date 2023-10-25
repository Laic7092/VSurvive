import Component from "./component.js";
import { ctx } from "../core-engine/panel.js";

class Renderer extends Component {
    color
    shape

    constructor(gameObject, transform, param = {}) {
        // debugger
        super('Render', gameObject, transform)
        const { color } = param
        this.color = color || 'red'
        this.shape = 'cirle'
    }

    render() {
        const { x, y } = this.transform.position
        if (x > 900 || y > 700) return
        ctx.strokeStyle = this.color;
        ctx.beginPath()
        ctx.arc(x, y, 1, 0, 2 * Math.PI)
        ctx.stroke()
    }
}

export default Renderer