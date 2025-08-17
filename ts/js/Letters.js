import { Drawing2D } from "./Drawing2D.js";
import { Path2D } from "./Path2D.js";
import { Point2D } from "./Point2D.js";
export class Letters {
    static getMap() {
        const map = new Map();
        map.set("a", new Drawing2D([
            new Path2D([
                (new Point2D(0, 200)),
                (new Point2D(100, 0)),
                (new Point2D(200, 200)),
            ]),
            new Path2D([
                (new Point2D(50, 100)),
                (new Point2D(150, 100)),
            ], "stroke:red"),
        ]));
        map.set("b", new Drawing2D([
            new Path2D([
                (new Point2D(0, 0)),
                (new Point2D(0, 200)),
                (new Point2D(200, 150)),
                (new Point2D(0, 100)),
                (new Point2D(200, 50)),
                (new Point2D(0, 0)),
            ]),
        ]));
        map.set("e", new Drawing2D([
            new Path2D([
                (new Point2D(200, 0)),
                (new Point2D(0, 0)),
                (new Point2D(0, 200)),
                (new Point2D(200, 200)),
            ]),
            new Path2D([
                (new Point2D(0, 100)),
                (new Point2D(200, 100)),
            ]),
        ]));
        map.set("k", new Drawing2D([
            new Path2D([
                (new Point2D(0, 0)),
                (new Point2D(0, 200)),
            ]),
            new Path2D([
                (new Point2D(200, 0)),
                (new Point2D(0, 100)),
                (new Point2D(200, 200)),
            ]),
        ]));
        map.set("i", new Drawing2D([
            new Path2D([
                (new Point2D(0, 0)),
                (new Point2D(0, 200)),
            ]),
        ]));
        map.set("j", new Drawing2D([
            new Path2D([
                (new Point2D(200, 0)),
                (new Point2D(200, 100)),
                (new Point2D(100, 200)),
                (new Point2D(0, 100)),
            ]),
        ]));
        map.set("l", new Drawing2D([
            new Path2D([
                (new Point2D(0, 0)),
                (new Point2D(0, 200)),
                (new Point2D(200, 200)),
            ]),
        ]));
        map.set("m", new Drawing2D([
            new Path2D([
                (new Point2D(0, 200)),
                (new Point2D(0, 0)),
                (new Point2D(100, 200)),
                (new Point2D(200, 0)),
                (new Point2D(200, 200)),
            ]),
        ]));
        map.set("n", new Drawing2D([
            new Path2D([
                (new Point2D(0, 200)),
                (new Point2D(0, 0)),
                (new Point2D(200, 200)),
                (new Point2D(200, 0)),
            ], "stroke-width:0.02;stroke-dasharray:3%,1%;"),
        ]));
        map.set("o", new Drawing2D([
            new Path2D([
                (new Point2D(100, 0)),
                (new Point2D(200, 100)),
                (new Point2D(100, 200)),
                (new Point2D(0, 100)),
                (new Point2D(100, 0)),
            ]),
        ]));
        map.set("p", new Drawing2D([
            new Path2D([
                (new Point2D(0, 200)),
                (new Point2D(0, 0)),
                (new Point2D(200, 50)),
                (new Point2D(0, 100)),
            ]),
        ]));
        map.set("r", new Drawing2D([
            new Path2D([
                (new Point2D(0, 200)),
                (new Point2D(0, 0)),
                (new Point2D(200, 50)),
                (new Point2D(0, 100)),
                (new Point2D(200, 200)),
            ]),
        ]));
        map.set("s", new Drawing2D([
            new Path2D([
                (new Point2D(200, 0)),
                (new Point2D(0, 75)),
                (new Point2D(200, 125)),
                (new Point2D(100, 200)),
            ]),
        ]));
        map.set("t", new Drawing2D([
            new Path2D([
                (new Point2D(0, 0)),
                (new Point2D(200, 0)),
            ]),
            new Path2D([
                (new Point2D(100, 0)),
                (new Point2D(100, 200)),
            ]),
        ]));
        map.set("v", new Drawing2D([
            new Path2D([
                (new Point2D(0, 0)),
                (new Point2D(100, 200)),
                (new Point2D(200, 0)),
            ]),
        ]));
        map.set("ä", new Drawing2D([
            new Path2D([
                (new Point2D(0, 200)),
                (new Point2D(100, 50)),
                (new Point2D(200, 200)),
            ]),
            new Path2D([
                (new Point2D(50, 100)),
                (new Point2D(150, 100)),
            ], "stroke:red"),
        ]));
        map.set("_", new Drawing2D([
            new Path2D([
                (new Point2D(0, 200)),
                (new Point2D(200, 200)),
            ]),
        ]));
        return map;
    }
}
//# sourceMappingURL=Letters.js.map