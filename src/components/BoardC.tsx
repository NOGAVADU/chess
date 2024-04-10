import {Board} from "../models/Board.ts";
import React, {FC, useEffect, useState} from "react";
import CellC from "./CellC.tsx";
import {Cell} from "../models/Cell.ts";
import {Player} from "../models/Player.ts";
import {Colors} from "../models/Colors.ts";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
    currentPlayer: Player | null;
    swapPlayer: () => void;
}

const BoardC: FC<BoardProps> = ({board, setBoard, currentPlayer, swapPlayer}) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

    function click(cell: Cell) {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell)
            swapPlayer()
            setSelectedCell(null)
        } else {
            if (cell.figure?.color === currentPlayer?.color) {
                setSelectedCell(cell)
            }
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
        <div>
            <h2 className='board__title'>Текущий ход: {currentPlayer?.color === Colors.WHITE ? 'Белые' : 'Черные'}</h2>
            <div className='board'>
                {board.cells.map((row, index) =>
                    <React.Fragment key={index}>
                        {row.map(cell =>
                            <CellC key={cell.id}
                                   cell={cell}
                                   accessibly={cell.figure?.color === currentPlayer?.color}
                                   selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                                   click={click}
                            />
                        )}
                    </React.Fragment>
                )}
            </div>
        </div>
    );
};

export default BoardC;