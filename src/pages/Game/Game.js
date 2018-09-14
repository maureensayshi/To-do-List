import React, {Component} from "react";

export default class Game extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Enter Name" />
        <input type="submit" value="Start Game" />
        <div>
          <span>Step Count : </span>
          <span>0</span>
        </div>
      </div>
    );
  }
}