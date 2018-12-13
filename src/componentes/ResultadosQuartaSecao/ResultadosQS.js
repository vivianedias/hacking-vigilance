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
        let primeiraPergunta;
            if (localStorage.getItem("quartaSecaoPrimeiraPergunta") === "nao") {
                primeiraPergunta =
                    <div>
                        <h3 className="secaoTitle"></h3>
                            <ul className="secaoContent">
                                <li>
                                </li>
                            </ul>
                    </div>
            } 
    
            let segundaPergunta;
            if (localStorage.getItem("quartaSecaoSegundaPergunta") === "nao"){
                segundaPergunta = 
                    <div>
                        <h3 className="secaoTitle"></h3>
                        <ul className="secaoContent">
                            <li>
                            </li>
                        </ul>
                    </div>
            } 
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