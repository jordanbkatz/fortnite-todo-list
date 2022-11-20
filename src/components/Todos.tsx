import { useContext } from 'react';
import TodoContext from '../contexts/TodoContext';
import Todo from './Todo';

function Todos() {
    const { todos } = useContext(TodoContext);
    return (
        <div className="todos">
            {todos.map((todo, i) => (
                <Todo {...todo} key={i} />
            ))}
        </div>
    );
};

export default Todos;