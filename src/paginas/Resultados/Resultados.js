import React, { Component } from 'react'
import Navbar from '../../componentes/Navbar/Navbar'
import CounterPS from '../../componentes/CounterPS/CounterPS'
import ResultadosPS from '../../componentes/ResultadosPrimeiraSecao/ResultadosPS'
import CounterSS from '../../componentes/CounterSS/CounterSS'
import ResultadosSS from '../../componentes/ResultadosSegundaSecao/ResultadosSS'
import CounterTS from '../../componentes/CounterTS/CounterTS'
import ResultadosTS from '../../componentes/ResultadosTerceiraSecao/ResultadosTS'
import CounterQS from '../../componentes/CounterQS/CounterQS'
import ResultadosQS from '../../componentes/ResultadosQuartaSecao/ResultadosQS'
import Footer from '../../componentes/Footer/Footer'
import './Resultados.css'

class Resultados extends Component {

    render() {
        return (
            <section>
                <Navbar />
                <div className="container">
                    <div className="row justify-content-center resultados-content">
                        <div className="col-md-6">
                            <h1 className="resultados-title_main">Resultados</h1>
                                <div className="counter-title">
                                    <h2 className="resultados-section_titles">Primeira Seção,</h2>
                                    <CounterPS />
                                </div>
                                <ResultadosPS />
                                <div className="counter-title">
                                    <h2 className="resultados-section_titles">Segunda Seção,</h2>
                                    <CounterSS />
                                </div>
                                    <ResultadosSS />
                                <div className="counter-title">
                                    <h2 className="resultados-section_titles">Terceira Seção,</h2>
                                    <CounterTS />
                                </div>
                                    <ResultadosTS />
                                <div className="counter-title">
                                    <h2 className="resultados-section_titles">Quarta Seção,</h2>
                                    <CounterQS />
                                </div>
                                    <ResultadosQS />
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        )
    }
}

export default Resultados