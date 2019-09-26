import React, { Component } from "react";

export default class Component2 extends Component {
    render() {
        return (
            <>
            <h1>Nome:{this.props.name}</h1>
            <h2>Idade:{this.props.idade}</h2>
            </>
        )
    }
}