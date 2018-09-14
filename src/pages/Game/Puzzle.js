import React, { Component } from "react";
import PropTypes from "prop-types";

class Puzzle extends Component{
  render(){
    return (
      <div className="board">
        <div className="cell" Style="left: 0px; top: 0px;" 
          onClick={(e) => this.props.handleSwitch(e)}>
          {this.props.cellValue[0]}
        </div>
        <div className="cell"  Style="left: 100px; top: 0px;" 
          onClick={(e) => this.props.handleSwitch(e)}>
          {this.props.cellValue[1]}
        </div>
        <div className="cell" Style="left: 200px; top: 0px;" 
          onClick={(e) => this.props.handleSwitch(e)}>
          {this.props.cellValue[2]}
        </div>
        <div className="cell" Style="left: 0px; top: 100px;" 
          onClick={(e) => this.props.handleSwitch(e)}>
          {this.props.cellValue[3]}
        </div>
        <div className="cell" Style="left: 100px; top: 100px;" 
          onClick={(e) => this.props.handleSwitch(e)}>
          {this.props.cellValue[4]}
        </div>
        <div className="cell" Style="left: 200px; top: 100px;" 
          onClick={(e) => this.props.handleSwitch(e)}>
          {this.props.cellValue[5]}
        </div>
        <div className="cell" Style="left: 0px; top: 200px;" 
          onClick={(e) => this.props.handleSwitch(e)}>
          {this.props.cellValue[6]}
        </div>
        <div className="cell" Style="left: 100px; top: 200px;" 
          onClick={(e) => this.props.handleSwitch(e)}>
          {this.props.cellValue[7]}
        </div>
        <div className="cell" Style="left: 200px; top: 200px;" 
          onClick={(e) => this.props.handleSwitch(e)}>
          {this.props.cellValue[8]}
        </div>     
      </div>
    );
  }
}

Puzzle.propTypes ={
  cellValue: PropTypes.array.isRequired,
  handleSwitch: PropTypes.func.isRequired
};

export default Puzzle;


