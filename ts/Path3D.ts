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

    html(viewer: Point3D): string {
        const path_2d = this.ToPath2D(viewer);

        return path_2d.html();
    }

    move(amount_3d: Point3D): Path3D {
        const moved_points_3d: Point3D[] = [];
        this.points_3d.forEach((point_3d) => {
            moved_points_3d.push(point_3d.move(amount_3d));
        });

        return new Path3D(moved_points_3d, this.css);
    }
}