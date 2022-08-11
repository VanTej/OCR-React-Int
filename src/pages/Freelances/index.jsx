import Card from '../../components/Card';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { Loader } from '../../utils/style/Atoms';
import { useFetch } from '../../utils/hooks';

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: repeat(${({ rows }) => rows}, 200px);
    grid-template-columns: repeat(2, 1fr);
    margin-top: 1rem;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
`;

const MutedText = styled.p`
    color: #8186a0;
`;

const Freelances = () => {
    const { isLoading, data, error } = useFetch(
        `http://localhost:8000/freelances`
    );
    const freelanceProfiles = data.freelancersList;

    if (error) {
        return <span>Oups il y a eu un problème</span>;
    }

    return (
        <Container>
            <h1>Trouvez votre prestataire</h1>
            <MutedText>
                Chez Shinny nous réunissons les meilleurs profils pour vous.
            </MutedText>
            {isLoading ? (
                <Loader />
            ) : (
                <CardsContainer rows={Math.ceil(freelanceProfiles.length / 2)}>
                    {freelanceProfiles.map((profile, index) => (
                        <Card
                            key={`${profile.name}-${index}`}
                            label={profile.jobTitle}
                            picture={profile.picture}
                            title={profile.name}
                        />
                    ))}
                </CardsContainer>
            )}
        </Container>
    );
};

export default Freelances;
