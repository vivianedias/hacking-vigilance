import React, { Component } from 'react'
import Sidebar from '../../componentes/Sidebar/Sidebar'
import Navbar from '../../componentes/Navbar/Navbar'
import Footer from '../../componentes/Footer/Footer'
import PrimeiraSecao from '../../componentes/PrimeiraSecao/PrimeiraSecao'
import SegundaSecao from '../../componentes/SegundaSecao/SegundaSecao'
import TerceiraSecao from '../../componentes/TerceiraSecao/TerceiraSecao'
import QuartaSecao from '../../componentes/QuartaSecao/QuartaSecao'
import './Teste.css'

class Teste extends Component {

  enviaDados = (evento) => {
    evento.preventDefault()

    this.props.mandaRespostas()

    this.props.history.push('/')
  }

  render() {

    return (
      <main>
        <Navbar />
        <div class="cols">
          <Sidebar />
          <form onSubmit={this.enviaDados} className="fluid">
            <PrimeiraSecao />
            <SegundaSecao />
            <TerceiraSecao />
            <QuartaSecao />
          </form>
        </div>
        <Footer />
      </main >
    )
  }
}

export default Teste