import React, { useState } from 'react';
import { FaPlus, FaCheck, FaTrash } from 'react-icons/fa';

const Home = () => {
    const [title, setTitle] = useState('');
    const [tasks, setTasks] = useState([]);
    const handleChangeTitle = e => setTitle(e.target.value);
    const handleCreate = () => {
        setTasks([{
            id: Date.now(),
            finished: false,
            title
        }, ...tasks]);
        setTitle('');
    };
    const handleDelete = id => {
        setTasks(tasks.filter(task => task.id !== id));
    };
    const handleToggleFinish = id => {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                task.finished = !task.finished;
            }
            return task;
        }));
    };
    return (
        <div className="home">
            <div className="container">
                <div className="header">
                    <h1>Task Manager Evolved</h1>
                </div>
                <div className="form">
                    <input
                        type="text"
                        maxLength={50}
                        placeholder="Enter task"
                        className="input"
                        value={title}
                        onChange={handleChangeTitle}
                    />
                    <button type="submit" className="submit" onClick={handleCreate}>
                        <FaPlus className="icon" />
                    </button>
                </div>
                {tasks.map((task, i) => (
                    <div key={i} className="task">
                        <button className="finished" onClick={() => handleToggleFinish(task.id)}>
                            {(task.finished) && (
                                <FaCheck className="icon" />
                            )}
                        </button>
                        <p className="title">{task.title}</p>
                        <button className="delete" onClick={() => handleDelete(task.id)}>
                            <FaTrash className="icon" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;