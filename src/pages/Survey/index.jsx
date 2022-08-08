import { Link, useParams } from "react-router-dom";

const Survey = () => {
    const { questionNumber } = useParams();
    return (
        <div>
            <h1>Questionnaire</h1>
            {parseInt(questionNumber) >1 && parseInt(questionNumber) <=10 ? <Link to={`/survey/${parseInt(questionNumber) - 1}`}>Question précédente</Link>: null}
            {parseInt(questionNumber) >=1 && parseInt(questionNumber) <10 ? <Link to={`/survey/${parseInt(questionNumber) + 1}`}>Question suivante</Link>: null}
            {parseInt(questionNumber) == 10 ? <Link to="/Results">Résultats</Link>: null}
            <h2>Question {questionNumber}</h2>
            
        </div>     
    );
};

export default Survey;