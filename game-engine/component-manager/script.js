import Component from "./component.js";

class Script extends Component {
    state
    method
    lifeCycle
    constructor(state, method, lifeCycle) {
        this.state = state
        this.method = method
        this.lifeCycle = lifeCycle
    }
}

class MyScript extends Script {
    constructor(state, method, lifeCycle) {
        this.name = 'MyScript'
    }
}

export default Script