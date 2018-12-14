import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.css'

// <Menu usuario={props.usuario} deslogaUsuario={props.deslogaUsuario} />
// const props = { usuario: props.usuario, deslogaUsuario: props.deslogaUsuario }
class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = { aberto: false }
  }

  abreOuFechaMenu = () => {
    if (this.state.aberto) {
      this.setState({ aberto: false })
    } else {
      this.setState({ aberto: true })
    }
  }

  render() {
    let classesDoBotao = 'navbar-menu__botao'
    let classesDasOpcoes = 'navbar-menu__opcoes'

    if (this.state.aberto) {
      classesDoBotao += ' navbar-menu__botao--aberto'
      classesDasOpcoes += ' navbar-menu__opcoes--aberto'
    }

    return (
      <nav className="">
        <button className={classesDoBotao} onClick={this.abreOuFechaMenu}>
          <i className="material-icons md-48 md-light">notes</i>
        </button>

        <ul className={classesDasOpcoes}>
          <li>
            <NavLink to="/teste" activeClassName="navbar-menu__opcoes--ativo" onClick={this.abreOuFechaMenu}>
              Teste
            </NavLink>
          </li>
          <li>
            <NavLink to="/docs" activeClassName="navbar-menu__opcoes--ativo" onClick={this.abreOuFechaMenu}>
              Docs
              </NavLink>
          </li>
          <li>
            <NavLink to="/sobre" activeClassName="navbar-menu__opcoes--ativo" onClick={this.abreOuFechaMenu}>
              Sobre
              </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Menu
