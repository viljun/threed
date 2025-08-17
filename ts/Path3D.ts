import { Line3D } from './Line3D.js';
import { Path2D } from './Path2D.js';
import { Point2D } from './Point2D.js';
import { Point3D } from './Point3D.js';
import { Rotation } from './Rotation.js';

export class Path3D {
    points_3d: Point3D[];
    css: string;

    constructor(
        points_3d: Point3D[],
        css: string,
    ) {
        this.points_3d = points_3d;
        this.css = css;
    }

    ToPath2D(viewer: Point3D): Path2D {
        const points_2d: Point2D[] = [];
        this.points_3d.forEach((point_3d) => {
            points_2d.push(point_3d.ToPoint2D(viewer));
        });

        return new Path2D(points_2d, this.css);
    }

    rotate(rotation: Rotation, center: Point3D): Path3D {
        const rotated_points: Point3D[] = [];
        this.points_3d.forEach((point_3d) => {
            rotated_points.push(point_3d.rotate(rotation, center));
        });

        return new Path3D(rotated_points, this.css);
    }

    htmls(viewer: Point3D): string[] {
        const htmls: string[] = [];
        this.toVisiblePaths(viewer).forEach((path_3d: Path3D) => {
            const path_2d = path_3d.ToPath2D(viewer);
            htmls.push(path_2d.html());
        });

        return htmls;
    }

    move(amount_3d: Point3D): Path3D {
        const moved_points_3d: Point3D[] = [];
        this.points_3d.forEach((point_3d) => {
            moved_points_3d.push(point_3d.move(amount_3d));
        });

        return new Path3D(moved_points_3d, this.css);
    }

    toVisiblePaths(viewer: Point3D): Path3D[] {
        const paths_3d: Path3D[] = [];
        let points_3d: Point3D[] = [];
        let last_point_3d: Point3D;
        this.toVisibleLines(viewer).forEach((line_3d: Line3D) => {
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

    toVisibleLines(viewer: Point3D): Line3D[] {
        let last_point_3d: Point3D;
        const visible_lines_3d: Line3D[] = [];

        const moved_path_3d = this.move(viewer.negate());

        moved_path_3d.points_3d.forEach((point_3d) => {
            // Just remember the first point.
            if (last_point_3d === undefined) {
                last_point_3d = point_3d;

                return;
            }

            const line_3d             = new Line3D(last_point_3d, point_3d);
            const visible_point_count = line_3d.visiblePointCount()
            last_point_3d             = point_3d;

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