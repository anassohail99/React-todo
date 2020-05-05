import React, { useContext } from "react";
import { TaskListContext } from "../Context/TaskListContext";

const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskListContext);
  return (
    <div>
      <li className="list-item">
        <span>{task.title}</span>
        <div>
          <button className="btn-delete task-btn">
            <i
              onClick={() => removeTask(task.id)}
              className="fas fa-trash-alt"
            ></i>
          </button>
          <button className="btn-edit task-btn">
            <i onClick={() => findItem(task.id)} className="fas fa-pen"></i>
          </button>
        </div>
      </li>
    </div>
  );
};

export default Task;
