import { Path3D } from './Path3D.js';
import { Point2D } from './Point2D.js';
import { Point3D } from './Point3D.js';

export class Path2D {
    points_2d: Point2D[];
    css: string;

    constructor(
        points_2d: Point2D[],
        css?: string,
    ) {
        this.points_2d = points_2d;

        if (typeof css === 'undefined') {
            css = "";
        }

        this.css = css;
    }

    html(): string {
        let prefix: string = 'M';
        const parts: string[] = [];
        this.points_2d.forEach((point_2d) => {
            parts.push(prefix + point_2d.text());
            prefix  = 'L';
        });

        return '<path d="' + parts.join(' ') + '" style="' + this.css + '" />';
    }

    toPath3D(): Path3D {
        const points_3d: Point3D[] = [];
        this.points_2d.forEach((point_2d) => {
            points_3d.push(point_2d.toPoint3D());
        });

        return new Path3D(points_3d, this.css);
    }

    move(amount_2d: Point2D): Path2D {
        const moved_points_2d: Point2D[] = [];
        this.points_2d.forEach((point_2d) => {
            moved_points_2d.push(point_2d.move(amount_2d));
        });

        return new Path2D(moved_points_2d, this.css);
    }
}
