import React from 'react'
import './Containers.css'

function Containers(props) {
    return (
        <div className="floating-containers card">
            <img className="container-img rounded mx-auto d-block" src={props.image} alt="ICONS" />
            <h3 className="titulo-container">{props.titulo}</h3>
            <p className="texto-container">{props.texto}</p>
        </div>
    )
}

export default Containers