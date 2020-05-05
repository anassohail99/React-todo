import React, { useContext } from "react";
import { TaskListContext } from "../Context/TaskListContext";
import Task from "./Task";

const TaskList = () => {
  // getting tasks array using context
  const { tasks } = useContext(TaskListContext);
  return (
    <div>
      {tasks.length ? (
        <ul className="list">
          {tasks.map((task) => {
            return <Task task={task} key={task.id} />;
          })}
        </ul>
      ) : (
        <div className="no-tasks">No Tasks</div>
      )}
    </div>
  );
};

export default TaskList;
// https://youtu.be/fqup-BL3VjI?t=796
