import { Drawing2D } from "./Drawing2D.js";
import { Path2D } from "./Path2D.js";
import { Point2D } from "./Point2D.js";
export class Text {
    constructor(text, letters) {
        this.text = text;
        this.letters = letters;
    }
    toDrawing2D() {
        const chars = this.text.split("");
        let all_paths_2d = [];
        let total_width = 0;
        let letter_count = 0;
        let row_count = 0;
        chars.forEach((char) => {
            if (char === ' ') {
                letter_count++;
                total_width += 100;
                return;
            }
            if (char === "\n") {
                row_count++;
                total_width = 0;
                letter_count = 0;
                return;
            }
            let letter = this.letters.get(char);
            if (letter === undefined) {
                throw Error('Letter "' + char + '" not found');
            }
            const measures = letter.measures();
            letter = letter.move(new Point2D(total_width + letter_count * 40, row_count * 240));
            all_paths_2d = all_paths_2d.concat(letter.paths_2d);
            total_width += Math.abs(measures.x);
            letter_count++;
        });
        return new Drawing2D(all_paths_2d);
    }
}
//# sourceMappingURL=Text.js.map