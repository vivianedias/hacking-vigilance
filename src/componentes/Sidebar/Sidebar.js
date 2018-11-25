import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Sidebar.css'

class Sidebar extends Component{
    render(){
        return(
        <section className="container__sidebar container__sidebar-style">
            <ul>
                <li>
                <AnchorLink href='#primeiraSecao'>Conectada na Web</AnchorLink>
                </li>
                <li>
                  <AnchorLink href='#segundaSecao'>Contas Online</AnchorLink>
                </li>
                <li>
                <AnchorLink href='#terceiraSecao'>Mobile</AnchorLink>
                </li>
                <li>
                <AnchorLink href='#quartaSecao'>Desktop</AnchorLink>
                </li>
            </ul>
        </section>    
        )
    }
}

export default Sidebar 