import image from '../assets/background.jpeg';

const Background: React.FC = () => {
    return (
        <img src={image} alt="background" className="background" />
    );
};

export default Background;