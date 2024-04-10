import {Cell} from "../models/Cell.ts";
import {FC} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface CellProps {
    cell: Cell;
    accessibly: boolean;
    selected: boolean;
    click: (cell: Cell) => void;
}

const CellC: FC<CellProps> = ({cell, selected, click, accessibly}) => {
    return (
        <div onClick={() => click(cell)}
             className={[
                 'cell',
                 cell.color, selected ? 'selected' : '',
                 cell.available && cell.figure ? 'attack' : '',
                 accessibly ? 'accessibly' : ''
             ].join(' ')}
        >
            {cell.available && !cell.figure && <div className={'available'}></div>}
            {cell.figure?.logo &&
                <FontAwesomeIcon className={['figure', cell.figure.color].join(' ')} icon={cell.figure.logo}/>
            }
        </div>
    );
};

export default CellC;