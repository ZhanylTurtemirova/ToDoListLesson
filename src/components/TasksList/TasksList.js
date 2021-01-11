import React, { Component } from "react";
import TaskItem from "./TaskItem";

export default class TasksList extends Component {
  state = {
    tasks: ["task 1", "task 2", "task 3"],
    dataFromChild: "",
  };

  componentDidMount() {
    console.log(">>> componentDidMount");
  }

  componentWillUnmount() {
    console.log(">>> componentWillUnmount");
  }

  componentDidUpdate() {
    console.log(">>> componentDidUpdate");
  }

  handleData = (data) => {
    console.log(">>>", data);
    this.setState(() => ({ dataFromChild: data }));
  };

  render() {
    const { tasks } = this.state;
    return (
      <>
        {tasks.map((item, index) => (
          <TaskItem
            key={index}
            task={item}
            test={"test"}
            abc={true}
            getData={(data) => this.handleData(data)}
          />
        ))}
      </>
    );
  }
}
