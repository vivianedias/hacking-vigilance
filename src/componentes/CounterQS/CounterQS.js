import React, { Component } from 'react'
import CountUp from 'react-countup';

class CounterQS extends Component {

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
            <div>
                <CountUp
                className="counter"
                start={0}
                end={this.state.dados}
                duration={5}
                separator=" "
                suffix=" pontos"
                onEnd={() => console.log('Ended! 👏')}
                onStart={() => console.log('Started! 💨')}
                />
            </div>
        )
    }
}

export default CounterQS 