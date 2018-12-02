import React, { Component } from 'react'
import Navbar from '../../componentes/Navbar/Navbar'
import Botao from '../../componentes/Botao/Botao'
import Footer from '../../componentes/Footer/Footer'
import Containers from '../../componentes/Containers/Containers'
import home from './home.png'
import camera from '../../componentes/Containers/icon-camera.png'
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
                    <h2 className="second-part__home_title">Você está sendo vigiada </h2>
                    <div className="row justify-content-around card-deck">
                        <Containers  
                        className="col-12 
                        col-md-4" 
                        image={camera}
                        titulo="O que é privacidade para você?"
                        texto="Depois do fenômeno da internet e das redes sociais perdemos o senso do que é, de fato, privacidade.
                        Na era da ultravigilância com câmeras por toda cidade e com mídias que incentivam o compartilhamento em
                        tempo real de nossas vidas, ninguém está verdadeiramente anônimo."
                        />
                        <Containers  
                        className="col-12 col-md-4" 
                        image={world} 
                        titulo="AVISO: Se é gratuito, você é o produto. "
                        texto="Elas são muitas e permeiam nossas vidas mesmo se escolhermos não fazer parte delas. Ao convivermos com
                        aqueles que fazem parte desse mundo, já participamos dele por associação. Mas qual o verdadeiro impacto das redes em nossas
                        vidas? Com seu mecanismo que se assemelha muito a uma câmera de condicionamento operante, ficamos viciados ao mecanismo
                        de pequenas recompensas constantes, curtidas, compartilhamentos, comentários, tudo isso para que nosso cérebro reaja de
                        maneira positiva aos estimulos fornecidos pela rede nos mantendo presos à esse laço infinito. O modelo 'gratuito' 
                        das redes têm um custo: precisam nos manter online, conectados e sempre compartilhando mais e mais informações sensíveis
                        sobre nós mesmos nesse modelo de negócio pautados por propaganda"
                        />
                        <Containers  
                        className="col-12 col-md-4" 
                        image={eye} 
                        titulo="Porque nos importamos com a vigilância governamental, mas não a feita por grandes corporações?"
                        texto="Quando pensamos em vigilancia, espionagem, o sentimento nunca é positivo. Proponho um exercício, você já"
                        />
                    </div>
                </section>
                <Footer />
            </main >
        )
    }
}

export default Home