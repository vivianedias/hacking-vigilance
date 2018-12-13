import React, { Component } from 'react'

class CounterTS extends Component {

    constructor(props){
        super(props)

        this.state = {
            dados: ''
        }

        this.somar = this.somar.bind(this)
    }

    componentDidMount(){
        let soma = 0;
        if (localStorage.getItem("terceiraSecaoPrimeiraPergunta") === "sim") {
            soma += 25;
        } 
        if (localStorage.getItem("terceiraSecaoSegundaPergunta") === "sim") {
            soma += 25;
        } 
        if (localStorage.getItem("terceiraSecaoTerceiraPergunta") === "nao") {
            soma += 25;
        } 
        if (localStorage.getItem("terceiraSecaoQuartaPergunta") === "sim") {
            soma += 25;
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
                <p>
                    {this.state.dados} pontos
                </p>
            </div>
        )
    }
}

export default CounterTS 