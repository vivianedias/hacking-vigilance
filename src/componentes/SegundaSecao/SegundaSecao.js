import React, { Component } from 'react'
import Pergunta from '../Pergunta/Pergunta'
import './SegundaSecao.css'

class SegundaSecao extends Component {

  render() {
    return (
      <div>
        <form>
          <h1 id="segundaSecao">Contas Online</h1>
            <Pergunta 
            title="Você utiliza autenticação de dois passos em suas redes sociais e/ou e-mail?"
            handleChange={this.handleChange}
            name="primeiraPergunta"
            required
            />
            <Pergunta 
            title="Você posta sua localização nas redes sociais?"
            handleChange={this.handleChange}
            name="segundaPergunta"
            required
            />
            <Pergunta 
            title="Você utiliza provedores de e-mail como ProtonMail ou Riseup"
            handleChange={this.handleChange}
            name="terceiraPergunta"
            required
            />
            <Pergunta 
            title="Você utiliza mais de um e-mail para diferentes serviços?"
            handleChange={this.handleChange}
            name="quartaPergunta"
            required
            />
            <Pergunta 
            title="Você utiliza mais de uma senha para diferentes serviços?"
            name="quintaPergunta"
            handleChange={this.handleChange}
            required
            />
        </form>
      </div>
    )
  }
}

export default SegundaSecao
