import React, { Component } from "react";
import "./TaskItem.scss";

export default class TaskItem extends Component {
  handleClick = () => {
    this.props.getData("someData");
  };
  render() {
    const { task, test, abc } = this.props;
    console.log(">>>", test, abc);

    return (
      <div className="TaskItem">
        <div className="TaskItem__item TaskItem__item--left">
          <button className="TaskItem__button TaskItem__button--green">
            Done
          </button>
          <span className="TaskItem__text">{task}</span>
        </div>
        <div className="TaskItem__item TaskItem__item--right">
          <button
            className="TaskItem__button TaskItem__button--grey"
            onClick={this.handleClick}
          >
            Edit
          </button>
          <button
            className="TaskItem__button TaskItem__button--red TaskItem__button--last"
            onClick={this.handleClick}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}
