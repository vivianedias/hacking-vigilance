import React, { Component } from 'react'
import Pergunta from '../Pergunta/Pergunta'

class SegundaSecao extends Component {

  render() {
    return (
      <div>
        <h1 id="segundaSecao" className="header_secoes">Contas Online</h1>
        <Pergunta
          title="7. Você utiliza autenticação de dois passos em suas redes sociais e/ou e-mail?"
          name="segundaSecaoPrimeiraPergunta"
        />
        <Pergunta
          title="8. Você posta sua localização nas redes sociais?"
          name="segundaSecaoSegundaPergunta"
        />
        <Pergunta
          title="9. Você utiliza algum provedor de e-mail com criptografia ponta-a-ponta? "
          name="segundaSecaoTerceiraPergunta"
        />
        <Pergunta
          title="10. Você utiliza mais de um e-mail para diferentes serviços?"
          name="segundaSecaoQuartaPergunta"
        />
        <Pergunta
          title="11. Você utiliza diferentes senhas em diferentes contas?"
          name="segundaSecaoQuintaPergunta"
        />
      </div>
    )
  }
}

export default SegundaSecao
