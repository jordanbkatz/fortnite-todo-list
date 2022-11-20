import { useContext } from 'react';
import { FaCheck, FaTrash } from 'react-icons/fa';
import { ITodo } from '../types';
import TodoContext from '../contexts/TodoContext';

function Todo({ id, finished, title }: ITodo) {
    const { todos, setTodos } = useContext(TodoContext);
    const handleToggleFinished = () => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, finished: !todo.finished } : todo));
    };
    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, title: e.target.value } : todo));
    };
    const handleDelete = () => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    return (
        <div className="todo">
            <button className="finished" onClick={handleToggleFinished}>
                {(finished) ? (
                    <FaCheck className="icon" />
                ) : null}
            </button>
            <input
                type="text"
                value={title}
                onChange={handleChangeTitle}
            />
            <button className="delete" onClick={handleDelete}>
                <FaTrash className="icon" />
            </button>
        </div>
    );
};

export default Todo;