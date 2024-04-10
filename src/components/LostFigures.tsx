import {FC} from 'react';
import {Figure} from "../models/figures/Figure.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


interface LostFiguresProps {
    title: string;
    figures: Figure[]
}

const LostFigures: FC<LostFiguresProps> = ({title, figures}) => {
    return (
        <div className='lost__el'>
            <h3 className='lost__title'>{title}</h3>
            <div className='lost__el-container'>
                {figures.map(figure =>
                    <div key={figure.id}>
                        {figure.logo &&
                            <FontAwesomeIcon className={['figure', 'lost__figure', figure.color].join(' ')}
                                             icon={figure.logo}/>}
                    </div>
                )}
            </div>
        </div>
    );
};

export default LostFigures;