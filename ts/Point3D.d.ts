import { Point2D } from './Point2D.js';
import { Rotation } from './Rotation.js';
export declare class Point3D {
    readonly x: number;
    readonly y: number;
    readonly z: number;
    constructor(x: number, y: number, z: number);
    ToPoint2D(viewer: Point3D): Point2D;
    rotate(rotation: Rotation, center: Point3D): Point3D;
    rotateX(radians: number): Point3D;
    rotateY(radians: number): Point3D;
    rotateZ(radians: number): Point3D;
    move(amount_3d: Point3D): Point3D;
    negate(): Point3D;
}
//# sourceMappingURL=Point3D.d.ts.map