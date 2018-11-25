import React, { Component } from 'react'
import Pergunta from '../Pergunta/Pergunta'
import './PrimeiraSecao.css'

class PrimeiraSecao extends Component {

  render() {
    return (
      <div className="primeira-secao__container">
        <form>
          <h1 id="primeiraSecao">Conectada na Internet</h1>
            <Pergunta 
            title="Você utiliza como navegador padrão, Mozilla ou Opera?"
            handleChange={this.handleChange}
            name="primeiraPergunta"
            required
            />
            <Pergunta 
            title="Você utiliza extensões (add-ons) do navegador que melhoram sua segurança?"
            handleChange={this.handleChange}
            name="segundaPergunta"
            required
            />
            <Pergunta 
            title="Você utiliza o Google como seu mecanismo de busca padrão?"
            handleChange={this.handleChange}
            name="terceiraPergunta"
            required
            />
            <Pergunta 
            title="Você utiliza VPN?"
            handleChange={this.handleChange}
            name="quartaPergunta"
            required
            />
            <Pergunta 
            title="Você utiliza algum serviço de compartilhamento de dados que se preocupe com a segurança/criptografia dos usuários como Mega, Nextcloud, etc?"
            name="quintaPergunta"
            handleChange={this.handleChange}
            required
            />
            <Pergunta 
            title="Você utiliza Wi-Fi's públicos?"
            name="sextaPergunta"
            handleChange={this.handleChange}
            required
            />
        </form>
      </div>
    )
  }
}

export default PrimeiraSecao
