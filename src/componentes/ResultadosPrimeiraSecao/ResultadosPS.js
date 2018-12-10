import React, { Component } from 'react'
//import Counter from '../Counter/Counter'
import './ResultadosPS.css'


class ResultadosPS extends Component {

    constructor(props){
        super(props)
        this.somaPrimeiraSecao = this.somaPrimeiraSecao.bind(this);
        this.state = {
            data: [
                ""
            ]
        }
    }

    somaPrimeiraSecao = () => {
        let soma = 0;
        if (localStorage.getItem("primeiraSecaoPrimeiraPergunta") === "sim") {
            soma += 1;
        } else if (localStorage.getItem("primeiraSecaoSegundaPergunta") === "sim") {
            soma += 1;
        } else if (localStorage.getItem("primeiraSecaoTerceiraPergunta") === "nao") {
            soma += 1;
        } else if (localStorage.getItem("primeiraSecaoQuartaPergunta") === "sim") {
            soma += 1;
        } else if (localStorage.getItem("primeiraSecaoQuintaPergunta") === "sim") {
            soma += 1;
        } else if (localStorage.getItem("primeiraSecaoSextaPergunta") === "nao") {
            soma += 1;
        } return soma
    }

    mudandoValor = () => {
        this.setState({ data: [ this.somaPrimeiraSecao ] })
    }

    render() {
        return (
            <div>
                <p onChange={this.mudandoValor}>
                    {this.state.data}
                </p>
            </div>
        )
    }
}

export default ResultadosPS 