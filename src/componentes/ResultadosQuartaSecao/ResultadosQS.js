import React, { Component } from 'react'

class ResultadosQS extends Component {
    
    render() {
        let primeiraPergunta;
            if (localStorage.getItem("quartaSecaoPrimeiraPergunta") === "nao"){
                primeiraPergunta =
                    <div>
                        <h3 className="answerTitle">15. Linux é amor</h3>
                            <div className="answerContent">
                                <p>
                                    Para longe foram os dias em que Linux e Software Livre eram termos associados a programas difíceis de mexer,
                                    e para uso exclusivo de programadores ou técnicos em informática. 
                                </p>
                                <ul>
                                    <li>Mas o que é o Linux?</li>
                                        <p>
                                            "Linux é o núcleo do sistema operacional, programa responsável pelo funcionamento do computador, que faz a comunicação entre hardware 
                                            (impressora, monitor, mouse, teclado) e software (aplicativos em geral). O conjunto do kernel e demais programas responsáveis por 
                                            interagir com este é o que denominamos sistema operacional. O kernel é o coração do sistema.

                                            Os principais programas responsáveis por interagir com o kernel foram criados pela fundação GNU. Por este motivo é mais correto nos 
                                            referenciarmos ao sistema operacional como GNU/Linux ao invés de apenas Linux." Texto retirado do site <a className="link" target="_blank" rel="noreferrer noopener" href="https://www.vivaolinux.com.br/linux/">Viva O Linux</a>.
                                        </p>
                                    <li>Qual a diferença entre Windows e Linux?</li>
                                        <p>
                                            "A diferença mais marcante entre Linux e Windows é o fato do primeiro ser um sistema de código aberto, desenvolvido por programadores 
                                            voluntários espalhados por toda internet e distribuído sob a licença pública GPL. Enquanto o Windows é software proprietário, não possui 
                                            código-fonte disponível e você ainda precisa comprar uma licença pra ter o direito de usá-lo.
                                        </p>
                                        <p>Você não precisa pagar nada para usar o Linux! Não é crime fazer cópias para instalá-lo em outros computadores. A vantagem de um sistema 
                                            de código aberto é que ele se torna flexível às necessidades do usuário, tornando assim suas adaptações e "correções" muito mais rápidas. 
                                            Lembre-se que ao nosso favor temos milhares de programadores espalhados pelo mundo pensando apenas em fazer do Linux um sistema cada vez 
                                            melhor.
                                        </p>
                                        <p>
                                            O código-fonte aberto do sistema permite que qualquer pessoa veja como ele funciona, corrija algum problema ou faça alguma sugestão sobre 
                                            sua melhoria, esse é um dos motivos de seu rápido crescimento, assim como da compatibilidade com novos hardwares, sem falar de sua alta 
                                            performance e de sua estabilidade." Texto retirado do site <a className="link" target="_blank" rel="noreferrer noopener" href="https://www.vivaolinux.com.br/linux/">Viva O Linux</a>.
                                        </p>
                                    <li>Porque trocar de Sistema Operacional?</li>
                                    <ul>
                                        <li>1. É totalmente grátis</li>
                                        <li>2. É mais seguro</li>
                                        <li>3. Você manda no sistema, e não o sistema em você</li>
                                        <li>4. Programas a poucos cliques e mais segurança</li>
                                        <li>5. Interface gráfica moderna e maleável</li>
                                        <li>6. Mais estável que o Windows</li>
                                        <li>7. Sem drivers para instalar</li>
                                        <li>8. Linux tem sim muitos jogos!</li>
                                        <li>9. Um sistema integrado com as redes sociais e com a internet</li>
                                        <li>10. Conseguir ajuda é muito fácil</li>
                                    </ul>
                                </ul>
                            </div>
                    </div>
            } 
    
            let segundaPergunta;
            if (localStorage.getItem("quartaSecaoSegundaPergunta") === "nao"){
                segundaPergunta = 
                    <div>
                        <h3 className="answerTitle">16. Você pode estar sendo espionado</h3>
                        <div className="answerContent">
                            <p>
                                Há um anos atrás, espionagem através dos nossos aparelhos com câmeras e microfones pareciam apenas paranóia. No entanto, recentemente 
                                diferentes notícias sobre pessoas reportando que descobriram que estavam de fato sendo gravadas através das câmeras e microfones de seus 
                                aparelhos eletrônicos se tornou verdade.
                            </p>
                            <p>
                                Além de uma violação de privacidade, existiram casos de extorção pela ameaça da divulgação de vídeos comprometedores de pessoas que foram
                                filmadas ilegalmente. E não são somente hackers à procura de dinheiro que podem estar te gravando, um ex-agente do FBI já confirmou que
                                a federação faz isso há anos, o que não impede que outros governos façam o mesmo. Em 2013, por cortesia de Edward Snowden descobrimos que a NSA 
                                (orgão de espionagem online americana) tinham um programa que dava permissão a organização espionar pela câmera de iPhones e Blackberries. Em 
                                2014, também sob cortesia do Snowden descobrimos que a NSA criou um malware que possibilita o acesso remote à webcams. 
                            </p>
                            <p>
                                Como foi exposto em uma matéria pelo Tecmundo, espionagem não é "coisa de gringo", de acordo com a matéria, 
                                "Infelizmente, a vigilância de massa não é coisa de gringo. Como o jornalista Gleen Greenwald reportou por meio de documentos entregues por 
                                Snowden, "pessoas residentes ou em trânsito no Brasil, assim como empresas instaladas no país, se tornaram alvos de espionagem da NSA na 
                                última década".
                            </p>
                            <p>
                                A reportagem ainda indica o tamanho da vigilância no país. Os documentos não são precisos, mas dizem que o Brasil fica "um pouco" atrás do 
                                número norte-americano, que é de 2,3 bilhões de telefonemas e mensagens espionados.
                            </p>
                            <p>
                                Na época, o Brasil retaliou a ação por comentários e "indicações" de ações diplomáticas, mas nada realmente de peso para combater isso acabou 
                                sendo feito. Então, nada mudou: em 2015, o The Intercept publicou em 2015, ao lado do WikiLeaks, um documento mostrando que a NSA continuava 
                                espionando a presidente Dilma Rousseff e mais 29 telefones do governo — incluindo embaixadas, assessores, residências e até o Banco Central."
                            </p>
                            <p>
                                Se você já está ressabiado, saiba como <a className="link" target="_blank" rel="noreferrer noopener" href="https://www.oficinadanet.com.br/post/12608-desativando-webcam-microfone-do-notebook">desabilitar seu microfone</a> e <a className="link" target="_blank" rel="noreferrer noopener" href="/docs">ocultar sua câmera.</a> 
                            </p>
                        </div>
                    </div>
            } 

        return (
            <section>
                {primeiraPergunta}
                {segundaPergunta}
            </section>
        )
    }
}

export default ResultadosQS 