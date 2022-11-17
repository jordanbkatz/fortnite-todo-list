import React from 'react';
import Background from './components/Background';
import Header from './components/Header';
import Form from './components/Form';
import Todos from './components/Todos';

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