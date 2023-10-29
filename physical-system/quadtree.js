import { Rectangle } from "./math.js";
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./config.js";

class QuadTree {
    constructor(bounds, capacity) {
        this.bounds = bounds;
        this.capacity = capacity;
        this.balls = [];
        this.divided = false;
        this.children = [];
        this.ballCount = 0;
    }

    insert(ball) {
        if (!this.bounds.contains(ball.x, ball.y)) {
            return false;
        }

        if (this.divided) {
            const childIndex = this.getChildIndex(ball);
            if (childIndex !== -1 && this.children[childIndex].insert(ball)) {
                this.ballCount++;
                return true;
            }
        }

        if (this.balls.length < this.capacity) {
            this.balls.push(ball);
            this.ballCount++;
            return true;
        }

        if (!this.divided) {
            this.subdivide();
        }

        const childIndices = this.getIntersectingChildIndices(ball);
        for (const index of childIndices) {
            if (this.children[index].insert(ball)) {
                this.ballCount++;
                return true;
            }
        }

        return false;
    }

    getChildIndex(ball) {
        const cx = this.bounds.x + this.bounds.width / 2;
        const cy = this.bounds.y + this.bounds.height / 2;

        const left = ball.x < cx;
        const top = ball.y < cy;

        const index = (top ? 0 : 2) + (left ? 0 : 1);
        return index;
    }

    retrieve(ball) {
        let foundBalls = [];

        if (!this.bounds.intersectsCircle(ball.x, ball.y, ball.radius)) {
            return foundBalls;
        }

        foundBalls.push(...this.balls);

        if (this.divided) {
            const childIndices = this.getIntersectingChildIndices(ball);
            for (const index of childIndices) {
                foundBalls.push(...this.children[index].retrieve(ball));
            }
        }

        return foundBalls;
    }

    getIntersectingChildIndices(ball) {
        const cx = this.bounds.x + this.bounds.width / 2;
        const cy = this.bounds.y + this.bounds.height / 2;

        const left = ball.x - ball.radius < cx;
        const right = ball.x + ball.radius > cx;
        const top = ball.y - ball.radius < cy;
        const bottom = ball.y + ball.radius > cy;

        const indices = [];
        if (left && top) indices.push(0);
        if (right && top) indices.push(1);
        if (left && bottom) indices.push(2);
        if (right && bottom) indices.push(3);

        return indices;
    }

    subdivide() {
        const x = this.bounds.x;
        const y = this.bounds.y;
        const w = this.bounds.width / 2;
        const h = this.bounds.height / 2;

        const nw = new Rectangle(x, y, w, h);
        const ne = new Rectangle(x + w, y, w, h);
        const sw = new Rectangle(x, y + h, w, h);
        const se = new Rectangle(x + w, y + h, w, h);

        this.children = [
            new QuadTree(nw, this.capacity),
            new QuadTree(ne, this.capacity),
            new QuadTree(sw, this.capacity),
            new QuadTree(se, this.capacity)
        ];

        this.divided = true;

        const ballsToDistribute = this.balls;
        this.balls = [];

        for (const ball of ballsToDistribute) {
            const childIndices = this.getIntersectingChildIndices(ball);
            for (const index of childIndices) {
                if (this.children[index].insert(ball)) {
                    break;
                }
            }
        }
    }

    clear() {
        this.balls = [];
        this.ballCount = 0;
        if (this.divided) {
            for (const child of this.children) {
                child.clear();
            }
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
