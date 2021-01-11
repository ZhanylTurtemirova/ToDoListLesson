import React, { useState } from "react";
import TaskItem from "./TaskItem";

const TasksList = ({ tasks, deleteItem }) => {
  const [tasksProps, setTasks] = useState(tasks);

  const deleteItemHandler = (id) => {
    const newList = tasksProps.filter((item) => item.id !== id);
    setTasks(newList);
    deleteItem(id);
  };
  return (
    <>
      {tasks.map((item, index) => (
        <TaskItem
          key={index}
          task={item}
          test={"test"}
          abc={true}
          getData={(data) => this.handleData(data)}
          deleteItem={(id) => deleteItemHandler(id)}
        />
      ))}
    </>
  );
};

export default TasksList;
