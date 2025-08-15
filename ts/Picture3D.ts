import { Drawing3D } from './Drawing3D.js';
import { Point3D } from './Point3D.js';
import { Rotation } from './Rotation.js';

export class Picture3D {
    drawings_3d: Drawing3D[];

    constructor(drawings_3d: Drawing3D[]) {
        this.drawings_3d = drawings_3d;
    }

    html(viewer: Point3D): string {
        const html_parts: string[] = [];
        this.drawings_3d.forEach((drawing_3d) => {
            html_parts.push(drawing_3d.html(viewer));
        });

        return html_parts.join('');
    }

    svg(viewer: Point3D): string {
        return '<svg id="svg_entity" class="svg_icon" viewBox="-2 -2 4 4" xmlns="http://www.w3.org/2000/svg">' + this.html(viewer) + '</svg>';
    }

    move(amount_3d: Point3D): Picture3D {
        const moved_drawings_3d: Drawing3D[] = [];
        this.drawings_3d.forEach((drawing_3d) => {
            moved_drawings_3d.push(drawing_3d.move(amount_3d));
        });

        return new Picture3D(moved_drawings_3d);
    }

    rotate(rotation: Rotation, center_3d: Point3D): Picture3D {
        const drawings_3d_rotated: Drawing3D[] = [];
        this.drawings_3d.forEach((drawing_3d) => {
            drawings_3d_rotated.push(drawing_3d.rotate(rotation, center_3d));
        });

        return new Picture3D(drawings_3d_rotated);
    }
}
