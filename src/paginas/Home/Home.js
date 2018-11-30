import React, { Component } from 'react'
import Navbar from '../../componentes/Navbar/Navbar'
import Botao from '../../componentes/Botao/Botao'
import Footer from '../../componentes/Footer/Footer'
import home from './home.png'
import '../../index.css'
import './Home.css'
class Home extends Component {

    render() {
        return (
            <main>
                <Navbar />
                <section className="row home-container__first-part">
                    <div className="col-md align-self-center">
                        <h1 className="home_title">Você tem direito à privacidade</h1>
                        <div className="home-subtitle_button">
                            <p className="legenda"><a className="link" href="/blank">Entenda porque</a></p>
                            <a href="/teste">
                                <Botao className="botao_first_part">Descubra se você está segura(o)</Botao>
                            </a>
                        </div>
                    </div>

                    <div className="col-md align-self-center">
                        <img className="img-styling" src={home} alt="Logo" />
                    </div>
                </section>
                <section className="home-container__second-part ">
                    <h2 className="home_title">Lorem ipsum lorem ipsum bla lala lulu</h2>
                    <div className="row align-items-center justify-content-around">
                        <div className="floating-containers col-12 col-md-4 ">
                            <p className="text-content__second_part">O que é privacidade para você?</p>
                        </div>
                        <div className="floating-containers col-12 col-md-4">
                            <p className="text-content__second_part">Cuidado: As redes sociais estão moldando nossas personalidades</p>
                        </div>
                        <div className="floating-containers col-12 col-md-4">
                            <p className="text-content__second_part">Não deixe as empresas nem os governos invadirem sua privacidade, se importe com ela. Privacidade é liberdade.</p>
                        </div>

                    </div>
                </section>
                <Footer />
            </main >
        )
    }
}

export default Home