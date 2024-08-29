import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "Eat breakfast",
    "Take a shower",
    "Walk the dog",
  ]);
  const [newTask, setNewTask] = useState("");

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  }

  function moveTaskUp(index) {
    if (index > 0) {
      setTasks((prevTasks) => [
        ...prevTasks.slice(0, index - 1),
        prevTasks[index],
        prevTasks[index - 1],
        ...prevTasks.slice(index + 1),
      ]);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      setTasks((prevTasks) => [
        ...prevTasks.slice(0, index),
        prevTasks[index + 1],
        prevTasks[index],
        ...prevTasks.slice(index + 2),
      ]);
    }
  }

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  return (
    <div className="list">
      <h2>To Do List</h2>

      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />

        <button className="button-add" onClick={addTask}>
          Add Task
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="task-text">{task}</span>
            <button className="task-delete" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="task-move" onClick={() => moveTaskUp(index)}>
              ☝️
            </button>
            <button className="task-moves" onClick={() => moveTaskDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
