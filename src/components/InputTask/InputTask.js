import React, { Component } from "react";
import styles from "./InputTask.module.scss";

export default class InputTask extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     toggle: true,
  //   };
  // }
  state = {
    task: "",
    tasks: [],
  };
  render() {
    const { task } = this.state;
    return (
      <div className={styles.InputTask}>
        <input
          value={task}
          placeholder="Input your task"
          onChange={(e) => {
            this.setState((state, props) => ({
              task: e.target.value,
            }));
          }}
        />
      </div>
    );
  }
}
