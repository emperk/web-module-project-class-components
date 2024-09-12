import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

// - `<App />` will hold all the data needed for this project. It will also be the container for your Todo Components.
//   - All of your application data will be stored here on `<App />`.
//   - All of your `handler` functions should live here on `<App />`.

const todos = [
  {
    id: 0,
    name: 'organize notes',
    completed: false,
  },
  {
    id: 1, 
    name: 'work on module project',
    completed: false,
  },
  {
    id: 2,
    name: 'study for sprint challenge',
    completed: false
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: todos
    }
  }

  toggleTodo = id => {
    this.setState({
      ...this.state.todos,
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return ({
            ...todo,
            completed: !todo.completed
          })
        } else {
          return todo
        }
      })
    });
  }

  addTodo = name => {
    const newTodo = {
      name: name,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  clearPurchased = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return todo.completed === false
      })
    });
  }

  render() {
    return (
      <div className="app">
        <div className="header">
          <h1>Todo App</h1>
          <TodoForm 
            addTodo={this.addTodo}
          />
        </div>
        <TodoList 
          clearPurchased={this.clearPurchased}
          toggleTodo={this.toggleTodo}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;

