import React, { Component } from 'react'


class Counter extends Component {
    constructor(props){
        super(props);
        this.pontuacao = this.pontuacao.bind(this);
    }

    

    pontuacao = (contador, peso) => {
        return contador * peso
    }
    
    render() {
        return (
            <div>
                <p>{this.pontuacao}</p>
            </div>
        )
    }
}

export default Counter 