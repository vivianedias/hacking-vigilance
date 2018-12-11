import React, { Component } from 'react'
import Pergunta from '../Pergunta/Pergunta'
import './TerceiraSecao.css'
class TerceiraSecao extends Component {

  render() {
    return (
      <div className="terceira-secao__container">
        <h1 id="terceiraSecao" className="header_secoes">Mobile</h1>
        <Pergunta
          title="Você utiliza alguns desses dois aplicativos: Signal ou Wire? "
          name="terceiraSecaoPrimeiraPergunta"
        />
        <Pergunta
          title="Você já criptografou seu celular?"
          name="terceiraSecaoSegundaPergunta"
        />
        <Pergunta
          title="Você fornece acesso a câmera, contatos e/ou microfone do aparelho (entre outros) à aplicativos, indiscriminadamente?"
          name="terceiraSecaoTerceiraPergunta"
        />
        <Pergunta
          title="Caso você seja um usuário Android, você utiliza o bloqueio padrão do aparelho (estilo ligue o pontos)?"
          name="terceiraSecaoQuartaPergunta"
        />
      </div>
    )
  }
}

export default TerceiraSecao
