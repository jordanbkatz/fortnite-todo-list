import React, { useContext } from 'react';
import { FaCheck, FaTrash } from 'react-icons/fa';
import TodosContext from '../../contexts/TodosContext';
import './Todos.scss';

const Todos = () => {
    const { todos, setTodos } = useContext(TodosContext);
    const handleDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    const handleToggleFinish = (id) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                todo.finished = !todo.finished;
            }
            return todo;
        }));
    };
    return (
        <div className="todos">
            {todos.map(({ id, finished, title }) => (
                <div className="todo" key={id}>
                    <button className="finished" onClick={() => handleToggleFinish(id)}>
                        {(finished) ? (
                            <FaCheck className="icon" />
                        ) : null}
                    </button>
                    <p className="title">{title}</p>
                    <button className="delete" onClick={() => handleDelete(id)}>
                        <FaTrash className="icon" />
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Todos;