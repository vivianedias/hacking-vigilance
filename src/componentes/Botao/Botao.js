import React from 'react'
import './Botao.css'

function Botao(props) {
  let classes = "myButton hvr-grow-shadow"

  if (props.desabilitado) {
    classes += " botao--desabilitado"
  }
  
  return (
    <button onClick={props.url} className={classes} disabled={props.desabilitado}>
      {props.children}
    </button>
  )
}

export default Botao