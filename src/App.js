import "./App.scss";
import React, { useState, useEffect } from "react";
import TaskCreate from "./components/TaskCreate/TaskCreate";
import Header from "./components/Header/Header";
import TasksList from "./components/TasksList/TasksList";

function App() {
  const [tasks, setTasks] = useState([
    { id: 0, text: "test task", done: false },
    { id: 1, text: "test task2", done: false },
    { id: 2, text: "test task3", done: false },
  ]);
  const setTasksHandler = (item) => {
    setTasks([...tasks, { id: tasks.length, text: item }]);
  };

  const deleteHandler = (id) => {
    const newTasks = tasks;
    var removeIndex = tasks
      .map((item) => {
        return item.id;
      })
      .indexOf(id);
    if (removeIndex > 0) {
      newTasks.splice(removeIndex, 1);
    }
    setTasks(newTasks);
  };

  const updateHandler = (task) => {
    const newTasks = tasks;
    var editedIndex = tasks
      .map((item) => {
        return item.id;
      })
      .indexOf(task.id);
    if (editedIndex > 0) {
      newTasks.splice(editedIndex, 1, task);
    }
    setTasks(newTasks);
  };

  return (
    <div className="Wrapper">
      <Header />
      <TaskCreate setTasksProps={(item) => setTasksHandler(item)} />
      <TasksList
        tasks={tasks}
        deleteItem={(id) => deleteHandler(id)}
        updateItem={(task) => updateHandler(task)}
      />
    </div>
  );
}

export default App;
