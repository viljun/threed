import { Path3D } from './Path3D.js';
import { Point2D } from './Point2D.js';
export declare class Path2D {
    points_2d: Point2D[];
    css: string;
    constructor(points_2d: Point2D[], css?: string);
    html(): string;
    toPath3D(): Path3D;
    move(amount_2d: Point2D): Path2D;
}
//# sourceMappingURL=Path2D.d.ts.map