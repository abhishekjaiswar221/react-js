// createRef()-->Method
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.divRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.inputRef);
    console.log(this.divRef);
  }

  handleClick = (e) => {
    e.preventDefault();
    this.divRef.current.className = "demo";
    this.inputRef.current.style.backgroundColor = "greenyellow";
    this.inputRef.current.placeholder = "Enter username";
    this.inputRef.current.style.padding = "8px 16px";
    console.log(this.inputRef.current.value);
  };

  render() {
    return (
      <div ref={this.divRef}>
        <form action="">
          <input
            type="text"
            name="username"
            id="username"
            ref={this.inputRef}
          />
          <br />
          <br />
          <button type="submit" onClick={this.handleClick}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
