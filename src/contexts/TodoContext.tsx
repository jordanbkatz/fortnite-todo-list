import React, { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { ITodo } from '../types';

interface ITodoContext {
    todos: ITodo[];
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

interface ITodoProvider {
    children: React.ReactNode;
}

const TodoContext = createContext<ITodoContext>({} as ITodoContext);

export function TodoProvider({ children }: ITodoProvider) {
    const [todos, setTodos] = useLocalStorage<ITodo[]>('fortnite-todos', []);
    const value = {
        todos,
        setTodos
    };
    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContext;