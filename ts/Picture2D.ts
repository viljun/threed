import { Drawing2D } from './Drawing2D.js';
import { Drawing3D } from './Drawing3D.js';
import { Picture3D } from './Picture3D.js';

export class Picture2D {
    drawings_2d: Drawing2D[];

    constructor(drawings_2d: Drawing2D[]) {
        this.drawings_2d = drawings_2d;
    }

    toPicture3D(): Picture3D {
        const drawings_3d: Drawing3D[] = [];
        this.drawings_2d.forEach((drawing_2d) => {
            drawings_3d.push(drawing_2d.toDrawing3D());
        });

        return new Picture3D(drawings_3d);
    }
}