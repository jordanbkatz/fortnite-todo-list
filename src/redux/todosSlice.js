import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: []
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        createTodo: (state, action) => {
            state.todos = [{
                id: Date.now(),
                finished: false,
                title: action.payload
            }, ...state.todos];
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => {
                return todo.id !== action.payload;
            });
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    todo.title = action.payload.title;
                }
                return todo;
            });
        },
        toggleTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    todo.finished = !todo.finished;
                }
                return todo;
            });
        }
    }
});

export const { createTodo, deleteTodo, updateTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;