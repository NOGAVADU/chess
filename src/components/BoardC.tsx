import {Board} from "../models/Board.ts";
import React, {FC, useEffect, useState} from "react";
import CellC from "./CellC.tsx";
import {Cell} from "../models/Cell.ts";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
}

const BoardC: FC<BoardProps> = ({board, setBoard}) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

    function click(cell: Cell) {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell)
            setSelectedCell(null)
        } else {
            setSelectedCell(cell)
        }
    }

    useEffect(() => {
        highlightCells()
    }, [selectedCell])

    function highlightCells() {
        board.highlightCells(selectedCell);
        updateBoard()
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }

    return (
        <div className='board'>
            {board.cells.map((row, index) =>
                <React.Fragment key={index}>
                    {row.map(cell =>
                        <CellC key={cell.id}
                               cell={cell}
                               selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                               click={click}
                        />
                    )}
                </React.Fragment>
            )}
        </div>
    );
};

export default BoardC;