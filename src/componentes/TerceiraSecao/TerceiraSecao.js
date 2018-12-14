import React, { Component } from 'react'
import Pergunta from '../Pergunta/Pergunta'
class TerceiraSecao extends Component {

  render() {
    return (
      <div>
        <h1 id="terceiraSecao" className="header_secoes">Mobile</h1>
        <Pergunta
          title="12. Você utiliza alguns desses dois aplicativos de mensagem instantânea: Signal ou Wire? "
          name="terceiraSecaoPrimeiraPergunta"
        />
        <Pergunta
          title="13. Você já criptografou seu celular?"
          name="terceiraSecaoSegundaPergunta"
        />
        <Pergunta
          title="14. Você fornece acesso a câmera, contatos e/ou microfone do aparelho (entre outros) à aplicativos, indiscriminadamente?"
          name="terceiraSecaoTerceiraPergunta"
        />
        <Pergunta
          title="15. Caso você seja um usuário Android, você utiliza o bloqueio padrão do aparelho (estilo ligue o pontos)?"
          name="terceiraSecaoQuartaPergunta"
        />
      </div>
    )
  }
}

export default TerceiraSecao
