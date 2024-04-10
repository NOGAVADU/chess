import {Figure, FiguresNames} from "./Figure.ts";
import {Colors} from "../Colors.ts";
import {Cell} from "../Cell.ts";
import {faChessKnight as logo} from "@fortawesome/free-solid-svg-icons";

export class Knight extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = logo;
        this.name = FiguresNames.KNIGHT
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false
        }
        const dx = Math.abs(this.cell.x - target.x);
        const dy = Math.abs(this.cell.y - target.y);

        return ((dx === 1 && dy === 2) || (dx === 2 && dy === 1))
    }
}