import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../style.css";

class Tab extends Component{
  render(){
    console.log(this.props.tabs);
    let tabOption = ["All", "Undone", "Done"];
    let createAllTabs = tabOption.map((tab, index) => {
      return (
        <input     
          key={index}
          className={this.props.tabs === tab ? "ActiveTab" : "Tab"}       
          type="button" 
          onClick={(e) => this.props.handleTabs(e)}          
          value={tab} 
        />
      );
    });
    return (
      <div className="tabContainer">
        {createAllTabs}
      </div>
    );
  }
}

Tab.propTypes = {
  tabs: PropTypes.string.isRequired,
  handleTabs: PropTypes.func.isRequired,
};

export default Tab;
