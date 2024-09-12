// - `<Todo />` is a component that takes in the `todo` data and displays the task to the screen.

import React from "react";

const Todo = props => {

  const handleClick = () => {
    console.log("the todo", props.todo.id)
    props.toggleTodo(props.todo.id);
  }

  return (
    <div
      onClick={handleClick}
      className={`todo${props.todo.completed ? 'completed' : ''}`}
    >
      <p>{props.todo.name}</p>
    </div>
  )
}

export default Todo;