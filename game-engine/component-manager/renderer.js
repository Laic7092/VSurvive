import Component from "./component.js";

let ctx = null
window.addEventListener('load', () => {
    let a = document.querySelector('#gameCanvas')
    ctx = a.getContext("2d")
})

class Renderer extends Component{
    gameobject
    transform
    color
    shape

    constructor({ gameobject }) {
        // debugger
        super('Render')
        this.gameobject = gameobject
        this.transform = this.getTransform()
        this.color = '#222'
        this.shape = 'cirle'
    }

    render() {
        const position = this.getPosition()
        const { x, y  } = position
        ctx.strokeStyle = "red";
        ctx.strokeRect(x, y, 1, 1);
    }

    getTransform() {
        return this.gameobject.componentManager.getComponent('Transform')
    }

    getPosition() {
        return this.transform.position
    }
}

export default Renderer