import { useEffect, useState } from 'react';
import { ITodo } from '../models/todo';
import Form from '../components/Form';
import Todo from '../components/Todo';

const Home: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>(() => {
        const item = localStorage.getItem('fortnite-todos');
        return item ? JSON.parse(item) : [];
    });
    useEffect(() => {
        localStorage.setItem('fortnite-todos', JSON.stringify(todos));
    }, [todos]);
    const addTodo = (name: string) => {
        setTodos([{
            id: Date.now(),
            finished: false,
            name
        }, ...todos]);
    };
    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => {
            return todo.id !== id
        }));
    };
    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo => {
            return todo.id === id ? {  ...todo, finished: !todo.finished } : todo
        }));
    }
    const updateTodo = (id: number, name: string) => {
        setTodos(todos.map(todo => {
            return todo.id === id ? { ...todo, name } : todo;
        }));
    }
    return (
        <div className="home">
            <div className="header">
                Fortnite Todo List
            </div>
            <Form addTodo={addTodo} />
            <div className="todos">
                {todos.map((todo, i) => (
                    <Todo 
                        key={i}
                        deleteTodo={deleteTodo}
                        toggleTodo={toggleTodo}
                        updateTodo={updateTodo}
                        {...todo} 
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;