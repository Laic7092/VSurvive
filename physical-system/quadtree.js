import { Rectangle } from "./math.js";
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./config.js";
class QuadTree {
    constructor(bounds, capacity) {
        this.bounds = bounds; // 四叉树的边界范围
        this.capacity = capacity; // 每个节点最多容纳的小球数量
        this.balls = []; // 存储在当前节点中的小球
        this.divided = false; // 标志当前节点是否已经被分割
        this.children = []; // 当前节点的子节点
        this.ballCount = 0;
    }

    insert(ball) {
        if (!this.bounds.contains(ball.x, ball.y)) {
            return false; // 如果小球不在当前节点的边界范围内，则直接返回
        }

        if (this.divided) {
            for (let i = 0; i < this.children.length; i++) {
                if (this.children[i].bounds.contains(ball.x, ball.y)) {
                    if (this.children[i].insert(ball)) {
                        this.ballCount++;
                        return true; // 将小球插入到子节点中
                    }
                }
            }
        }

        if (this.balls.length < this.capacity) {
            this.balls.push(ball); // 如果当前节点还有空间，则将小球插入到当前节点中
            this.ballCount++;
            return true;
        }

        if (!this.divided) {
            this.subdivide(); // 如果当前节点已满且未分割，则进行分割操作
        }

        return false;
    }

    // 分割当前节点
    subdivide() {
        const x = this.bounds.x;
        const y = this.bounds.y;
        const w = this.bounds.width / 2;
        const h = this.bounds.height / 2;

        const nw = new Rectangle(x, y, w, h);
        const ne = new Rectangle(x + w, y, w, h);
        const sw = new Rectangle(x, y + h, w, h);
        const se = new Rectangle(x + w, y + h, w, h);

        this.children.push(new QuadTree(nw, this.capacity));
        this.children.push(new QuadTree(ne, this.capacity));
        this.children.push(new QuadTree(sw, this.capacity));
        this.children.push(new QuadTree(se, this.capacity));

        this.divided = true;

        // // 将小球分配给子节点
        // for (let i = 0; i < this.balls.length; i++) {
        //     for (let j = 0; j < this.children.length; j++) {
        //         if (this.children[j].insert(this.balls[i])) {
        //             break;
        //         }
        //     }
        // }

        // this.balls = [];
    }

    // 获取当前节点及其子节点中与指定小球可能发生碰撞的所有小球
    retrieve(ball) {
        let foundBalls = [];

        if (!this.bounds.intersectsCircle(ball.x, ball.y, ball.radius)) {
            return foundBalls; // 如果指定小球与当前节点的边界不相交，则直接返回
        }

        for (let i = 0; i < this.balls.length; i++) {
            foundBalls.push(this.balls[i]); // 将当前节点中的小球加入结果数组
        }

        if (this.divided) {
            for (let i = 0; i < this.children.length; i++) {
                foundBalls = foundBalls.concat(this.children[i].retrieve(ball)); // 递归获取子节点中的小球
            }
        }

        return foundBalls;
    }

    // 清空当前节点及其子节点中的所有小球
    clear() {
        this.balls = [];
        this.ballCount = 0;
        if (this.divided) {
            this.children.forEach(child => child.clear());
            this.divided = false;
            this.children = [];
        }
    }
}

function quadTreeFactory() {
    const x = 0;
    const y = 0;
    const w = CANVAS_WIDTH
    const h = CANVAS_HEIGHT
    const rec = new Rectangle(x, y, w, h);
    const quadTree = new QuadTree(rec, 10);
    return quadTree
}

export { QuadTree, quadTreeFactory };
