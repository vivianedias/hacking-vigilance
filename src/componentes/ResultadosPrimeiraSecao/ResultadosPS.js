import React, { Component } from 'react'
//import Counter from '../Counter/Counter'
import './ResultadosPS.css'


class ResultadosPS extends Component {

    constructor(props){
        super(props)
        this.somaPrimeiraSecao = this.somaPrimeiraSecao.bind(this);
        this.state = {
            data: [
                this.somaPrimeiraSecao
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

    handleChange = () => {
        this.setState({  })
    }

    render() {
        console.log(this.somaPrimeiraSecao.value)
        return (
            <div>
                <p>
                    Olá resultados primeira secao
                </p>
            </div>
        )
    }
}

export default ResultadosPS 