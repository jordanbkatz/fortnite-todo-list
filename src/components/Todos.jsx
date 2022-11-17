import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaCheck, FaTrash } from 'react-icons/fa';
import { deleteTodo, updateTodo, toggleTodo } from '../redux/todosSlice';

const Todos = () => {
    const dispatch = useDispatch();
    const { todos } = useSelector((state) => state.todos);
    return (
        <div className="todos">
            {todos.map(({ id, finished, title }) => (
                <div className="todo" key={id}>
                    <button className="finished" onClick={() => dispatch(toggleTodo(id))}>
                        {(finished) ? (
                            <FaCheck className="icon" />
                        ) : null}
                    </button>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => dispatch(updateTodo({ id, title: e.target.value }))}
                    />
                    <button className="delete" onClick={() => dispatch(deleteTodo(id))}>
                        <FaTrash className="icon" />
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Todos;