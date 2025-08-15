import { Boundaries3D } from './Boundaries3D.js';
import { Path3D } from './Path3D.js';
import { Point3D } from './Point3D.js';
import { Rotation } from './Rotation.js';
export class Drawing3D {
    constructor(paths_3d) {
        this.paths_3d = paths_3d;
    }
    rotate(rotation, center) {
        const rotated_paths_3d = [];
        this.paths_3d.forEach((path_3d) => {
            rotated_paths_3d.push(path_3d.rotate(rotation, center));
        });
        return new Drawing3D(rotated_paths_3d);
    }
    html(viewer) {
        const path_texts = [];
        this.paths_3d.forEach((path_3d) => {
            path_texts.push(path_3d.html(viewer));
        });
        return path_texts.join(' ');
    }
    boundaries3D() {
        var _a;
        let min_x;
        let min_y;
        let min_z;
        let max_x;
        let max_y;
        let max_z;
        const first_point_3d = (_a = this.paths_3d[0]) === null || _a === void 0 ? void 0 : _a.points_3d[0];
        if (first_point_3d === undefined) {
            throw new Error('Drawing is empty.');
        }
        min_x = first_point_3d.x;
        min_y = first_point_3d.y;
        min_z = first_point_3d.z;
        max_x = first_point_3d.x;
        max_y = first_point_3d.y;
        max_z = first_point_3d.z;
        this.paths_3d.forEach((path_3d) => {
            path_3d.points_3d.forEach((point_3d) => {
                if (point_3d.x < min_x) {
                    min_x = point_3d.x;
                }
                if (point_3d.y < min_y) {
                    min_y = point_3d.y;
                }
                if (point_3d.z < min_z) {
                    min_z = point_3d.z;
                }
                if (point_3d.x > max_x) {
                    max_x = point_3d.x;
                }
                if (point_3d.y > max_y) {
                    max_y = point_3d.y;
                }
                if (point_3d.z > max_z) {
                    max_z = point_3d.z;
                }
            });
        });
        const min = new Point3D(min_x, min_y, min_z);
        const max = new Point3D(max_x, max_y, max_z);
        return new Boundaries3D(min, max);
    }
    measures() {
        const boundaries_3d = this.boundaries3D();
        const x_size = boundaries_3d.max.x - boundaries_3d.min.x;
        const y_size = boundaries_3d.max.y - boundaries_3d.min.y;
        const z_size = boundaries_3d.max.z - boundaries_3d.min.z;
        return new Point3D(x_size, y_size, z_size);
    }
    center() {
        const boundaries_3d = this.boundaries3D();
        return new Point3D((boundaries_3d.min.x + boundaries_3d.max.x) / 2, (boundaries_3d.min.y + boundaries_3d.max.y) / 2, (boundaries_3d.min.z + boundaries_3d.max.z) / 2);
    }
    move(amount_3d) {
        const moved_paths_3d = [];
        this.paths_3d.forEach((path_3d) => {
            moved_paths_3d.push(path_3d.move(amount_3d));
        });
        return new Drawing3D(moved_paths_3d);
    }
}
//# sourceMappingURL=Drawing3D.js.map