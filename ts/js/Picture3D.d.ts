import { Drawing3D } from './Drawing3D.js';
import { Point3D } from './Point3D.js';
import { Rotation } from './Rotation.js';
export declare class Picture3D {
    drawings_3d: Drawing3D[];
    constructor(drawings_3d: Drawing3D[]);
    html(viewer: Point3D): string;
    svg(viewer: Point3D): string;
    move(amount_3d: Point3D): Picture3D;
    rotate(rotation: Rotation, center_3d: Point3D): Picture3D;
}
//# sourceMappingURL=Picture3D.d.ts.map