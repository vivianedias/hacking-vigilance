import React, { Component } from 'react'
//import Counter from '../Counter/Counter'


class ResultadosSS extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dados: ''
        }

        this.somar = this.somar.bind(this)
    }

    componentDidMount() {
        let soma = 0;
        if (localStorage.getItem("segundaSecaoPrimeiraPergunta") === "sim") {
            soma += 20;
        }
        if (localStorage.getItem("segundaSecaoSegundaPergunta") === "nao") {
            soma += 20;
        }
        if (localStorage.getItem("segundaSecaoTerceiraPergunta") === "sim") {
            soma += 20;
        }
        if (localStorage.getItem("segundaSecaoQuartaPergunta") === "sim") {
            soma += 20;
        }
        if (localStorage.getItem("segundaSecaoQuintaPergunta") === "sim") {
            soma += 20;
        }
        soma = Math.floor(soma)
        this.somar(soma)

    }

    somar = (soma) => {
        this.setState({ dados: soma })
    }

    render() {
        return (
            <section>
                <p>
                    {this.state.dados}
                </p>
            </section>
        )
    }
}

export default ResultadosSS