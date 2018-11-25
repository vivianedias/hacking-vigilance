import React, { Component } from 'react'
import Radio from '@material-ui/core/Radio';
import Legenda from '../Legenda/Legenda'
import './Pergunta.css'

class Pergunta extends Component  {
    constructor(props){
        super(props)
        this.state = {
            selectedOption: '',
          }
          
          this.handleChange = this.handleChange.bind(this) 
    }

    handleChange = (changeEvent) => {
        this.setState({ selectedOption: changeEvent.target.value })
      }
      

    render(){

        return (
            <section>
                <p>{this.props.title}</p>
                <Legenda htmlFor="sim">Sim</Legenda>
                    <Radio value="sim" name={this.props.name} checked={this.state.selectedOption === 'sim'} onChange={this.handleChange} color="primary" />
                <Legenda htmlFor="nao">Não</Legenda>
                    <Radio value="nao" name={this.props.name} checked={this.state.selectedOption === 'nao'} onChange={this.handleChange} color="primary" />
                { /* preciso de uma terceira opção variável
                    if this.props.name === "android"
                    > tal resposta
                */}
            </section>
    
        )
    }
}



export default Pergunta
