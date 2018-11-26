import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="fixed">
            <p>Tabela de Conteúdo</p>
            <section className="spacing_sidebar">
                <AnchorLink href='#primeiraSecao' className="links_sidebar">Conectada na Web</AnchorLink>
            </section>
            <section className="spacing_sidebar">
                <AnchorLink href='#segundaSecao' className="links_sidebar">Contas Online</AnchorLink>
            </section>
            <section className="spacing_sidebar">
                <AnchorLink href='#terceiraSecao' className="links_sidebar">Mobile</AnchorLink>
            </section>
            <section className="spacing_sidebar">
                <AnchorLink href='#quartaSecao' className="links_sidebar">Desktop</AnchorLink>
            </section>
        </div>
    )
}    

export default Sidebar 