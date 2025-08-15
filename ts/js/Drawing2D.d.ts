import { Drawing3D } from './Drawing3D.js';
import { Path2D } from './Path2D.js';
import { Point2D } from './Point2D.js';
import { Point3D } from './Point3D.js';
export declare class Drawing2D {
    paths_2d: Path2D[];
    constructor(paths_2d: Path2D[]);
    move(amount_2d: Point2D): Drawing2D;
    toDrawing3D(): Drawing3D;
    measures(): Point3D;
}
//# sourceMappingURL=Drawing2D.d.ts.map