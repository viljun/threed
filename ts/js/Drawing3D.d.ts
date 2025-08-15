import { Boundaries3D } from './Boundaries3D.js';
import { Path3D } from './Path3D.js';
import { Point3D } from './Point3D.js';
import { Rotation } from './Rotation.js';
export declare class Drawing3D {
    paths_3d: Path3D[];
    constructor(paths_3d: Path3D[]);
    rotate(rotation: Rotation, center: Point3D): Drawing3D;
    html(viewer: Point3D): string;
    boundaries3D(): Boundaries3D;
    measures(): Point3D;
    center(): Point3D;
    move(amount_3d: Point3D): Drawing3D;
}
//# sourceMappingURL=Drawing3D.d.ts.map