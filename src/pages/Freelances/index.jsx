import DefaultPicture from "../../assets/profile.png";
import Card from "../../components/Card";

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
    ]
    return (
        <div>
            <h1>Profils 👩‍💻👨‍💻👩‍💻</h1>
            {freelanceProfiles.map((profile, index) => (
                <Card
                    key={`${profile.name}-${index}`}
                    label={profile.jobTitle}
                    picture={profile.picture}
                    title={profile.name}
                />
            ))}
            <Card />
            <Card />
            <Card />
            <Card />
        </div>     
    );
};

export default Freelances;