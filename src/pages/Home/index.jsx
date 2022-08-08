import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import homeIllustration from '../../assets/home-illustration.svg';

const StyledLink = styled(Link)`
    padding: 1rem;
    color: white;
    background-color: ${colors.primary};
    text-decoration: none;
    font-size: 18px;
    border-radius: 30px;
`;

const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    height: 80vh;
    background-color: ${colors.backgroundLight};
`;

const Title = styled.div`
    width: 30vw;
    font-size: 1.5rem;
`;

function Home() {
    return (
        <div className="Home">
            <StyledHeader className="Home-header">
                <Title>
                    <h1>
                        Repérez vos besoins, on s'occupe du reste, avec les
                        meilleurs talents
                    </h1>
                    <StyledLink to="/survey/1">Faire le test</StyledLink>
                </Title>
                <img src={homeIllustration} alt="illustration accueil" />
            </StyledHeader>
        </div>
    );
}

export default Home;
