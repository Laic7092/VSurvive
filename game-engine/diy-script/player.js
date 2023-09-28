import Component from "../component-manager/component.js"

function player(componentManager) {
    const transform = componentManager.transform
    const position = transform.position
    const { x, y } = position
    // if (x === 100 && y === 100) {
    //     debugger
    // }
    start()
    let a = 1
    const b = 100

    function start() {
        //console.log('start')
    }

    const update = () => {
        let rd = Math.round(Math.random())
        if (rd === 1) {
            position.x += 5
            position.y -= 5
        }
        else {
            position.x -= 5
            position.y += 5
        }
        //console.log(a, test())
    }

    function test() {
        return b
    }

    return update
}

class Player extends Component {
    update

    constructor(componentManager, param) {
        super('Player', componentManager)
        this.update = player(componentManager)
    }
}

export default Player