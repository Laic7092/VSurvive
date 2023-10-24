import Component from "../component-manager/component.js"
function player(componentManager) {
    const transform = componentManager.transform
    const position = transform.position
    const { x, y } = position
    let speed = 3
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
        const key = Object.prototype.Input.getKeyDown()
        if(key) {
            switch (key) {
                case 'a':
                    move(-1,0)
                    break;
                case 's':
                    move(0,1)
                    break;
                case 'd':
                    move(1,0)
                    break;
                case 'w':
                    move(0,-1)
                    break;

                default:
                    console.log('key',key);

                    break;
            }
        }
    }

    function test() {
        return b
    }

    function move(x = 0, y = 0) {
        position.x += x*speed;
        position.y += y*speed
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