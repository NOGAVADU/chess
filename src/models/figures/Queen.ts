import {Figure, FiguresNames} from "./Figure.ts";
import {Colors} from "../Colors.ts";
import {Cell} from "../Cell.ts";
import {faChessQueen as logo} from "@fortawesome/free-solid-svg-icons";

export class Queen extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = logo;
        this.name = FiguresNames.QUEEN
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false
        } else if (
            this.cell.isEmptyVertical(target) ||
            this.cell.isEmptyHorizontal(target) ||
            this.cell.isEmptyDiagonal(target)
        ) {
            return true
        }
        return false
    }
}