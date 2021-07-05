import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
// import './styles.scss';

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

  render() {
    return (
      <div className="App">
        <div className="Header">
          <h1>Todo App</h1>
        </div>
        {/* <div className="Form-Container">
          <TodoForm 
          
          />
        </div>
        <TodoList 
        
        /> */}
      </div>
    );
  }
}

export default App;
