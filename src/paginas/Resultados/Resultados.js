import React, { Component } from 'react'
import Navbar from '../../componentes/Navbar/Navbar'
import ResultadosPS from '../../componentes/ResultadosPrimeiraSecao/ResultadosPS'
import ResultadosSS from '../../componentes/ResultadosSegundaSecao/ResultadosSS'
import ResultadosTS from '../../componentes/ResultadosTerceiraSecao/ResultadosTS'
import ResultadosQS from '../../componentes/ResultadosQuartaSecao/ResultadosQS'
import './Resultados.css'

class Resultados extends Component {

    render() {
        return (
            <section className="restultados-container">
                <Navbar />
                <div className="resultados-content">
                    <h1 className="resultados-title">Resultados</h1>
                        <h2 className="resultados-section_titles">Primeira Seção</h2>
                            <ResultadosPS />
                        <h2 className="resultados-section_titles">Segunda Seção</h2>
                            <ResultadosSS />
                        <h2 className="resultados-section_titles">Terceira Seção</h2>
                            <ResultadosTS />
                        <h2 className="resultados-section_titles">Quarta Seção</h2>
                            <ResultadosQS />
                </div>
            </section>
        )
    }
}

export default Resultados