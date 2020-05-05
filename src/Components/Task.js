import React from "react";

const Task = ({ task }) => {
  return (
    <div>
      <li className="list-item">
        <span>{task.title}</span>
        <div>
          <button className="btn-delete task-btn">
            <i className="fas fa-trash-alt"></i>
          </button>
          <button className="btn-edit task-btn">
            <i className="fas fa-pen"></i>
          </button>
        </div>
      </li>
    </div>
  );
};

export default Task;
