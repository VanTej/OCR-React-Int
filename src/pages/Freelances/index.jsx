import DefaultPicture from '../../assets/profile.png';
import Card from '../../components/Card';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 1rem;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${colors.backgroundLight};
    margin-top: 1rem;
`;

const MutedText = styled.p`
    color: #8186a0;
`;

const Freelances = () => {
    const freelanceProfiles = [
        {
            name: 'Jane Doe',
            jobTitle: 'Devops',
            picture: DefaultPicture,
        },
        {
            name: 'John Doe',
            jobTitle: 'Developpeur frontend',
            picture: DefaultPicture,
        },
        {
            name: 'Jeanne Biche',
            jobTitle: 'Développeuse Fullstack',
            picture: DefaultPicture,
        },
    ];
    return (
        <Container>
            <h1>Trouvez votre prestataire</h1>
            <MutedText>Chez Shinny nous réunissons les meilleurs profils pour vous.</MutedText>
            <CardsContainer>
                {freelanceProfiles.map((profile, index) => (
                    <Card
                        key={`${profile.name}-${index}`}
                        label={profile.jobTitle}
                        picture={profile.picture}
                        title={profile.name}
                    />
                ))}
            </CardsContainer>
        </Container>
    );
};

export default Freelances;
