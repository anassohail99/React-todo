import React, { useContext } from "react";
import { TaskListContext } from "../Context/TaskListContext";
import Task from "./Task";

const TaskList = () => {
  // getting tasks array using context
  const { tasks } = useContext(TaskListContext);
  return (
    <div>
      <ul className="list">
        {tasks.map((task) => {
          return <Task key={task.id} task={task} />;
        })}
      </ul>
    </div>
  );
};

export default TaskList;
// https://youtu.be/fqup-BL3VjI?t=796
