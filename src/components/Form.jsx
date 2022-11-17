import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import useSound from 'use-sound';
import { FaVolumeUp, FaVolumeOff, FaPlus } from 'react-icons/fa';
import { createTodo } from '../redux/todosSlice';
import lobbyMusic from '../assets/lobbymusic.mp3';

const Form = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
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
        dispatch(createTodo(title));
        setTitle('');
    };
    return (
        <form className="form" onSubmit={handleSubmit}>
            <button type="button" onClick={handleToggleMusic}>
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
            <button type="submit">
                <FaPlus className="icon" />
            </button>
        </form>
    );
};

export default Form;