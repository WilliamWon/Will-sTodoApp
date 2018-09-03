import React, { Component } from "react";
import styled from "styled-components";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      input: ""
    };
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleInputChange(val) {
    this.setState({ input: val });
  }
  handleAddTask() {
    const { list, input } = this.state;
    this.setState({
      list: [...list, input],
      input: ""
    });
  }
  render() {
    const { list } = this.state;
    let todoList = list.map((e, i) => {
      return <p>{e}</p>;
    });
    return (
      <div>
        <input
          value={this.state.input}
          placeholder="Enter Task Here"
          onChange={e => this.handleInputChange(e.target.value)}
        />
        <button onClick={this.handleAddTask}>Add</button>
        <br />
        {todoList}
      </div>
    );
  }
}

export default TodoList;
