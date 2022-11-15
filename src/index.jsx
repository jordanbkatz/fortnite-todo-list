import React from 'react';
import ReactDOM from 'react-dom/client';
import { TodosProvider } from './contexts/TodosContext';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <TodosProvider>
            <App />
        </TodosProvider>
    </React.StrictMode>
);