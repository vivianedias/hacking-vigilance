import React, { Component } from 'react'
import Navbar from '../../componentes/Navbar/Navbar'
import Botao from '../../componentes/Botao/Botao'
import home from './home.png'
import './Home.css'
class Home extends Component {

    render() {
        return (
            <main>
                <Navbar />
                <section className="home-first_part">
                    <div className="text-content__first_part">
                        <h1 className="home_title">Você tem direito à privacidade</h1>
                        <div className="home-subtitle_button">
                        <p className="legenda"><a className="link" href="/blank">Entenda porque</a></p>
                            <a href="/teste">
                                <Botao className="botao_first_part">Descubra se você está segura(o)</Botao>
                            </a>
                        </div>
                    </div>

                    <div className="img-first_part">
                        <img className="img-styling" src={home} alt="Logo" />
                    </div>

                </section>

                <section className="home-second_part"></section>
            </main >
        )
    }
}

export default Home