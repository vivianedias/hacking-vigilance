import React, { Component } from 'react'
import Pergunta from '../Pergunta/Pergunta'

class QuartaSecao extends Component {

  render() {
    return (
      <div>
        <form>
          <h1 id="quartaSecao">Desktop</h1>
            <Pergunta 
            title="Você utiliza algum distro Linux?"
            handleChange={this.handleChange}
            name="primeiraPergunta"
            required
            />
            <Pergunta 
            title="Você se preocupa em tampar sua Webcam e checar se seu microfone do computador está desligado?"
            handleChange={this.handleChange}
            name="segundaPergunta"
            required
            />
        </form>
      </div>
    )
  }
}

export default QuartaSecao
