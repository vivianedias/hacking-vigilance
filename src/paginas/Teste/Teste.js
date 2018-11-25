import React, { Component } from 'react'
import Sidebar from '../../componentes/Sidebar/Sidebar'
import Navbar from '../../componentes/Navbar/Navbar'
import PrimeiraSecao from '../../componentes/PrimeiraSecao/PrimeiraSecao'
import SegundaSecao from '../../componentes/SegundaSecao/SegundaSecao'
import TerceiraSecao from '../../componentes/TerceiraSecao/TerceiraSecao'
import QuartaSecao from '../../componentes/QuartaSecao/QuartaSecao'
import './Teste.css'

class Teste extends Component {

  render() {

    return (
      <main>
        <div className="container">
          <Sidebar className="teste__column" />
          <div className="teste__column">
          </div>
        </div>
      </main>
    )
  }
}

export default Teste