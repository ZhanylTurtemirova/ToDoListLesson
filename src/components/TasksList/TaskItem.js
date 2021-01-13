import React, { Component } from "react";
import "./TaskItem.scss";

export default class TaskItem extends Component {
  state = {
    text: this.props.task.text,
    readonly: true,
    btnName: "Edit",
  };
  handleClick = () => {
    this.props.getData("someData");
  };

  handleEdit = () => {
    if (this.state.readonly === true) {
      this.setState({ readonly: false, btnName: "Save" });
    } else {
      this.setState({ readonly: true, btnName: "Edit" });
      this.props.editItem(this.props.task);
    }
  };

  render() {
    const { task, deleteItem } = this.props;

    return (
      <div className="TaskItem">
        <div className="TaskItem__item TaskItem__item--left">
          <button className="TaskItem__button TaskItem__button--green">
            Done
          </button>
          <input
            className="TaskItem__text"
            type="text"
            value={this.state.text}
            readonly={this.state.readonly}
            onChange={(e) => {
              if (this.state.readonly === false)
                this.setState({ text: e.target.value });
            }}
          />
          {/* <span className="TaskItem__text">{task.text}</span> */}
        </div>
        <div className="TaskItem__item TaskItem__item--right">
          <button
            className="TaskItem__button TaskItem__button--grey"
            onClick={this.handleEdit}
          >
            {this.state.btnName}
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
