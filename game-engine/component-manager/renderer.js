import Component from "./component.js";
import { ctx } from "../core-engine/panel.js";

class Renderer extends Component{
    transform
    color
    shape

    constructor(componentManager, param = {}) {
        // debugger
        super('Render', componentManager)
        this.transform = this.getTransform()
        const { color } = param
        this.color = color || 'red'
        this.shape = 'cirle'
    }

    render() {
        const position = this.getPosition()
        const { x, y  } = position
        ctx.strokeStyle = this.color;
        ctx.strokeRect(x, y, 3, 3);
    }

    getTransform() {
        return this.componentManager.getComponent('Transform')
    }

    getPosition() {
        return this.transform.position
    }
}

export default Renderer