import { Path2D } from './Path2D.js';
import { Point3D } from './Point3D.js';
import { Rotation } from './Rotation.js';
export declare class Path3D {
    points_3d: Point3D[];
    css: string;
    constructor(points_3d: Point3D[], css: string);
    ToPath2D(viewer: Point3D): Path2D;
    rotate(rotation: Rotation, center: Point3D): Path3D;
    html(viewer: Point3D): string;
    move(amount_3d: Point3D): Path3D;
}
//# sourceMappingURL=Path3D.d.ts.map