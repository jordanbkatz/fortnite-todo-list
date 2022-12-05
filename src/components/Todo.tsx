import { FaCheck, FaTrash } from 'react-icons/fa';
import { ITodo } from '../models/todo';

interface ITodoProps extends ITodo {
    deleteTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
    updateTodo: (id: number, name: string) => void;
}

const Todo: React.FC<ITodoProps> = ({ id, finished, name, deleteTodo, toggleTodo, updateTodo }) => {
    const handleDeleteTodo = () => {
        deleteTodo(id);
    };
    const handleToggleTodo = () => {
        toggleTodo(id);
    };
    const handleChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateTodo(id, e.target.value);
    };
    return (
        <div className="todo">
            <button className="finished" onClick={handleToggleTodo}>
                {finished ? (
                    <FaCheck className="icon" />
                ) : null}
            </button>
            <input
                type="text"
                value={name}
                onChange={handleChangeTodo}
            />
            <button className="delete" onClick={handleDeleteTodo}>
                <FaTrash className="icon" />
            </button>
        </div>
    );
};

export default Todo;