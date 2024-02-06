import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    console.log("Constructor");
    super();
    this.state = { count: 0 };
  }

  handleClick = () => {
    this.componentWillUnmount();
  };

  handelDoubleClick = () => {
    this.componentDidMount();
  };
  componentWillUnmount() {
    console.log("Component Will Unmount Method");
    clearInterval(this.interval);
  }

  componentDidMount() {
    console.log("Component Did Mount Method");
    this.interval = setInterval(() => {
      this.setState((p) => ({ count: p.count + 1 }));
    }, 1000);
  }

  render() {
    console.log("Render Method");
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button
          onClick={this.handleClick}
          onDoubleClick={this.handelDoubleClick}
        >
          Stop
        </button>
      </div>
    );
  }
}
