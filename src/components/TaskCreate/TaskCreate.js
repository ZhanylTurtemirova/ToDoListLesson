import React, { Component } from "react";
import "./TaskCreate.scss";

export default class TaskCreate extends Component {
  state = {
    task: "",
  };
  addHandeler() {
    this.props.setTasksProps(this.state.task);
  }
  componentDidUpdate() {}
  changeHandler = (event) => {
    this.setState(() => ({ task: event.target.value }));
  };
  render() {
    const { task } = this.state;
    return (
      <div className="Task">
        <input
          className="Task__input"
          value={task}
          onChange={(event) => {
            this.changeHandler(event);
          }}
        />
        <button
          className="Task__button Task__button--blue Task__button--big"
          onClick={() => this.props.setTasksProps(task)}
        >
          Add
        </button>
      </div>
    );
  }
}
