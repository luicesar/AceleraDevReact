import React, { Component } from "react";

export default class App extends Component {
  render() {
    const { name } = this.props;
    return <h1>Hello, {name}.</h1>;
  }
}
