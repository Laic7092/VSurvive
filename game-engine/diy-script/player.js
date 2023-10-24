import Component from "../component-manager/component.js"
function player(gameobject, transform) {
    const position = transform.position
    const { x, y } = position
    let speed = 10
    start()
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
                    break;
            }
        }
    }

    function move(x = 0, y = 0) {
        position.x += x*speed;
        position.y += y*speed
    }

    return update
}

class Player extends Component {
    update

    constructor(gameobject, transform, param) {
        super('Player', gameobject, transform)
        this.update = player(gameobject, transform)
    }
}

export default Player