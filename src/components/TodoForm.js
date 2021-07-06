// - `<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.
//   - Your input field should take in user input, and allow a user to press `Enter` or click on the `Submit Button` to add a todo to your list.
//   - Once a todo is submitted, the Todo List should re-render and show the added todo.

import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ""
    }
  }

  handleChanges = event => {
    this.setState({
      input: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state.input);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          onChange={this.handleChanges}
          type="text"
          name="todo"
          placeholder="type next todo here"
        />
        <button>Add Todo</button>
      </form>
    )
  }
}

export default TodoForm;