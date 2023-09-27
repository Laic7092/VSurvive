import Component from "./compopnent-manager.js";
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

    constructor(parent = null, position = new Vector2()) {
        this.position = position
        this.parent = parent
    }
}

let a = new Transform()