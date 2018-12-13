import React, { Component } from 'react'
import '../../paginas/Resultados/Resultados.css'


class CounterPS extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dados: ''
        }

        this.somar = this.somar.bind(this)
    }

    componentDidMount() {
        let soma = 0;
        if (localStorage.getItem("primeiraSecaoPrimeiraPergunta") === "sim") {
            soma += 16.666666667;
        }
        if (localStorage.getItem("primeiraSecaoSegundaPergunta") === "sim") {
            soma += 16.666666667;
        }
        if (localStorage.getItem("primeiraSecaoTerceiraPergunta") === "nao") {
            soma += 16.666666667;
        }
        if (localStorage.getItem("primeiraSecaoQuartaPergunta") === "sim") {
            soma += 16.666666667;
        }
        if (localStorage.getItem("primeiraSecaoQuintaPergunta") === "sim") {
            soma += 16.666666667;
        }
        if (localStorage.getItem("primeiraSecaoSextaPergunta") === "nao") {
            soma += 16.666666667;
        } 
        
        soma = Math.floor(soma)
        this.somar(soma)
    }

    somar = (soma) => {
        this.setState({ dados: soma })
    }

    render() {
        return (
            <div>
                    <p className="counter">
                        {this.state.dados} pontos
                    </p>
            </div>
        )
    }
}


export default CounterPS
