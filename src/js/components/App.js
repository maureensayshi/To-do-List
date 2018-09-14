import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import Form from "./Form";
import List from "./List";
import Tab from "./Tab";
import "../../style.css";

console.log(createStore);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      todos: [
        {value: "task sample 1", done: false}, 
        {value: "task sample 2", done: true}
      ],
      tabs: "All"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFinish = this.handleFinish.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleTabs = this.handleTabs.bind(this);
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({inputValue: e.target.value});    
  }
  handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      value: this.state.inputValue,
      done: false
    };
    const todos = this.state.todos;
    todos.push(newTodo);
    this.setState({ todos: todos, inputValue: ""}); // todos 只要放一個，因為 ES6 若 key 和 value 相同，放一個即可
  }
  handleFinish(index){
    const todos = this.state.todos;
    //use status (true / false) of todo.done to control checked status of checkbox and style of task content
    todos[index].done = !todos[index].done;
    this.setState({todos});
    console.log(todos);
  }
  handleDelete(e, index){
    e.preventDefault();
    const todos = this.state.todos;
    todos.splice(index, 1);
    this.setState({todos});
    console.log(todos);
  }
  handleTabs(e){
    e.preventDefault();    
    this.setState({tabs: e.target.value});
  }
  render(){ 
    return (
      <div>
        <div>
          <span></span>
          <h1>Make your To-Do List</h1>
        </div>        
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          inputValue={this.state.inputValue}
        />
        <Tab
          tabs={this.state.tabs}
          handleTabs={this.handleTabs}
        />
        <List
          handleFinish={this.handleFinish}
          todos={this.state.todos}
          handleDelete={this.handleDelete}
          tabs={this.state.tabs}
        />        
      </div>
    );
  }
}
export default App;

ReactDOM.render(<App />, document.querySelector(".appContainer"));
