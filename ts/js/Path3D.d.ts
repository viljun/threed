import { Line3D } from './Line3D.js';
import { Path2D } from './Path2D.js';
import { Point3D } from './Point3D.js';
import { Rotation } from './Rotation.js';
export declare class Path3D {
    points_3d: Point3D[];
    css: string;
    constructor(points_3d: Point3D[], css: string);
    ToPath2D(viewer: Point3D): Path2D;
    rotate(rotation: Rotation, center: Point3D): Path3D;
    htmls(viewer: Point3D): string[];
    move(amount_3d: Point3D): Path3D;
    toVisiblePaths(viewer: Point3D): Path3D[];
    toVisibleLines(viewer: Point3D): Line3D[];
}
//# sourceMappingURL=Path3D.d.ts.map