import React, { Component } from "react";
import PropTypes from "prop-types";

import Task from "./Task.js";

class List extends Component{  
  render(){
    function createTask(index, handleFinish, todo, handleDelete){
      return (
        <Task
          key={index}
          index={index}
          handleFinish={handleFinish}
          todo={todo}
          handleDelete={handleDelete}
        />
      );
    }
    return (
      <div className="listContainer">
        {this.props.todos.map((todo,index) => {
          if(this.props.tabs === "All"){            
            return createTask(index, this.props.handleFinish, todo, this.props.handleDelete);            
          }         
          else if(todo.done === (this.props.tabs === "Done" ? true : false)){
            return createTask(index, this.props.handleFinish, todo, this.props.handleDelete);      
          }          
        })}
      </div>     
    );    
  }
}

List.propTypes = {
  todos: PropTypes.array.isRequired,
  handleFinish: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  tabs: PropTypes.string.isRequired
};

export default List;
