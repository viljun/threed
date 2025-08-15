import { Point3D } from './Point3D.js';
export class Point2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    text() {
        return this.x + ',' + this.y;
    }
    toPoint3D() {
        return new Point3D(this.x, this.y, 0);
    }
    move(amount_2d) {
        return new Point2D(this.x + amount_2d.x, this.y + amount_2d.y);
    }
}
//# sourceMappingURL=Point2D.js.map