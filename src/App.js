import React, { Component } from "react";
import "./App.css";
import { Form } from "./Form.js";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.setState({ mounted: true });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ mounted: false });
    // console.log("Submission Successful");
  }

  render() {
    const { mounted } = this.state;
    return (
      <div className="App">
        <ReactCSSTransitionGroup
          transitionName="formTransition"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {mounted ? <Form onSubmit={this.handleSubmit} /> : <div />}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
