import React from 'react'
import Navbar from '../../componentes/Navbar/Navbar'
import Footer from '../../componentes/Footer/Footer'
import './Sobre.css'

function Sobre(){
    return(
        <main>
            <Navbar />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 sobre">
                        <h1 className="sobre-title">Por que privacidade importa?</h1>
                        <div className="sobre-content">
                            <p>
                            Depois de ler “1984” do George Orwell, lá com meus quinze anos, percebi a importância da privacidade na vida das pessoas. 
                            Desde então, venho notando cada vez mais o quanto o estado de vigilância está em nossas vidas, ele está na rua, na escola, 
                            na faculdade, no parque, está dentro de nossas casas, carregamos ele em nossos bolsos.
                            </p>

                            <p>Esse estado de constante vigilância não nos assusta mais como antes, a privacidade se tornou algo que pode ser trocado à 
                            custa de algumas curtidas e compartilhamentos pelas redes sociais. 
                            </p>

                            <p>Se não em um grande irmão do modo tradicional, em forma de governo, fica também à cargo das empresas nos espionarem 
                                noite e dia em busca de mais capital, de mais lucro, procurando novos métodos de se beneficiar a partir dos dados que 
                                nós fornecemos. 
                            </p>

                            <p>
                                No entanto, a situação mais alarmante não reside somente em governos ou empresas nos espionando, mas sim no fato de 
                                que a partir dessas informações seja possível mudar a forma como pensamos, a forma como nos relacionamos, nossos gostos, 
                                crenças, personalidades. 
                            </p>

                            <p>
                                Esse projeto surgiu com o propósito de espalhar mais conteúdo sobre segurança digital, de maneira interativa e lúdica, saindo 
                                do esteriótipo do software livre, que acompanha, uma UI passada e não muito agradável de se manipular. Esse conteúdo não pretende 
                                ser técnico, o intuito é o de democratizar o conhecimento, fazer com que as pessoas tomem de volta para elas a independência digital, 
                                que deixem de ser reféns dos monopólios tecnológicos e que conheçam essa outra parte da grande rede da internet que se importa em 
                                manter seus usuários livres, e que se preocupa com seus dados. 
                            </p>

                            <p>
                                Esse é um site que se propõe a conscientizar as pessoas sobre o sistema que muitas vezes elas nem percebem que estão inseridas. A liberdade 
                                é privacidade, e se não podemos ter ao menos isso, em que estado democrático estamos inseridos? 
                            </p>

                            <p className="sobre-bold">Viva o Software Livre e a Internet Democrática!</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default Sobre