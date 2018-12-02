import React, { Component } from 'react'
import Navbar from '../../componentes/Navbar/Navbar'
import Botao from '../../componentes/Botao/Botao'
import Footer from '../../componentes/Footer/Footer'
import Containers from '../../componentes/Containers/Containers'
import home from './home.png'
import eye from '../../componentes/Containers/icon-eye.png'
import world from '../../componentes/Containers/icon-world.png'
import '../../index.css'
import './Home.css'
class Home extends Component {

    render() {
        return (
            <main>
                <Navbar />
                <section className="row home-container__first-part">
                    <div className="col-md align-self-center">
                        <h1 className="first-part__home_title">Você tem direito à privacidade</h1>

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
                    <h2 className="second-part__home_title">Lorem ipsum lorem ipsum bla lala lulu</h2>
                    <div className="row align-items-center justify-content-around">
                        <Containers  className="col-12 col-md-4" image="" >
                            O que é privacidade para você?
                            Camerazinha (já tenho)
                        </Containers>
                        <Containers  className="col-12 col-md-4" image={world} >
                            Cuidado: As redes sociais estão moldando nossas personalidades
                            Icon redes sociais - Big Data
                        </Containers>
                        <Containers  className="col-12 col-md-4" image={eye} >
                            Não deixe as empresas nem os governos invadirem sua privacidade, se importe com ela. Privacidade é liberdade.
                            Governo e Empresas Big Data
                        </Containers>

                    </div>
                </section>
                <Footer />
            </main >
        )
    }
}

export default Home