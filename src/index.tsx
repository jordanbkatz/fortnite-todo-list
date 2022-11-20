import React from 'react';
import ReactDOM from 'react-dom/client';
import { TodoProvider } from './contexts/TodoContext';
import App from './App';
import './styles/style.scss';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <TodoProvider>
            <App />
        </TodoProvider>
    </React.StrictMode>
);