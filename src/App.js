import React, { Component } from "react";
import Home from "./pages/home/Home";
import "./template/assets/css/normalize.css";
import "./template/assets/css/style.css";
import "./template/assets/css/template.css";
import Passo1 from "./pages/cadastro/passo1/Passo1";
import Cadastro from "./pages/cadastro/Cadastro";

export default class App extends Component {
    render() {
        return (
            <>
                {/* <Home /> */}
                <Cadastro />
            </>
        )
    }
}
