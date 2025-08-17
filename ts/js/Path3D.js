import { Line3D } from './Line3D.js';
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
    htmls(viewer) {
        const htmls = [];
        this.toVisiblePaths(viewer).forEach((path_3d) => {
            const path_2d = path_3d.ToPath2D(viewer);
            htmls.push(path_2d.html());
        });
        return htmls;
    }
    move(amount_3d) {
        const moved_points_3d = [];
        this.points_3d.forEach((point_3d) => {
            moved_points_3d.push(point_3d.move(amount_3d));
        });
        return new Path3D(moved_points_3d, this.css);
    }
    toVisiblePaths(viewer) {
        const paths_3d = [];
        let points_3d = [];
        let last_point_3d;
        this.toVisibleLines(viewer).forEach((line_3d) => {
            if (last_point_3d === undefined) {
                points_3d.push(line_3d.start_3d);
                points_3d.push(line_3d.end_3d);
                last_point_3d = line_3d.end_3d;
                return;
            }
            if (line_3d.start_3d.equals(last_point_3d)) {
                points_3d.push(line_3d.end_3d);
                last_point_3d = line_3d.end_3d;
                return;
            }
            paths_3d.push(new Path3D(points_3d, this.css));
            points_3d = [];
            points_3d.push(line_3d.start_3d);
            points_3d.push(line_3d.end_3d);
            last_point_3d = line_3d.end_3d;
        });
        paths_3d.push(new Path3D(points_3d, this.css));
        return paths_3d;
    }
    toVisibleLines(viewer) {
        let last_point_3d;
        const visible_lines_3d = [];
        const moved_path_3d = this.move(viewer.negate());
        moved_path_3d.points_3d.forEach((point_3d) => {
            // Just remember the first point.
            if (last_point_3d === undefined) {
                last_point_3d = point_3d;
                return;
            }
            const line_3d = new Line3D(last_point_3d, point_3d);
            const visible_point_count = line_3d.visiblePointCount();
            last_point_3d = point_3d;
            // Line is hidden.
            if (visible_point_count === 0) {
                return;
            }
            // Line is partly visible.
            if (visible_point_count === 1) {
                visible_lines_3d.push(line_3d.visiblePart().move(viewer));
                return;
            }
            // Line is fully visible.
            visible_lines_3d.push(line_3d.move(viewer));
        });
        return visible_lines_3d;
    }
}
//# sourceMappingURL=Path3D.js.map