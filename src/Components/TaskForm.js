import React, { useContext, useState, useEffect } from "react";
import { TaskListContext } from "../Context/TaskListContext";

const TaskForm = () => {
  const { addTask, clearTasks, editTask, editItems } = useContext(
    TaskListContext
  );
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editItems === null) {
      addTask(title);
      setTitle("");
    } else {
      editTask(title, editItems.id);
    }
  };
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    if (editItems !== null) {
      setTitle(editItems.title);
      console.log(editItems);
    } else {
      setTitle("");
    }
  }, [editItems]);
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        value={title}
        onChange={handleChange}
        type="text"
        className="task-input"
        placeholder="Add Task..."
        required
      />

      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {editItems ? "Edit Task" : "Add Task"}
        </button>
        <button onClick={clearTasks} className="btn clear-btn">
          Clear
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
