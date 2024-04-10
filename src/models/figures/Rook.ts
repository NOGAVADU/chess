import {Figure, FiguresNames} from "./Figure.ts";
import {Colors} from "../Colors.ts";
import {Cell} from "../Cell.ts";
import {faChessRook as logo} from "@fortawesome/free-solid-svg-icons";

export class Rook extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = logo;
        this.name = FiguresNames.ROOK
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false
        } else if (
            this.cell.isEmptyHorizontal(target) ||
            this.cell.isEmptyVertical(target)
        ) {
            return true
        }
        return false
    }
}