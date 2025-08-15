import { Path2D } from './Path2D.js';
import { Point2D } from './Point2D.js';
import { Point3D } from './Point3D.js';
import { Rotation } from './Rotation.js';
export class Path3D {
    constructor(points_3d, css) {
        this.points_3d = points_3d;
        this.css = css;
    }
    ToPath2D(viewer) {
        const points_2d = [];
        this.points_3d.forEach((point_3d) => {
            points_2d.push(point_3d.ToPoint2D(viewer));
        });
        return new Path2D(points_2d, this.css);
    }
    rotate(rotation, center) {
        const rotated_points = [];
        this.points_3d.forEach((point_3d) => {
            rotated_points.push(point_3d.rotate(rotation, center));
        });
        return new Path3D(rotated_points, this.css);
    }
    html(viewer) {
        const path_2d = this.ToPath2D(viewer);
        return path_2d.html();
    }
    move(amount_3d) {
        const moved_points_3d = [];
        this.points_3d.forEach((point_3d) => {
            moved_points_3d.push(point_3d.move(amount_3d));
        });
        return new Path3D(moved_points_3d, this.css);
    }
}
//# sourceMappingURL=Path3D.js.map