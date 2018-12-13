import React, { Component } from 'react'
import Pergunta from '../Pergunta/Pergunta'
import './SegundaSecao.css'

class SegundaSecao extends Component {

  render() {
    return (
      <div className="segunda-secao__container">
        <h1 id="segundaSecao" className="header_secoes">Contas Online</h1>
        <Pergunta
          title="Você utiliza autenticação de dois passos em suas redes sociais e/ou e-mail?"
          name="segundaSecaoPrimeiraPergunta"
        />
        <Pergunta
          title="Você posta sua localização nas redes sociais?"
          name="segundaSecaoSegundaPergunta"
        />
        <Pergunta
          title="Você utiliza algum provedor de e-mail com criptografia ponta-a-ponta? "
          name="segundaSecaoTerceiraPergunta"
        />
        <Pergunta
          title="Você utiliza mais de um e-mail para diferentes serviços?"
          name="segundaSecaoQuartaPergunta"
        />
        <Pergunta
          title="Você utiliza diferentes senhas em diferentes contas?"
          name="segundaSecaoQuintaPergunta"
        />
      </div>
    )
  }
}

export default SegundaSecao
