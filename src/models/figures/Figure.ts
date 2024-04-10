import {Colors} from "../Colors.ts";
import {faChess as logo} from "@fortawesome/free-solid-svg-icons";
import {Cell} from "../Cell.ts";

export enum FiguresNames {
    FIGURE = "Фигура",
    KING = "Король",
    QUEEN = "Ферзь",
    BISHOP = "Слон",
    KNIGHT = "Конь",
    ROOK = "Ладья",
    PAWN = "Пешка",
}

export class Figure {
    color: Colors;
    logo: typeof logo | null;
    cell: Cell;
    name: FiguresNames;
    id: number;

    constructor(color: Colors, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.logo = null;
        this.name = FiguresNames.FIGURE;
        this.id = Math.random()
    }

    canMove(target: Cell): boolean {
        if (target.figure?.color === this.color) {
            return false
        } else if (target.figure?.name === FiguresNames.KING) {
            return false
        }
        return true
    }

    moveFigure(target: Cell) {return target}
}