import DefaultPicture from '../../assets/profile.png';
import Card from '../../components/Card';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { Loader } from '../../utils/style/Atoms';
import { useEffect, useState } from 'react';

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: repeat(${({rows}) => rows }, 200px);
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
    const [freelanceProfiles, setProfiles] = useState([]);
    const [isDataLoading, setDataLoading] = useState(false);
    const [error, setError] = useState(false);

    async function fetchData() {
        try {
            const response = await fetch(`http://localhost:8000/freelances`);
            const { freelancersList } = await response.json();
            setProfiles(freelancersList);
            setDataLoading(false);
        } catch (error) {
            console.log('===== error =====', error);
            setError(true);
        }
    }

    useEffect(() => {
        setDataLoading(true);
        fetchData();
    }, []);

    return (
        <Container>
            <h1>Trouvez votre prestataire</h1>
            <MutedText>
                Chez Shinny nous réunissons les meilleurs profils pour vous.
            </MutedText>
            {error ? <span>Oups il y a eu un problème</span> : null}
            {isDataLoading ? <Loader /> : null}
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
        </Container>
    );
};

export default Freelances;
