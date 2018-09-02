import React, { Component } from "react";
import PropTypes from "prop-types";

class Task extends Component{  
  render(){
    return (
      <div className="taskContainer">
        <input 
          type="checkbox" 
          checked={this.props.todo.done} 
          onChange={() => this.props.handleFinish(this.props.index)}>
        </input>
        <span>
          <span className={this.props.todo.done ? "strike" : "beforeStrike"}>
            {this.props.todo.value}
          </span>     
        </span>
        <button onClick={(e) => this.props.handleDelete(e, this.props.index)} />
      </div>
    );
  }
}

Task.propTypes = {
  todo: PropTypes.object.isRequired,
  handleFinish: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default Task;
