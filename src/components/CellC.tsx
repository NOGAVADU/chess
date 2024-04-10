import {Cell} from "../models/Cell.ts";
import {FC} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface CellProps {
    cell: Cell;
}

const CellC: FC<CellProps> = ({cell}) => {
    return (
        <div className={['cell', cell.color].join(' ')}>
            {cell.figure?.logo &&
                <FontAwesomeIcon className={['figure', cell.figure.color].join(' ')} icon={cell.figure.logo}/>
            }
        </div>
    );
};

export default CellC;