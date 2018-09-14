import React, { Component } from "react";
import PropTypes from "prop-types";

class Form extends Component{
  render(){
    const { inputValue } = this.props;
    const inEnabled = inputValue.length > 0;
    return (
      <div className="formContainer">
        <form onSubmit={(e) => this.props.handleSubmit(e)}>
          <input
            type="text"      
            onChange={(e) => this.props.handleChange(e)}
            value={this.props.inputValue}
            placeholder="Enter your task here ......"
          />
          <input disabled={!inEnabled} type="submit" value="" / >
        </form>
      </div>
    );
  }
}

Form.propTypes ={
  inputValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default Form;
