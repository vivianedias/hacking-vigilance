import React, { Component } from 'react'
import Sidebar from '../../componentes/Sidebar/Sidebar'
import Navbar from '../../componentes/Navbar/Navbar'
import Footer from '../../componentes/Footer/Footer'
import PrimeiraSecao from '../../componentes/PrimeiraSecao/PrimeiraSecao'
import SegundaSecao from '../../componentes/SegundaSecao/SegundaSecao'
import TerceiraSecao from '../../componentes/TerceiraSecao/TerceiraSecao'
import QuartaSecao from '../../componentes/QuartaSecao/QuartaSecao'
import Botao from '../../componentes/Botao/Botao'
import './Teste.css'

class Teste extends Component {

  enviaDados = (evento) => {
    evento.preventDefault()

    this.props.mandaRespostas()

    this.props.history.push('/')
  }

  render() {

    return (
      <main className="teste-display">
        <Navbar />
        <div className="container">
          <div className="teste-display_body">
            <Sidebar />
            <form onSubmit={this.enviaDados} className="teste-display_content">
              <PrimeiraSecao />
              <SegundaSecao />
              <TerceiraSecao />
              <QuartaSecao />
              <Botao>Enviar</Botao>
            </form>
          </div>
        </div>
        <Footer />
      </main >
    )
  }
}

export default Teste