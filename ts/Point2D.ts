import { Point3D } from './Point3D.js';

export class Point2D {
    constructor(
        readonly x: number,
        readonly y: number,
    ) {
    }

    text(): string {
        return this.x + ',' + this.y;
    }

    toPoint3D(): Point3D {
        return new Point3D(
            this.x,
            this.y,
            0,
        );
    }

    move(amount_2d: Point2D): Point2D {
        return new Point2D(
            this.x + amount_2d.x,
            this.y + amount_2d.y,
        );
    }
}
