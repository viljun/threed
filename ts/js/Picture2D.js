import { Drawing2D } from './Drawing2D.js';
import { Drawing3D } from './Drawing3D.js';
import { Picture3D } from './Picture3D.js';
export class Picture2D {
    constructor(drawings_2d) {
        this.drawings_2d = drawings_2d;
    }
    toPicture3D() {
        const drawings_3d = [];
        this.drawings_2d.forEach((drawing_2d) => {
            drawings_3d.push(drawing_2d.toDrawing3D());
        });
        return new Picture3D(drawings_3d);
    }
}
//# sourceMappingURL=Picture2D.js.map