import React, { Component } from "react";
import "./TaskItem.scss";

export default class TaskItem extends Component {
  handleClick = () => {
    this.props.getData("someData");
  };
  handleEdit = () => {
    this.props.getData(this.props.task);
  };

  render() {
    const { task, deleteItem } = this.props;

    return (
      <div className="TaskItem">
        <div className="TaskItem__item TaskItem__item--left">
          <button className="TaskItem__button TaskItem__button--green">
            Done
          </button>
          <span className="TaskItem__text">{task.text}</span>
        </div>
        <div className="TaskItem__item TaskItem__item--right">
          <button
            className="TaskItem__button TaskItem__button--grey"
            onClick={this.handleEdit}
          >
            Edit
          </button>
          <button
            className="TaskItem__button TaskItem__button--red TaskItem__button--last"
            onClick={() => deleteItem(task.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}
