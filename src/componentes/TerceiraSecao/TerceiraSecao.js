import React, { Component } from 'react'
import Pergunta from '../Pergunta/Pergunta'
import './TerceiraSecao.css'
class TerceiraSecao extends Component {

  render() {
    return (
      <div>
        <form>
          <h1 id="terceiraSecao">Mobile</h1>
            <Pergunta 
            title="Você utiliza alguns desses dois aplicativos: Signal ou Wire? "
            handleChange={this.handleChange}
            name="primeiraPergunta"
            required
            />
            <Pergunta 
            title="Você já criptografou seu celular?"
            handleChange={this.handleChange}
            name="segundaPergunta"
            required
            />
            <Pergunta 
            title="Você fornece acesso a câmera, contatos e/ou microfone do aparelho (entre outros) à aplicativos, indiscriminadamente?"
            handleChange={this.handleChange}
            name="terceiraPergunta"
            required
            />
            <Pergunta 
            title="Caso você seja um usuário Android, você utiliza o bloqueio padrão do aparelho (estilo ligue o pontos)?"
            handleChange={this.handleChange}
            name="quartaPergunta"
            required
            />
        </form>
      </div>
    )
  }
}

export default TerceiraSecao
