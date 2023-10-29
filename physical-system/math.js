class Rectangle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    contains(x, y) {
        return (
            x >= this.x && x <= this.x + this.width &&
            y >= this.y && y <= this.y + this.height
        );
    }

    intersectsCircle(x, y, radius) {
        const dx = Math.abs(x - (this.x + this.width / 2));
        const dy = Math.abs(y - (this.y + this.height / 2));

        if (dx > (this.width / 2 + radius)) {
            return false;
        }

        if (dy > (this.height / 2 + radius)) {
            return false;
        }

        if (dx <= this.width / 2) {
            return true;
        }

        if (dy <= this.height / 2) {
            return true;
        }

        const cornerDistanceSq = Math.pow(dx - this.width / 2, 2) + Math.pow(dy - this.height / 2, 2);
        return cornerDistanceSq <= Math.pow(radius, 2);
    }
}

export {
    Rectangle
}
