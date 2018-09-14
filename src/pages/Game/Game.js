import React, {Component} from "react";
import Form from "./Form.js";
// import Puzzle from "./Puzzle.js";

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue:"",
      cellValue: [1, 2, 3, 4, 5, 6, 7, 8, ""]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSwitch = this.handleSwitch.bind(this);
  }

  componentDidMount(){
    this.initCellValue();
  }
  initCellValue(){
    let cellValue = this.state.cellValue.sort(() => Math.random() - 0.5);
    this.setState({cellValue: cellValue});
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
  replaceNum(index, value){
    let cellValue = this.state.cellValue;
    cellValue[index] = value;
    this.setState({cellValue: cellValue});
  }
  handleSwitch(i){
    console.log("click index : " + i);
    let curNum = this.state.cellValue[i];
    let leftNum = this.state.cellValue[i -1];
    let rightNum = this.state.cellValue[i + 1];
    let topNum = this.state.cellValue[i - 3];
    let bottomNum = this.state.cellValue[i + 3];

    console.log(curNum, leftNum, rightNum, topNum, bottomNum);
    if(leftNum === "" && i % 3){
      this.replaceNum(i - 1, curNum);
      this.replaceNum(i, "");
    } 
    else if(rightNum === "" && 2 !== i % 3){
      this.replaceNum(i + 1, curNum);
      this.replaceNum(i, "");
    }
    else if(topNum === ""){
      this.replaceNum(i - 3, curNum);
      this.replaceNum(i, "");
    }
    else if(bottomNum === ""){
      this.replaceNum(i + 3, curNum);
      this.replaceNum(i, "");
    }    
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
        <ul className="board">
          {this.state.cellValue.map((item, i) => {
            return <li className="cell" key={i} onClick={() => this.handleSwitch(i)}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}
