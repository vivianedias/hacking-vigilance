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
  constructor(props){
    super(props)

    this.routeChange = this.routeChange.bind(this);
  }

   routeChange(){
    let path = '/resultados';
    this.props.history.push(path);
    }

  render() {
    return (
      <main className="teste-display">
        <Navbar />
        <div className="teste-container">
          <div className="teste-display_body">
            <Sidebar />
            <form onSubmit={this.routeChange} className="teste-display_content">
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