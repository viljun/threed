import { Drawing3D } from './Drawing3D.js';
import { Path2D } from './Path2D.js';
import { Path3D } from './Path3D.js';
import { Point2D } from './Point2D.js';
import { Point3D } from './Point3D.js';

export class Drawing2D {
    paths_2d: Path2D[];

    constructor(paths_2d: Path2D[]) {
        this.paths_2d = paths_2d;
    }

    move(amount_2d: Point2D): Drawing2D {
        const moved_paths_2s: Path2D[] = [];
        this.paths_2d.forEach((path_2d) => {
            moved_paths_2s.push(path_2d.move(amount_2d));
        });

        return new Drawing2D(moved_paths_2s);
    }

    toDrawing3D(): Drawing3D {
        const paths_3d: Path3D[] = [];
        this.paths_2d.forEach((path_2d) => {
            paths_3d.push(path_2d.toPath3D());
        });

        return new Drawing3D(paths_3d);
    }

    measures(): Point3D {
        return this.toDrawing3D().measures();
    }
}
