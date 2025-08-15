import { Point2D } from './Point2D.js';
import { Rotation } from './Rotation.js';
export class Point3D {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    ToPoint2D(viewer) {
        return new Point2D((viewer.x + this.x) / (this.z - viewer.z), (viewer.y + this.y) / (this.z - viewer.z));
    }
    rotate(rotation, center) {
        let point = this.move(center.negate());
        point = point.rotateX(rotation.angle_x);
        point = point.rotateY(rotation.angle_y);
        point = point.rotateZ(rotation.angle_z);
        return point.move(center);
    }
    rotateX(radians) {
        const sin = Math.sin(radians);
        const cos = Math.cos(radians);
        return new Point3D(this.x, this.z * sin + this.y * cos, this.z * cos - this.y * sin);
    }
    rotateY(radians) {
        const sin = Math.sin(radians);
        const cos = Math.cos(radians);
        return new Point3D(this.z * sin - this.x * cos, this.y, this.z * cos + this.x * sin);
    }
    rotateZ(radians) {
        const sin = Math.sin(radians);
        const cos = Math.cos(radians);
        return new Point3D(this.x * cos - this.y * sin, this.x * sin + this.y * cos, this.z);
    }
    move(amount_3d) {
        return new Point3D(this.x + amount_3d.x, this.y + amount_3d.y, this.z + amount_3d.z);
    }
    negate() {
        return new Point3D(-this.x, -this.y, -this.z);
    }
}
//# sourceMappingURL=Point3D.js.map