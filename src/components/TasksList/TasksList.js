import React, { useState } from "react";
import TaskItem from "./TaskItem";

const TasksList = ({ tasks, deleteItem, updateItem, setDone }) => {
  const [tasksProps, setTasks] = useState(tasks);

  const deleteItemHandler = (id) => {
    const newList = tasksProps.filter((item) => item.id !== id);
    setTasks(newList);
    deleteItem(id);
  };
  const editItemHandler = (task) => {
    updateItem(task);
  };
  const setDoneHandler = (task) => {
    setDone(task);
  };
  return (
    <>
      {tasks.map((item, index) => (
        <TaskItem
          key={index}
          task={item}
          deleteItem={(id) => deleteItemHandler(id)}
          editItem={(task) => editItemHandler(task)}
          setDone={(item) => setDoneHandler(item)}
        />
      ))}
    </>
  );
};

export default TasksList;
