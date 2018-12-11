import React, { Component } from 'react'
//import Counter from '../Counter/Counter'


class ResultadosQS extends Component {

    constructor(props){
        super(props)

        this.state = {
            dados: ''
        }
    }

    componentDidMount(){
        let soma = 0;
        if (localStorage.getItem("terceiraSecaoPrimeiraPergunta") === "sim") {
            soma += 50;
        } 
        if (localStorage.getItem("terceiraSecaoSegundaPergunta") === "sim") {
            soma += 50;
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

export default ResultadosQS 