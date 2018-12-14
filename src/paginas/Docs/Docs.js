import React from 'react'
import Navbar from '../../componentes/Navbar/Navbar'
import Sidebar from '../../componentes/Sidebar/Sidebar'
import Footer from '../../componentes/Footer/Footer'
import './Docs.css'

function Docs() {
    return (
        <main>
            <Navbar />
            <div className="container docs-styling">
                <div className="row">
                        <div className="col-md-4 sidebar" id="sidebar">
                            <div className="sidebar__inner">
                                <h1 className="sidebar-table_title">Tabela de Conteúdos</h1>
                                <p className="sidebar-table_title">Conectada na Web</p>
                                <ul>
                                    <li>
                                        <Sidebar
                                            linkid="#1"
                                            link="Navegador (Browser)"
                                        />
                                    </li>
                                    <li>
                                        <Sidebar
                                            linkid="#5"
                                            link="Usando VPN"
                                        />
                                    </li>
                                    <li>
                                        <Sidebar
                                            linkid="#6"
                                            link="Qual a sua pegada digital?"
                                        />
                                    </li>
                                </ul>
                                <p className="sidebar-table_title">Contas Online</p>
                                <ul>
                                    <li>
                                        <Sidebar
                                            linkid="#2"
                                            link="Contas Online"
                                        />

                                    </li>
                                    <li>
                                        <Sidebar
                                            linkid="#3"
                                            link="Senhas"
                                        />
                                    </li>
                                </ul>
                                <p className="sidebar-table_title">Mobile</p>
                                <ul>
                                    <li>
                                        <Sidebar
                                            linkid="#4"
                                            link="Celular"
                                        />
                                    </li>
                                </ul>
                                <p className="sidebar-table_title">Desktop</p>
                                <ul>
                                    <li>
                                        <Sidebar
                                            linkid="#7"
                                            link="Computadores"
                                        />
                                    </li>
                                    <li>
                                        <Sidebar
                                            linkid="#8"
                                            link="Código Aberto"
                                        />
                                    </li>
                                    <li>
                                        <Sidebar
                                            linkid="#9"
                                            link="Software Livre"
                                        />
                                    </li>
                                </ul>
                                <Sidebar
                                    linkid="#10"
                                    link="Glossário"
                                />
                                <Sidebar
                                    linkid="#11"
                                    link="Referências Utilizadas"
                                />
                                <Sidebar
                                    linkid="#12"
                                    link="Conteúdos Extra"
                                />
                            </div>
                        </div>

                        <div className="col-md-6 docs-content">
                            <h1 className="main-title">Tutorial Básico de Segurança Digital</h1>
                            <h2 className="main-subtitle">Privacidade é um direito humano</h2>

                            <p id="1" className="docs-title">Navegador (Browser)</p>
                            <p>Escolha preferencialmente entre esses dois navegadores:</p>
                            <ul>
                                <li className="docs-pointers">• Mozilla Firefox</li>
                                <ul>
                                    <li>◦ Opções que devem ser selecionadas nas configurações de privacidade: </li>
                                    <ul>
                                        <li>▪ Não me rastreie (Do not track)</li>
                                    </ul>
                                </ul>
                                <li className="docs-pointers">• Opera</li>
                                <ul>
                                    <li>◦ O navegador oferece boas configurações de segurança, mas não é diferente de outros sem elas, portanto, se for usá-lo ative:</li>
                                    <ul>
                                        <li>▪ VPN grátis</li>
                                        <li>▪ Bloqueador de Ads</li>
                                    </ul>
                                </ul>
                                <li className="docs-pointers">• Add-ons:</li>
                                <ul>
                                    <li>◦ O que eu recomendo:</li>
                                    <ul>
                                        <li>▪ HTTPS Everywhere</li>
                                        <ul>
                                            <li>• Sites confiáveis são sites criptografados (protocolo https)</li>
                                        </ul>
                                        <li>▪ Privacy Badger</li>
                                        <li>▪ DuckDuckGo – alternativa para o Google, não usa seus dados</li>
                                        <li>▪ Disable WebRTC</li>
                                        <ul>
                                            <li>• Uma brecha de segurança foi descoberta recentemente na qual permite sites remotos tirarem vantagem de um traço imbuído a alguns navegadores (como Chrome ou Firefox) chamado WebRTC (Web Real Time Communication). Ele revela o real endereço IP do usuário, mesmo que eles estejam conectados em uma VPN. A extensão funciona ao desabilitar essa função nata dos navegadores. </li>
                                        </ul>
                                    </ul>
                                </ul>
                            </ul>

                            <p className="docs-pointers">Site Seguro?</p>
                            <ul>
                                <li>• Prefira sites que utilizem o método de autenticação HTTPS*</li>
                            </ul>

                            <p id="5" className="docs-title">Usando VPN</p>
                            <ul>
                                <li className="docs-pointers">• O que é um VPN?</li>
                                <li className="docs-pointers">• Para que ele serve?</li>
                                <ul>
                                    <li>◦ Ele pode te tornar anônimo ao navegar pela web utilizando as boas práticas. No entanto, há uma maior probabilidade de haver uma vazamento do que usando Tor. </li>
                                    <li>◦ Virtual because you’re not creating a new physical connection with your destination — your data is just traveling through existing wires between you and your destination</li>
                                    <li>◦ Private because it encrypts your activity before sending it, then decrypts it at the destination.</li>
                                </ul>
                                <li className="docs-pointers">• Qual devo escolher?</li>
                                <ul>
                                    <li>◦ Sugestões Grátis</li>
                                    <ul>
                                        <li>▪ Windows</li>
                                        <li>▪ MacOS</li>
                                        <li>▪ Linux</li>
                                        <ul>
                                            <li>• Use OpenVPN e VPNBook - https://medium.freecodecamp.org/how-to-setup-a-vpn-for-free-or-paid-on-linux-62e1a93d04f3</li>
                                        </ul>
                                    </ul>
                                    <li>◦ Sugestões Pagas</li>
                                    <ul>
                                        <li><a className="link" target="_blank" rel=" noreferrer noopener" href="https://nordvpn.com/pt-br/">▪ Nord</a></li>
                                        <li><a className="link" target="_blank" rel=" noreferrer noopener" href="https://www.expressvpn.com/pt">▪ ExpressVPN</a></li>
                                    </ul>
                                </ul>
                                <li>• NSD Update</li>
                                <ul>
                                    <li>◦ O que é?</li>
                                    <li>◦ Para que serve?</li>
                                    <li>◦ https://www.nsupdate.info/</li>
                                </ul>
                            </ul>

                            <p id="2" className="docs-title">Contas Online</p>
                            <ul>
                                <li className="docs-pointers">• E-mail</li>
                                <ul>
                                    <li>◦ Use uma segurança de dois fatores (two-factor auth)</li>
                                    <ul>
                                        <li>▪ Com seu número de celular ou outra conta de e-mail</li>
                                        <li>▪ Nunca deixe seu e-mail sem essa dupla verificação, isso facilita a recuperação de senhas e aumenta a segurança de acesso a sua conta</li>
                                    </ul>
                                    <li>◦ Não utilize somente um e-mail, descentralize sua coleta de dados para que nem tudo que você usa fique registrado sob um só e-mail</li>
                                </ul>
                                <li className="docs-pointers">• Autenticação em dois passos</li>
                                <ul>
                                    <li className="text-indent">
                                        <p>A autenticação em dois passos (conhecida como 2FA, do inglês 2-factor authentication) deve ser ligada para todos os serviços possíveis. Evite usar
                                        autenticação em dois passos que dependa de recepção de SMS, prefira aplicativos que gerem a autenticação baseada em tempo, como o FreeOTP (alguns
                                        gerenciadores de senha tem essa opção, também).</p>

                                        <p>Com a autenticação em dois passos ativada, para alguém ter acesso à uma das suas contas, além de ter acesso a sua senha, o atacante também deve ter
                                        acesso ao seu aplicativo gerador, o que dificulta bastante o acesso.</p>

                                        <p>A autenticação por SMS sofre do problema de estar vulnerável a clonagem de chip, o que é extremamente comum. A vice escreveu um artigo, em inglês,
                                        sobre a técnica. De maneira curta: os atacantes fazem engenharia social para conseguir clonar os chips de dentro das operadoras. Com isso, conseguem
                                        os códigos de confirmação necessários para fazer login. Essa técnica foi usada para derrubar o grupo de facebook “Mulheres contra Bolsonaro”, por exemplo.</p>
                                    </li>
                                </ul>
                                <li className="docs-pointers">• Compartilhamento de dados / Nuvem</li>
                                <ul>
                                    <li>◦ É assim que o MEGA, sucessor do Megaupload se apresenta. Exatamente um ano depois de ser preso por pirataria e ter os serviços retirados do ar por
                                        ordens judiciais, Kim Dotcom traz o MEGA com a intenção de ser o serviço definitivo de armazenamento nas nuvens. O grande diferencial do MEGA é o
                                        sistema de criptografia avançada. Esse recurso bloqueia o conteúdo, fazendo com que os dados permaneçam privados. Desta forma, somente o dono dos
                                        arquivos consegue abri-los e, se quiser, compartilhar seus diretórios.
                                    </li>
                                </ul>
                            </ul>


                            <p id="3" className="docs-title">Senhas</p>
                            <ul className="text-indent">
                                <li className="docs-pointers">• Não use a mesma senha para diferentes serviços/contas, isso cria uma vulnerabilidade imensa.</li>
                                <ul>
                                    <li>◦ Se descobrirem uma senha sua, o que terão acesso?</li>
                                    <li>
                                        ◦ Esses são processos que demandam um pouco de trabalho (comparando com a facilidade de salvar as senhas no navegador ou usar somente
                                        uma para tudo), mas qualquer coisa nova requer um certo tempo para que se acostume, e você também vai chegar lá no diz respeito a suas senhas!
                                    </li>
                                </ul>
                                <li>• <a className="link" target="_blank" rel=" noreferrer noopener" href="http://testedesenha.com.br/">Como saber se minha senha é boa o suficiente?</a></li>
                                <li>• Como vou lembrar de tantas senhas?</li>
                                <ul>
                                    <li>◦ <a className="link" target="_blank" rel=" noreferrer noopener" href="https://clipperz.is/">Clipperz</a></li>
                                    <li>◦ <a className="link" target="_blank" rel=" noreferrer noopener" href="https://bitwarden.com/">Bitwarden</a></li>
                                    <li>◦ <a className="link" target="_blank" rel=" noreferrer noopener" href="https://www.lastpass.com/pt">Lastpass</a></li>
                                </ul>
                                <li>• <a className="link" target="_blank" rel=" noreferrer noopener" href="https://www.lastpass.com/pt/password-generator">Gerador de senhas seguras</a></li>
                            </ul>

                            <p id="6" className="docs-title">Qual a sua pegada digital?</p>
                            <ul>
                                <li>• Acesse <a target="_blank" rel=" noreferrer noopener" href="https://pipl.com/">Pipl</a> e descubra</li>
                            </ul>

                            <p id="4" className="docs-title">Celular</p>
                            <p className="text-indent">
                                Nossa maior vulnerabilidade talvez esteja em nossos smartphones. Com milhares de mensagens, e-mails, fotos, arquivos, entre outros, armazenados em um só
                                dispositivo, qualquer um que obtenha acesso a ele terá acesso à, provavelmente, toda nossa vida digital. E é por isso que a segurança desse dispositivo é tão
                                essencial.
                        </p>
                            <p className="text-indent">• A seguir estão alguns passos para uma proteção básica que você pode seguir:</p>
                            <ul>
                                <li className="docs-pointers">◦ Não use o desbloqueio padrão do celular (estilo ligue os pontos)</li>
                                <ul>
                                    <li>▪ Sempre utilize o modo PIN, em que para desbloquear a tela seja preciso inserir uma senha com caracteres</li>
                                    <li>▪ O método padrão já foi provado ineficiente pois ao ser utilizado frequentemente, as marcas de dedo na tela ficam evidentes, e dependendo do
                                        modo que o dispositivo é segurado, é possível identificá-las e desbloquear o celular com facilidade.
                                    </li>
                                </ul>
                                <li className="docs-pointers">◦ Encriptografe seu celular</li>
                                <ul>
                                    <li>▪ Android</li>
                                    <li>▪ iPhone</li>
                                </ul>
                                <li className="docs-pointers">◦ Reveja as permissões dadas aos seus apps no celular</li>
                                <li className="docs-pointers">◦ Não permita que Google ou Facebook acessem sua localização</li>
                                <li className="docs-pointers">◦ Não compartilhe a sua localização em suas redes sociais</li>
                                <ul>
                                    <li>▪ Porque não?</li>
                                </ul>

                                <li className="docs-pointers">• Protegendo e Rastreando seu Celular</li>
                                <ul>
                                    <li>◦ <a href="http://www.androidlost.com" className="link" target="_blank" rel=" noreferrer noopener">AndroidLost</a></li>
                                    <ul>
                                        <li>▪ Controle Completamente as atividades do seu Celular</li>
                                        <li>▪ Veja a localização</li>
                                        <li>▪ Tire fotos</li>
                                        <li>▪ Grave Audio</li>
                                    </ul>
                                    <li>◦ <a className="link" target="_blank" rel=" noreferrer noopener" href="http://www.icloud.com/find">iCloud:</a> Localizar seu dispositivo</li>
                                    <li>◦ <a className="link" target="_blank" rel=" noreferrer noopener" href="https://www.google.com/android/devicemanager">GooglePlay:</a> Device Manager</li>
                                    <li>◦ <a className="link" target="_blank" rel=" noreferrer noopener" href="http://www.windowsphone.com">WindowsPhone:</a> Meu Telefone</li>
                                </ul>

                                <li className="docs-pointers">• Aplicativos de mensagem instantânea</li>
                                <ul>
                                    <li>◦ Queremos evitar duas coisas no caso de mensagens instantâneas:
                                        <ul>
                                            <li>▪ Armazenamento das mensagens nos servidores do aplicativo, porque podem ser recuperadas através de falhas de segurança ou de funcionários mal intencionados </li>
                                            <li>▪ Que suas mensagens sejam lidas sem sua permissão
                                                <ul>
                                                    <li>• Para isso, prefira aplicativos que utilizem criptografia ponta-a-ponta, como Wire ou Signal.</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>◦ Para uma avaliação mais detalhada acesse <a className="link" target="_blank" rel=" noreferrer noopener" href="https://www.securemessagingapps.com/">Secure Messaging Apps</a></li>
                                </ul>
                            </ul>


                            <p id="7" className="docs-title">Desktop</p>
                            <ul>
                                <li className="docs-pointers">• Linux</li>
                                <ul>
                                    <li>◦ Porque escolher o Linux?</li>
                                </ul>
                                <li className="docs-pointers">• Webcam e microfone</li>
                                <ul>
                                    <li>◦ Esconda a câmera com algum adesivo (opção mais barata) – também existem outras opções mais propicias para esse fim e que durem por mais tempo</li>
                                    <li>◦ No caso do microfone, a melhor opção é deixá-lo desligado por padrão</li>
                                </ul>

                                <li className="docs-pointers">Wi-Fi</li>
                                <ul>
                                    <li>◦ Cuidado o que acessa ao utilizar o Wi-fi público. De preferência, sempre utilize uma VPN ao acessar uma internet pública</li>
                                </ul>
                            </ul>

                            <p id="8" className="docs-title">Código aberto</p>

                            <p id="9" className="docs-title">Software Livre</p>
                            <ul>
                                <li>• <a className="link" target="_blank" rel=" noreferrer noopener" href="https://www.openstreetmap.org/">OpenStreetMap</a></li>
                                <li>• <a className="link" target="_blank" rel=" noreferrer noopener" href="https://www.ubuntu.com/">Ubuntu</a></li>
                                <li>• <a className="link" target="_blank" rel=" noreferrer noopener" href="https://linuxmint.com/">Linux Mint</a></li>
                            </ul>

                            <p id="10" className="docs-title">Glossário</p>
                            <ul>
                                <li className="docs-pointers">• HTTPS</li>
                                <ul>
                                    <li>
                                        ◦ “Quando você visita um site seguro, o endereço começará com HTTPS. O S ao final significa que o computador estabeleceu uma conexão
                                        segura com o site. Você também notará o símbolo de um 'cadeado', situado ou na barra de endereços ou na barra de status do navegador,
                                        na parte de baixo da janela. Esses sinais visuais querem dizer que pessoas monitorando sua conexão de internet não serão mais capazes
                                        de interceptar sua comunicação com aquele site de forma legível. Além de proteger senhas e transações financeiras, esse tipo de
                                        criptografia é perfeita para correios eletrônicos. O problema é que muitos provedores de e-mail não oferecem acesso seguro e outros
                                        requerem habilitá-lo de forma explícita, configurando o navegador ou digitando manualmente o HTTPS. Antes de fazer login, enviar ou
                                        ler uma correspondência eletrônica, tenha certeza de que a conexão é segura. Você também deve prestar bastante atenção caso o navegador
                                        comece a emitir avisos sobre certificados de segurança inválidos ao tentar acessar uma conta online segura de e-mails. Isso pode
                                        significar que alguém esteja interferindo na comunicação entre o seu computador e o servidor, de modo a interceptar as mensagens.”
                                    Retirado de <a className="link" target="_blank" rel=" noreferrer noopener" href="https://securityinabox.org/pt/guide/secure-communication/">Security In a Box</a>.
                                </li>
                                </ul>
                            </ul>

                            <p id="11" className="docs-title">Referências Utilizadas</p>

                            <p id="12" className="docs-title">Conteúdos Extra</p>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
                <Footer />
    </main>
            )   
        }
        
export default Docs 