import React, { Component } from 'react'
import Sidebar from '../../componentes/Sidebar/Sidebar'
import Navbar from '../../componentes/Navbar/Navbar'
import FirstSec from '../../componentes/Perguntas/FirstSec/FirstSec'
import './Teste.css'

class Teste extends Component {
  
  render(){

    return(
      <main>
        <Navbar />
        <div className="container">
          <Sidebar className="teste__column"/>
            <FirstSec />                  
        </div>
      </main>
    )
  }
}

export default Teste