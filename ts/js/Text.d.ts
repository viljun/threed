import { Drawing2D } from "./Drawing2D.js";
export declare class Text {
    text: string;
    letters: Map<string, Drawing2D>;
    constructor(text: string, letters: Map<string, Drawing2D>);
    toDrawing2D(): Drawing2D;
}
//# sourceMappingURL=Text.d.ts.map