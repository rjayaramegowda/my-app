import React, { Component } from "react";
import axios from "./axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  async componentWillMount() {
    console.log("init()");
    try {
      const { data } = await axios.get("users");
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount() {}

  render() {
    return <div></div>;
  }
}

export default App;
