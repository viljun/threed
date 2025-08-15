import { Point3D } from './Point3D.js';
export declare class Point2D {
    readonly x: number;
    readonly y: number;
    constructor(x: number, y: number);
    text(): string;
    toPoint3D(): Point3D;
    move(amount_2d: Point2D): Point2D;
}
//# sourceMappingURL=Point2D.d.ts.map