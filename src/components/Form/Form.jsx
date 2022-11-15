import React, { useState, useContext } from 'react';
import useSound from 'use-sound';
import { FaVolumeUp, FaVolumeOff, FaPlus } from 'react-icons/fa';
import TodosContext from '../../contexts/TodosContext';
import lobbyMusic from '../../assets/lobbymusic.mp3';
import './Form.scss';

const Form = () => {
    const [title, setTitle] = useState('');
    const { todos, setTodos } = useContext(TodosContext);
    const [music, setMusic] = useState(false);
    const [play, { stop }] = useSound(lobbyMusic);
    const handleToggleMusic = () => {
        if (!music) {
            play();
        }
        else {
            stop();
        }
        setMusic(!music);
    };
    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([{
            id: Date.now(),
            finished: false,
            title
        }, ...todos]);
        setTitle('');
    };
    return (
        <div className="form">
            <button onClick={handleToggleMusic}>
                {(music) ? (
                    <FaVolumeUp className="icon" />    
                ) : (
                    <FaVolumeOff className="icon" />
                )}
                
            </button>
            <input
                type="text"
                maxLength={50}
                placeholder="enter todo"
                value={title}
                onChange={handleChangeTitle}
            />
            <button type="submit" onClick={handleSubmit}>
                <FaPlus className="icon" />
            </button>
        </div>
    );
};

export default Form;