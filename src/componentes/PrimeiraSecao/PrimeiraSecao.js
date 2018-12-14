import React, { Component } from 'react'
import Pergunta from '../Pergunta/Pergunta'

class PrimeiraSecao extends Component {

  render() {
    return (
      <div>
        <h1 id="primeiraSecao" className="header_secoes">Conectada na Web</h1>
        <Pergunta
          title="Você utiliza como navegador padrão, Mozilla ou Opera?"
          name="primeiraSecaoPrimeiraPergunta"
        />
        <Pergunta
          title="Você utiliza extensões (add-ons) do navegador que melhoram sua segurança?"
          name="primeiraSecaoSegundaPergunta"
        />
        <Pergunta
          title="Você utiliza o Google como seu mecanismo de busca padrão?"
          name="primeiraSecaoTerceiraPergunta"
        />
        <Pergunta
          title="Você utiliza VPN?"
          name="primeiraSecaoQuartaPergunta"
        />
        <Pergunta
          title="Você utiliza algum serviço de compartilhamento de dados que se preocupe com a segurança/criptografia dos usuários como Mega, Nextcloud, etc?"
          name="primeiraSecaoQuintaPergunta"
        />
        <Pergunta
          title="Você utiliza Wi-Fi's públicos sem nenhuma proteção extra?"
          name="primeiraSecaoSextaPergunta"
        />
      </div>
    )
  }
}

export default PrimeiraSecao
