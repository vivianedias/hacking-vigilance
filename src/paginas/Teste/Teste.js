import React, { Component } from 'react'
import StickyBox from "react-sticky-box";
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
    this.state = { isDesktop: false };
    
    this.updatePredicate = this.updatePredicate.bind(this);
    this.routeChange = this.routeChange.bind(this);
  }

  routeChange(){
   let path = '/resultados';
   this.props.history.push(path);
   }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 768 });
  }

  render() {
    let sidebar = 
      <div>
        <h1 className="sidebar-title">Tabela de Conteúdo</h1>
            <Sidebar 
            linkid="#primeiraSecao"
            link="Conectada na Web"
            />
            <Sidebar
            linkid="#segundaSecao"
            link="Contas Online"
            />
            <Sidebar
            linkid="#terceiraSecao"
            link="Mobile"
            />
            <Sidebar
            linkid="#quartaSecao" 
            link="Desktop"
            />
      </div>
    
    const isDesktop = this.state.isDesktop;

    return (
      <main>
        <Navbar />
        <div className="container">
          <div className="row justify-content-center" style={{alignItems: 'flex-start' }}>
            {isDesktop ? (
              <StickyBox className="col-md-4">
                  {sidebar}
              </StickyBox>
              ) : (
              <div className="col-md-4">
                  {sidebar}
              </div>
              )}
            <form onSubmit={this.routeChange} className="col-md-6 form-display">
              <PrimeiraSecao />
              <SegundaSecao />
              <TerceiraSecao />
              <QuartaSecao />
              <Botao>Enviar</Botao>
            </form>
            <div className="col-md-2"></div>
          </div>
        </div>
        <Footer />
      </main >
    )
  }
}

export default Teste