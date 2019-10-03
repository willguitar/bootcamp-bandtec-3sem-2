import React, { Component } from "react";
import Component2 from "./Component2";
import Button from './Button';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      actualBtn: ''
    }
  }

  handleChange = (name) => {
    this.setState({
      actualBtn: name
    })
  }


  render() {
    console.log(this.state)
    return (
      <>
        <Component2 name={this.state.actualBtn} />
        <Component2 idade="24" />
        <Component2 name="jesus" /> 
        <Button change={this.handleChange} name="Clique no botão"></Button>
      </>
    )
  }
}