import { quadTreeFactory } from "./quadtree.js"
import { ctx, clearCanvas } from "./panel.js"
import { On, gravity, CANVAS_HEIGHT, CANVAS_WIDTH, COLLISIONLOSE } from "./config.js"
import { balls } from "./ball.js"

let hideFlag = false

addEventListener('visibilitychange', (e) => {
    // debugger
    const visibility = document.visibilityState
    if (visibility === 'hidden')
        hideFlag = true
})

addEventListener('keydown', (e) => {
    let vx = 0
    let vy = 0
    switch (e.key.toLowerCase()) {
        case 'a':
            vx = -10 - gravity.x
            break;
        case 's':
            vy = 10 + gravity.y
            break;
        case 'd':
            vx = 10 + gravity.x
            break;
        case 'w':
            vy = -10 - gravity.y
            break;

        default:
            break;
    }
    if (vx !== 0 || vy !== 0) {
        balls.forEach(ball => {
            ball.vx += vx
            ball.vy += vy
        })
    }
})

let lastFrameTime = 0

// 更新所有小球的速度和位置
function updateBalls(deltaTime, quadTree) {
    for (let i = 0; i < balls.length; i++) {
        const ball = balls[i];

        // 更新小球速度
        ball.vx += gravity.x * deltaTime;
        ball.vy += gravity.y * deltaTime;

        // 更新小球位置
        ball.x += ball.vx * deltaTime;
        ball.y += ball.vy * deltaTime;

        // 处理小球与画布边缘的碰撞
        handleCanvasCollision(ball);
    }

    // 清空四叉树并将所有小球重新插入到其中
    quadTree.clear();
    for (let i = 0; i < balls.length; i++) {
        quadTree.insert(balls[i]);
    }

    // debugger
    // console.log(JSON.parse(JSON.stringify(quadTree)), balls)

    // 处理小球之间的碰撞
    for (let i = 0; i < balls.length; i++) {
        const ball = balls[i];

        // 获取与当前小球可能发生碰撞的其他小球

        const potentialCollisions = On === 'n2' ? balls : quadTree.retrieve(ball);
        // debugger
        // 处理小球之间的碰撞
        for (let j = 0; j < potentialCollisions.length; j++) {
            // debugger
            const otherBall = potentialCollisions[j];
            if (checkCollision(ball, otherBall)) {
                resolveCollision(ball, otherBall);
            }
        }
    }
}

// 处理小球与画布边缘的碰撞
function handleCanvasCollision(ball) {
    if (ball.x + ball.radius > CANVAS_WIDTH) {
        ball.vx = -ball.vx;
        ball.x = CANVAS_WIDTH - ball.radius;
    } else if (ball.x - ball.radius < 0) {
        ball.vx = -ball.vx;
        ball.x = ball.radius;
    }

    if (ball.y + ball.radius > CANVAS_HEIGHT) {
        ball.vy = -ball.vy;
        ball.y = CANVAS_HEIGHT - ball.radius;
    } else if (ball.y - ball.radius < 0) {
        ball.vy = -ball.vy;
        ball.y = ball.radius;
    }
}

// 检查两个小球是否发生碰撞
function checkCollision(ballA, ballB) {
    if (ballA.id === ballB.id) return false

    const dx = ballB.x - ballA.x;
    const dy = ballB.y - ballA.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    return distance < ballA.radius + ballB.radius;
}

// 处理小球之间的碰撞
function resolveCollision(ballA, ballB) {
    // debugger
    const dx = ballB.x - ballA.x;
    const dy = ballB.y - ballA.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const normalX = dx / distance;
    const normalY = dy / distance;
    const tangentX = -normalY;
    const tangentY = normalX;

    const v1n = ballA.vx * normalX + ballA.vy * normalY;
    let v1t = ballA.vx * tangentX + ballA.vy * tangentY;
    const v2n = ballB.vx * normalX + ballB.vy * normalY;
    let v2t = ballB.vx * tangentX + ballB.vy * tangentY;

    const v1nFinal = (v1n * (ballA.mass - ballB.mass) + 2 * ballB.mass * v2n) / (ballA.mass + ballB.mass);
    const v2nFinal = (v2n * (ballB.mass - ballA.mass) + 2 * ballA.mass * v1n) / (ballA.mass + ballB.mass);

    // 引入摩擦力，逐渐减少切向速度
    v1t *= COLLISIONLOSE;
    v2t *= COLLISIONLOSE;

    // 更新小球速度
    ballA.vx = v1nFinal * normalX + v1t * tangentX;
    ballA.vy = v1nFinal * normalY + v1t * tangentY;
    ballB.vx = v2nFinal * normalX + v2t * tangentX;
    ballB.vy = v2nFinal * normalY + v2t * tangentY;

    // 处理碰撞后的位置调整，避免重叠
    const overlap = (ballA.radius + ballB.radius) - distance;
    const displacementX = overlap * normalX;
    const displacementY = overlap * normalY;

    ballA.x -= displacementX * 0.5;
    ballA.y -= displacementY * 0.5;
    ballB.x += displacementX * 0.5;
    ballB.y += displacementY * 0.5;
}

// 绘制所有小球
function drawBalls() {
    for (let i = 0; i < balls.length; i++) {
        const ball = balls[i];
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fillStyle = ball.color;
        ctx.fill();
    }
}

function darwBorder(quadTree) {
    if (!quadTree.divided) {
        const { x, y, width, height } = quadTree.bounds
        ctx.strokeRect(x, y, width, height)
        return
    }
    quadTree.children.forEach(quadTree => {
        darwBorder(quadTree)
    })
}

const t = 100
const quadTree = new quadTreeFactory()

// 主循环
function mainLoop(timestamp) {
    // debugger
    if (hideFlag) {
        lastFrameTime = timestamp
        hideFlag = false
    }
    const deltaTime = (timestamp - lastFrameTime) / t;
    lastFrameTime = timestamp;

    clearCanvas();
    updateBalls(deltaTime, quadTree);
    drawBalls();
    darwBorder(quadTree);
    requestAnimationFrame(mainLoop);
}

mainLoop(0);
