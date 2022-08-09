import { useContext } from 'react';
import { SurveyContext } from '../../utils/context';

const Results = () => {
    const {answers} = useContext(SurveyContext);

    return (
        <div>
            <h1>Résultats</h1>
            {Object.keys(answers).map((k) => (
                <p>{k} : {answers[k] ? 'Oui' : 'Non'}</p>
            ))}
        </div> 
    );    
};

export default Results;