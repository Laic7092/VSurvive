import Component from "./component.js";
import { ctx } from "../core-engine/panel.js";

class Renderer extends Component{
    transform
    color
    shape

    constructor(componentManager) {
        // debugger
        super('Render', componentManager)
        this.transform = this.getTransform()
        this.color = '#222'
        this.shape = 'cirle'
    }

    render() {
        const position = this.getPosition()
        const { x, y  } = position
        ctx.strokeStyle = "red";
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