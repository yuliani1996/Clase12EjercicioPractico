import React, { useState } from "react";
import SeeTask from "./SeeTask";
import AddTask from "./AddTask";

const TaskManager = () => {

    const [listTask, setlistTask] = useState([]);

    return (
        <div>
            {}
            <AddTask listTask={listTask} setlistTask={setlistTask} />
            <SeeTask listTask={listTask} setlistTask={setlistTask} />
        </div>
    );
};

export default TaskManager;
