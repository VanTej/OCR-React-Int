import error404Illustration from '../../assets/404.svg';
import styled from 'styled-components';

const FlexColumnCenter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

function Error() {
    return (
        <FlexColumnCenter>
            <h1>Oups </h1>
            <img src={error404Illustration} alt="erreur 404" />
            <h1> Cette page n'existe pas</h1>
        </FlexColumnCenter>
    );
}

export default Error;
