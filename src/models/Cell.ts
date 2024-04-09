import {Colors} from "./Colors.ts";
import {Figure} from "./figures/Figure.ts";
import {Board} from "./Board.ts";

export class Cell {
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    figure: Figure | null;
    board: Board;
    available: boolean; // Может ли переместиться
    id: number; // Для ключей React

    constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = figure;
        this.board = board;
        this.available = false;
        this.id = Math.random()
    }
}