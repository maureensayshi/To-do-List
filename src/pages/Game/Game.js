import React, {Component} from "react";
import Form from "./Form.js";

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue:""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({inputValue: e.target.value});
    console.log("inputvalue = " + e.target.value);    
  } 
  handleSubmit(e){
    e.preventDefault();
    console.log("handle submit");    
  }
  render() {
    return (
      <div>  
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          inputValue={this.state.inputValue}
        />
        <div>
          <span className="count">Step Count : </span>
          <span>0</span>
        </div>
      </div>
    );
  }
}
