import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="teste-display_sidebar sidebar_styling">
            <p className="sidebar-title">Tabela de Conteúdo</p>
            <section className="links_spacing">
                <AnchorLink href='#primeiraSecao' className="sidebar_links">Conectada na Web</AnchorLink>
            </section>
            <section className="links_spacing">
                <AnchorLink href='#segundaSecao' className="sidebar_links">Contas Online</AnchorLink>
            </section>
            <section className="links_spacing">
                <AnchorLink href='#terceiraSecao' className="sidebar_links">Mobile</AnchorLink>
            </section>
            <section className="links_spacing">
                <AnchorLink href='#quartaSecao' className="sidebar_links">Desktop</AnchorLink>
            </section>
        </div>
    )
}    

export default Sidebar 