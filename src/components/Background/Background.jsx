import React from 'react';
import background from '../../assets/background.jpeg';
import './Background.scss';

const Background = () => {
    return (
        <img src={background} alt="background" className="background" />
    );
};

export default Background;