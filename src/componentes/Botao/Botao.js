import React, { Component } from 'react'
import './Botao.css'

class Botao extends Component {

  
  
  render(){

    let classes = "btn btn-outline-secondary myButton"

    if (this.props.desabilitado) {
      classes += " botao--desabilitado"
    }

    return (
      <button onClick={this.props.onClick} className={classes} disabled={this.props.desabilitado}>
        {this.props.children}
      </button>
    )
  }
}

export default Botao