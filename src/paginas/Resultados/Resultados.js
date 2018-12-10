import React, { Component } from 'react'
import Navbar from '../../componentes/Navbar/Navbar'
import ResultadosPS from '../../componentes/ResultadosPrimeiraSecao/ResultadosPS'
import './Resultados.css'

class Resultados extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <h1>Resultados</h1>
                <h2>Primeira Seção</h2>
                    <ResultadosPS></ResultadosPS>
                <h2>Segunda Seção</h2>
                <h2>Terceira Seção</h2>
                <h2>Quarta Seção</h2>
            </div>
        )
    }
}

export default Resultados