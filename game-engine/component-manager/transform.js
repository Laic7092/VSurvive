import Component from "./component.js";

class Vector2 {
    constructor(x = 0, y = 0) {
        return {
            x,
            y
        }
    }
}

class Transform extends Component{
    position
    parent
    // rotation

    constructor(componentManager, { parent = null, position = new Vector2()}) {
        super('Transform', componentManager)
        this.position = position
        this.parent = parent
    }
}

export default Transform
