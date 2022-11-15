import React, { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
    const [todos, setTodos] = useLocalStorage('fortnite-todos', []);
    return (
        <TodosContext.Provider value={{todos, setTodos}}>
            {children}
        </TodosContext.Provider>
    );
};

export default TodosContext;