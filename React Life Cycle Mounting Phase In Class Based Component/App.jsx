import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    console.log("Constructor");
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log("Mounting Phase");
    this.interval = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    console.log("Should Component Update");
    return true;
  }

  //   getSnapshotBeforeUpdate(prevProps, prevState) {
  //       console.log(prevProps, prevState);
  //       return null;
  //   }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}
