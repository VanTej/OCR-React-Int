import { useContext } from 'react';
import { SurveyContext, ThemeContext } from '../../utils/context';
import { useFetch } from '../../utils/hooks';
import { Loader } from '../../utils/style/Atoms';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../utils/style/colors';

const StyledLink = styled(Link)`
    padding: 1rem;
    color: white;
    background-color: ${colors.primary};
    text-decoration: none;
    font-size: 18px;
    border-radius: 30px;
`;

export function formatJobList(title, listLength, index) {
    if (index === listLength - 1) {
        return title;
    }
    return `${title}, `;
}

export function formatQueryParams(answers) {
        const answersNumber = Object.keys(answers);

        return answersNumber.reduce((previousParams, answerNumber, index) => {
            const isFirstAnswer = index === 0;
            const separator = isFirstAnswer ? '' : '&';
            return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`;
        }, '');
    }

const Results = () => {
    const { theme } = useContext(ThemeContext);
    const { answers } = useContext(SurveyContext);

    const { isLoading, data, error } = useFetch(
        `http://localhost:8000/results/?${formatQueryParams(answers)}`
    );

    const results = data.resultsData;
    console.log(results);

    if (error) {
        return <span>Oups il y a eu un problème</span>;
    }

    return (
        <div className="container">
            <h2>
                Les compétences dont vous avez besoin :{' '}
                {isLoading ? (
                    <Loader />
                ) : (
                    <span className="text-primary">
                        {results
                            ? results.map((result) => result.title + ' ')
                            : ''}
                    </span>
                )}
            </h2>
            <StyledLink to="/freelances">Découvrez nos talents</StyledLink>
            <ul>
                {results
                    ? results.map((result, index) => (
                          <li key={index}>
                              <h3 className="text-primary">
                                  {formatJobList(
                                      result.title,
                                      results.length,
                                      index
                                  )}
                              </h3>{' '}
                              <p>{result.description}</p>
                          </li>
                      ))
                    : ''}
            </ul>
        </div>
    );
};

export default Results;
