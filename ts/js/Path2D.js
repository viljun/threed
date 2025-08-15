import { Path3D } from './Path3D.js';
import { Point2D } from './Point2D.js';
import { Point3D } from './Point3D.js';
export class Path2D {
    constructor(points_2d, css) {
        this.points_2d = points_2d;
        if (typeof css === 'undefined') {
            css = "";
        }
        this.css = css;
    }
    html() {
        let prefix = 'M';
        const parts = [];
        this.points_2d.forEach((point_2d) => {
            parts.push(prefix + point_2d.text());
            prefix = 'L';
        });
        return '<path d="' + parts.join(' ') + '" style="' + this.css + '" />';
    }
    toPath3D() {
        const points_3d = [];
        this.points_2d.forEach((point_2d) => {
            points_3d.push(point_2d.toPoint3D());
        });
        return new Path3D(points_3d, this.css);
    }
    move(amount_2d) {
        const moved_points_2d = [];
        this.points_2d.forEach((point_2d) => {
            moved_points_2d.push(point_2d.move(amount_2d));
        });
        return new Path2D(moved_points_2d, this.css);
    }
}
//# sourceMappingURL=Path2D.js.map