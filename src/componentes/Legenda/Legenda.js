import React from 'react'
import './Legenda.css'

function Legenda(props) {
  return (
    <label className="componente_legenda" htmlFor={props.htmlFor}>
      {props.children}
    </label>
  )
}

export default Legenda