import Component from "../component-manager/component.js"
function player(gameobject, transform) {
    const position = transform.position
    let speed = 500
    start()
    function start() {
        //console.log('start')
    }


    let cnt = 0
    const update = () => {
        const key = Input.getKeyDown()

        if (key) {
            // console.log(++cnt,'trig')
            switch (key) {
                case 'a':
                    move(1, 0)
                    break;
                case 's':
                    move(0, -1)
                    break;
                case 'd':
                    move(-1, 0)
                    break;
                case 'w':
                    move(0, 1)
                    break;

                default:
                    break;
            }
        }
    }

    function move(x = 0, y = 0) {
        const deltaTime = window.deltaTime
        const dt = speed * deltaTime
        transform.moveTowards({ x, y }, dt)
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