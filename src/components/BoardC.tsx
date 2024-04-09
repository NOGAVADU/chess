import {Board} from "../models/Board.ts";
import React, {FC} from "react";
import CellC from "./CellC.tsx";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
}

const BoardC: FC<BoardProps> = ({board, setBoard}) => {

    return (
        <div className='board'>
            {board.cells.map((row, index) =>
                <React.Fragment key={index}>
                    {row.map(cell =>
                        <CellC cell={cell} key={cell.id}/>
                    )}
                </React.Fragment>
            )}
        </div>
    );
};

export default BoardC;