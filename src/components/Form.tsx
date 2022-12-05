import { useState } from 'react';
import useSound from 'use-sound';
import { FaVolumeUp, FaVolumeOff, FaPlus } from 'react-icons/fa';
import lobbyMusic from '../assets/lobbymusic.mp3';

interface IFormProps {
    addTodo: (name: string) => void;
}

const Form: React.FC<IFormProps> = ({ addTodo }) => {
    const [name, setName] = useState<string>('');
    const [music, setMusic] = useState<boolean>(false);
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
    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTodo(name);
        setName('');
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
                value={name}
                onChange={handleChangeName}
            />
            <button type="submit">
                <FaPlus className="icon" />
            </button>
        </form>
    );
};

export default Form;