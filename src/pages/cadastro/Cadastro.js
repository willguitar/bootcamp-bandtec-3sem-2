import React, { Component } from 'react';
import Passo1 from './passo1/Passo1';

export default class Cadastro extends Component {
    constructor(props) {
        super(props)

        this.state = {
            actualPage: 0,
            info: []
        }
    }


    handleChangePage = (page, data) => {

        const state = Object.assign({}, this.state)

        state.actualPage = page
        state.info.push(data)

        this.setState(state)

    }

    handleActualPage = () => {
        switch (this.state.actualPage) {
            case 1:
                return <h1>Pagina 02</h1>
            case 2:
                return <h1>Pagina 03</h1>
            default:
                return <Passo1 change={this.handleChangePage} />
        }
    }


    render() {
        return (
            this.handleActualPage()
        )
    }
}
