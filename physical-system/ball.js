import { TOTAL, CANVAS_WIDTH, CANVAS_HEIGHT } from "./config.js";
// 定义小球数组
const balls = [];


// 生成TOTAL个随机小球
function generateBall() {
    for (let i = 0; i < TOTAL; i++) {
        createRandomBall(i);
    }
}

// 生成随机整数
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 生成随机颜色
function randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// 生成随机小球
function createRandomBall(id) {
    const ball = {
        // mass: randomInt(1, 10),
        // mass: 1,
        id,
        x: randomInt(0, CANVAS_WIDTH),
        y: randomInt(0, CANVAS_HEIGHT),
        vx: randomInt(-10, 10),
        vy: randomInt(-10, 10),
        // radius: randomInt(20, 40),
        radius: randomInt(10, 20),
        // radius: randomInt(5, 10),
        // radius: 20,
        color: randomColor(),
    };
    ball.mass = ball.radius / 2
    balls.push(ball);
}

generateBall()

export {
    balls
}