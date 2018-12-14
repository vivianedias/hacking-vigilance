import React, { Component } from 'react'
import Pergunta from '../Pergunta/Pergunta'

class QuartaSecao extends Component {

  render() {
    return (
      <div>
        <h1 id="quartaSecao" className="header_secoes">Desktop</h1>
        <Pergunta
          title="Você utiliza algum distro Linux?"
          name="quartaSecaoPrimeiraPergunta"
        />
        <Pergunta
          title="Você se preocupa em tampar sua Webcam e checar se seu microfone do computador está desligado?"
          name="quartaSecaoSegundaPergunta"
        />
      </div>
    )
  }
}

export default QuartaSecao
