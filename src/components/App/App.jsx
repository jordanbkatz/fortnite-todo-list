import React from 'react';
import Background from '../Background';
import Header from '../Header';
import Form from '../Form';
import Todos from '../Todos';
import './App.scss';

const App = () => {
    return (
        <div className="app">
            <Background />
            <div className="content">
                <Header />
                <Form />
                <Todos />
            </div>
        </div>
    );
};

export default App;