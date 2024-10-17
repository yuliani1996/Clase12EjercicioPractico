import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const SeeTask = ({ listTask }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(listTask); 
    }, [listTask]); 

    const handleToggleComplete = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const elements = tasks.map((item, index) => (
        <li key={index} style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
            <h2>{item.title || "Sin título"}</h2>
            <p>{item.description || "Sin descripción"}</p>
            {}
            <input
                className="input-completed"
                type="checkbox"
                checked={item.completed || false}
                onChange={() => handleToggleComplete(index)}
            />
            <label> Completada</label>

            {}
            <button className="Eliminar" onClick={() => handleDeleteTask(index)}>Eliminar</button>
        </li>
    ));

    return (
        <div>
            <h1>Lista de tareas</h1>

            <ol className="ol-tareas">{elements}</ol>
        </div>
    );
};

SeeTask.propTypes = {
    listTask: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
            completed: PropTypes.bool,
        })
    ).isRequired,
};

export default SeeTask;
