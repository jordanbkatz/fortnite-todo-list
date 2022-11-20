import { useState, useContext } from 'react';
import useSound from 'use-sound';
import { FaVolumeUp, FaVolumeOff, FaPlus } from 'react-icons/fa';
import TodoContext from '../contexts/TodoContext';
const lobbyMusic = require('../assets/lobbymusic.mp3');

function Form() {
    const { todos, setTodos } = useContext(TodoContext);
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
    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTodos([{
            id: Date.now(),
            finished: false,
            title
        }, ...todos]);
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