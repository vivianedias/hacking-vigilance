import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Sidebar.css'

class Sidebar extends Component {
    render() {
        return (
            <section className="fixed">
                <ul>
                    <li>
                        <AnchorLink href='#primeiraSecao' className="links_sidebar">Conectada na Web</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href='#segundaSecao' className="links_sidebar">Contas Online</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href='#terceiraSecao' className="links_sidebar">Mobile</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href='#quartaSecao' className="links_sidebar">Desktop</AnchorLink>
                    </li>
                </ul>
            </section>
        )
    }
}

export default Sidebar 