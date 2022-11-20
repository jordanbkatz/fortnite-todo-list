const image = require('../assets/background.jpeg');

function Background() {
    return (
        <img src={image} alt="background" className="background" />
    );
};

export default Background;