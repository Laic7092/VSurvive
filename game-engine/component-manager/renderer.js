import Component from "./component.js";
import { ELes } from "../core-engine/panel.js";
// import { ELes } from "../core-engine/ofscr-panel.js";
// import { ELes } from "../core-engine/ofscr-worker-panel.js";
// import { ELes } from "../core-engine/async-ofscr-worker-panel.js";
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
        // const { x, y } = this.transform.getXy()
        const { x, y } = this.transform.position
        if (x > 900 || y > 700) return
        // console.log('aa', {x,y});

        ELes.push({ x, y })
    }
}

export default Renderer