// let On = 'n2'
let On = 'nlogn'

const TOTAL = 1000

const COLLISIONLOSE = 0.98

// 定义重力场对象
const gravity = {
    x: 0, // 重力场x方向加速度
    y: 1, // 重力场y方向加速度
};

const CANVAS_WIDTH = 1920
const CANVAS_HEIGHT = 1080

// setTimeout(() => {
//     On = 'n2'
// }, 2000);

export {
    On,
    gravity,
    TOTAL,
    CANVAS_HEIGHT,
    CANVAS_WIDTH,
    COLLISIONLOSE
}