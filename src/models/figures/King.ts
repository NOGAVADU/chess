import {Figure, FiguresNames} from "./Figure.ts";
import {Colors} from "../Colors.ts";
import {Cell} from "../Cell.ts";
import {faChessKing as logo} from "@fortawesome/free-solid-svg-icons";

export class King extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = logo;
        this.name = FiguresNames.KING
    }
}