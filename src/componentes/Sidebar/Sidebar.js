import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Sidebar.css'

class Sidebar extends Component{
    render(){
        return(
        <section className="container__sidebar container__sidebar-style">
            <ul>
                <li>
                <AnchorLink href='#item1'>Conectada na Web</AnchorLink>
                </li>
                <li>
                  <AnchorLink href='#item2'>Mobile</AnchorLink>
                </li>
                <li>
                <AnchorLink href='#item3'>Desktop</AnchorLink>
                </li>
                <li>
                <AnchorLink href='#item4'>Referências Utilizadas</AnchorLink>
                </li>
                <li>
                <AnchorLink href='#item5'>Sugestão de Conteúdos</AnchorLink>
                </li>
            </ul>
        </section>    
        )
    }
}

export default Sidebar 