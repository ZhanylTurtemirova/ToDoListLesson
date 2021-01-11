import React, { Component } from "react";
import "./TaskCreate.scss";

export default class TaskCreate extends Component {
  state = {
    task: "",
  };
  componentDidUpdate() {
    console.log(">>> componentDidUpdate");
  }
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
        <button className="Task__button Task__button--blue Task__button--big">
          Add
        </button>
      </div>
    );
  }
}
