import Component from "./component.js";
import { ctx } from "../core-engine/panel.js";

class Renderer extends Component{
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
        const { x, y  } = this.transform.position
        ctx.strokeStyle = this.color;
        ctx.strokeRect(x, y, 3, 3);
    }
}

export default Renderer