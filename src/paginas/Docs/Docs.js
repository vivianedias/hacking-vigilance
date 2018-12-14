import React from 'react'
import Navbar from '../../componentes/Navbar/Navbar'
import Sidebar from '../../componentes/Sidebar/Sidebar'
import './Docs.css'

function Docs() {
    return (
        <main>
            <Navbar />
            <div className="container docs-styling">
                <div className="row">
                    <div className="col-md-4 sidebar">
                        <h1 className="sidebar-table_title">Tabela de Conteúdos</h1>
                        <ul>
                            <li className="sidebar-table_titles">Conectada na Web</li>
                            <ul>
                                <Sidebar
                                    linkid="#1"
                                    link="Navegador (Browser)"
                                />
                                <Sidebar
                                    linkid="#2"
                                    link="Extensões"
                                />
                                <Sidebar
                                    linkid="#3"
                                    link="Sites Seguros"
                                />
                                <Sidebar
                                    linkid="#4"
                                    link="Usando VPN"
                                />
                                <Sidebar
                                    linkid="#5"
                                    link="NSD Update"
                                />
                                <Sidebar
                                    linkid="#6"
                                    link="Pegada Digital"
                                />
                            </ul>
                            <li className="sidebar-table_titles">Contas Online</li>
                                <ul>
                                    <Sidebar
                                        linkid="#7"
                                        link="E-mail"
                                    />
                                    <Sidebar
                                        linkid="#8"
                                        link="Autenticação em dois passos"
                                    />
                                    <Sidebar
                                        linkid="#9"
                                        link="Senhas"
                                    />
                                </ul>

                            <Sidebar
                                linkid="#10"
                                link="Mobile"
                            />
                            <ul>
                                <Sidebar
                                linkid="#11"
                                link="Bloqueio Padrão"
                                />
                                <Sidebar
                                linkid="#12"
                                link="Encriptografe seu celular"
                                />
                                <Sidebar
                                linkid="#13"
                                link="Permissões em Apps"
                                />
                                <Sidebar
                                linkid="#14"
                                link="Compartilhamento de localização"
                                />
                                <Sidebar
                                linkid="#15"
                                link="Protregendo e rastreando seu aparelho"
                                />
                                <Sidebar
                                linkid="#16"
                                link="Aplicativos de mensagem instantânea"
                                />
                            </ul>
                            <li className="sidebar-table_titles">Desktop</li>
                            <ul>
                                <Sidebar
                                    linkid="#17"
                                    link="Linux"
                                />
                                <Sidebar
                                    linkid="#18"
                                    link="Webcam e Microfone"
                                />
                                <Sidebar
                                    linkid="#19"
                                    link="Compartilhamento de dados na nuvem"
                                />
                                <Sidebar
                                    linkid="#20"
                                    link="Wi-Fi"
                                />
                                <Sidebar
                                    linkid="#21"
                                    link="Código Aberto"
                                />
                                <Sidebar
                                    linkid="#22"
                                    link="Software Livre"
                                />
                            </ul>
                            <Sidebar
                                linkid="#23"
                                link="Glossário"
                            />
                            <Sidebar
                                linkid="#24"
                                link="Referências Utilizadas"
                            />
                            <Sidebar
                                linkid="#25"
                                link="Conteúdos Extra"
                            />
                        </ul>
                    </div>

                    <div className="col-md-6 docs-content">
                        <h1 className="main-title">Tutorial Básico de Segurança Digital</h1>
                        <h3 className="main-subtitle">“Privacidade é um direito humano”</h3>

                        <p className="docs-title">Connectada na Web</p>
                            <ul>
                                <p id="1" className="docs-pointers">Navegador (Browser)</p>
                                    <p>Escolha preferencialmente entre esses três navegadores:</p>
                                    <li>• Mozilla Firefox</li>
                                    <ul>
                                        <li>◦ Opções que devem ser selecionadas nas configurações de privacidade: </li>
                                        <ul>
                                            <li>▪ Não me rastreie (Do not track)</li>
                                        </ul>
                                    <li>• Opera</li>
                                    <ul>
                                        <li>◦ O navegador oferece boas configurações de segurança, mas não é diferente de outros sem elas, portanto, se for usá-lo ative:</li>
                                        <ul>
                                            <li>▪ VPN grátis</li>
                                            <li>▪ Bloqueador de Ads</li>
                                        </ul>
                                    </ul>
                                    <li>• TOR</li>

                                    <li id="2" className="docs-pointers">• Add-ons:</li>
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
                                    <li id="3" className="docs-pointers">Site Seguro?</li>
                                        <ul>
                                            <li>• Prefira sites que utilizem o método de autenticação HTTPS*</li>
                                        </ul>

                                    <li id="4" className="docs-pointers">Usando VPN</li>
                                    <ul>
                                        <li>• O que é um VPN?</li>
                                        <li>• Para que ele serve?</li>
                                        <ul>
                                            <li>◦ Ele pode te tornar anônimo ao navegar pela web utilizando as boas práticas. No entanto, há uma maior probabilidade de haver uma vazamento do que usando Tor. </li>
                                            <li>◦ Virtual because you’re not creating a new physical connection with your destination — your data is just traveling through existing wires between you and your destination</li>
                                            <li>◦ Private because it encrypts your activity before sending it, then decrypts it at the destination.</li>
                                        </ul>
                                        <li>• Qual devo escolher?</li>
                                        <ul>
                                            <li>◦ Sugestões Grátis</li>
                                            <ul>
                                                <li>▪ Windows</li>
                                                <li>▪ MacOS</li>
                                                <li>▪ Linux</li>
                                                <ul>
                                                    <li>• Use OpenVPN e VPNBook - <a className="link" rel="noopener noreferrer" target="_blank" href="https://medium.freecodecamp.org/how-to-setup-a-vpn-for-free-or-paid-on-linux-62e1a93d04f3">Tutorial</a></li>
                                                </ul>
                                            </ul>
                                            <li>◦ Sugestões Pagas</li>
                                            <ul>
                                                <li>▪ <a className="link" rel="noopener noreferrer" target="_blank" href="https://nordvpn.com/pt-br/">Nord</a></li>
                                                <li>▪ <a className="link" rel="noopener noreferrer" target="_blank" href="https://www.expressvpn.com/pt">ExpressVPN</a></li>
                                            </ul>
                                        </ul>
                                    <li id="5" className="docs-pointers"><a className="link" rel="noopener noreferrer" target="_blank" href="https://www.nsupdate.info/">NSD Update</a></li>
                                    <ul>
                                        <li>• O que é?</li>
                                        <li>• Para que serve?</li>
                                    </ul>
                                    </ul>
                                    <li id="6" className="docs-pointers">Qual a sua pegada digital?</li>
                                    <ul>
                                        <li>• Acesse <a className="link" rel="noopener noreferrer" target="_blank" href="https://pipl.com/">Pipl</a> e descubra</li>
                                    </ul>
                            </ul>

                        <p className="docs-title">Contas Online</p>
                        <ul>
                            <li id="7" className="docs-pointers">E-mail</li>
                            <ul>
                                <li>• Use uma segurança de dois fatores (two-factor auth)</li>
                                <ul>
                                    <li>◦ Com seu número de celular ou outra conta de e-mail</li>
                                    <li>◦ Nunca deixe seu e-mail sem essa dupla verificação, isso facilita a recuperação de senhas e aumenta a segurança de acesso a sua conta</li>
                                </ul>
                                <li>• Não utilize somente um e-mail, descentralize sua coleta de dados para que nem tudo que você usa fique registrado sob um só e-mail</li>
                            </ul>
                            <li id="8" className="docs-pointers">Autenticação em dois passos</li>
                            <ul className="text-indent">
                                <li>
                                    <p>
                                        A autenticação em dois passos (conhecida como 2FA, do inglês 2-factor authentication) deve ser ligada para todos os serviços possíveis. Evite usar
                                        autenticação em dois passos que dependa de recepção de SMS, prefira aplicativos que gerem a autenticação baseada em tempo, como o FreeOTP (alguns
                                        gerenciadores de senha tem essa opção, também).
                                    </p>

                                    <p>
                                        Com a autenticação em dois passos ativada, para alguém ter acesso à uma das suas contas, além de ter acesso a sua senha, o atacante também deve ter
                                        acesso ao seu aplicativo gerador, o que dificulta bastante o acesso.
                                    </p>

                                    <p>
                                        A autenticação por SMS sofre do problema de estar vulnerável a clonagem de chip, o que é extremamente comum. A vice escreveu um artigo, em inglês,
                                        sobre a técnica. De maneira curta: os atacantes fazem engenharia social para conseguir clonar os chips de dentro das operadoras. Com isso, conseguem
                                        os códigos de confirmação necessários para fazer login. Essa técnica foi usada para derrubar o grupo de facebook “Mulheres contra Bolsonaro”, por exemplo.
                                    </p>
                                </li>
                            </ul>
                        </ul>

                        <ul>
                            <li id="9" className="docs-pointers">Senhas</li>
                            <ul>
                                <li>
                                    • Não use a mesma senha para diferentes serviços/contas, isso cria uma vulnerabilidade imensa. Se descobrirem uma senha sua, o que terão acesso?
                                    Esses são processos que demandam um pouco de trabalho (comparando com a facilidade de salvar as senhas no navegador ou usar somente uma para tudo),
                                    mas qualquer coisa nova requer um certo tempo para que se acostume, e você também vai chegar lá no diz respeito a suas senhas!
                                </li>
                                <li>• Como saber se minha senha é boa o suficiente?</li>
                                <ul>
                                    <li>◦ <a href="http://testedesenha.com.br/" className="link" rel="noopener noreferrer" target="_blank">Teste de Senha</a></li>
                                </ul>
                            <li>• Como vou lembrar de tantas senhas?</li>
                            <ul>
                                <li>◦ <a className="link" rel="noopener noreferrer" target="_blank" href="https://clipperz.is/">Clipperz</a></li>
                                <li>◦ <a className="link" rel="noopener noreferrer" target="_blank" href="https://bitwarden.com/">Bitwarden</a></li>
                                <li>◦ <a className="link" rel="noopener noreferrer" target="_blank" href="https://www.lastpass.com/pt">Lastpass</a></li>
                            </ul>
                            <li>• <a className="link" rel="noopener noreferrer" target="_blank" href="https://www.lastpass.com/pt/password-generator">Gerador de senhas seguras</a></li>
                        </ul>
                        
                        <p id="10" className="docs-title">Mobile</p>
                            <p className="text-indent">
                                Nossa maior vulnerabilidade talvez esteja em nossos smartphones. Com milhares de mensagens, e-mails, fotos, arquivos, entre outros, armazenados em um só
                                dispositivo, qualquer um que obtenha acesso a ele terá acesso à, provavelmente, toda nossa vida digital. E é por isso que a segurança desse dispositivo é tão
                                essencial. A seguir estão alguns passos para uma proteção básica que você pode seguir:
                            </p>
                            <ul>
                                <li id="11" className="docs-pointers">Não use o desbloqueio padrão do celular (estilo ligue os pontos)</li>
                                <ul>
                                    <li>• Sempre utilize o modo PIN, em que para desbloquear a tela seja preciso inserir uma senha com caracteres</li>
                                    <li>
                                        • O método padrão já foi provado ineficiente pois ao ser utilizado frequentemente, as marcas de dedo na tela ficam evidentes, e dependendo do
                                        modo que o dispositivo é segurado, é possível identificá-las e desbloquear o celular com facilidade.
                                    </li>
                                </ul>
                                <li id="12" className="docs-pointers">Encriptografe seu celular</li>
                                    <ul>
                                        <li>• Android</li>
                                        <li>• iPhone</li>
                                    </ul>
                                <li id="13" className="docs-pointers"> Reveja as permissões dadas aos seus apps no celular</li>
                                <li id="14" className="docs-pointers"> Não compartilhe a sua localização em suas redes sociais</li>
                                    <ul>
                                        <li>• Porque não?</li>
                                    </ul>
                                <li id="15" className="docs-pointers">Protegendo e Rastreando seu aparelho</li>
                                    <ul>
                                        <li>• <a href="http://www.androidlost.com" className="link" rel="noopener noreferrer" target="_blank">AndroidLost</a></li>
                                        <ul>
                                            <li>◦ Controle Completamente as atividades do seu Celular</li>
                                            <li>◦ Veja a localização</li>
                                            <li>◦ Tire fotos</li>
                                            <li>◦ Grave Audio</li>
                                        </ul>
                                        <li>• <a href="http://www.icloud.com/find" className="link" rel="noopener noreferrer" target="_blank">iCloud:</a> Localizar seu dispositivo</li>
                                        <li>• <a href="https://www.google.com/android/devicemanager" className="link" rel="noopener noreferrer" target="_blank">GooglePlay:</a> Device Manager</li>
                                        <li>• <a href="http://www.windowsphone.com" className="link" rel="noopener noreferrer" target="_blank">WindowsPhone:</a> Meu Telefone</li>
                                    </ul>
                                <li id="16" className="docs-pointers">Aplicativos de mensagem instantânea</li>
                                    <ul>
                                        <li>
                                            • Queremos evitar duas coisas no caso de mensagens instantâneas: armazenamento das mensagens nos servidores do aplicativo, porque podem ser recuperadas através de falhas de segurança ou de funcionários mal intencionados; criptografia ponto-a-ponto, para evitar que alguém possa ler as mensagens sem permissão. Para isso, utilize Wire ou Signal.
                                            Para uma avaliação mais detalhada acesse: <a href="https://www.securemessagingapps.com/" className="link" rel="noopener noreferrer" target="_blank">Secure Messaging Apps</a>
                                        </li>
                                    </ul>                        
                            </ul> 

                        <p className="docs-title">Desktop</p>
                        <ul>
                            <li id="17" className="docs-pointers">Linux</li>
                            <ul>
                                <li>• Porque escolher o Linux?</li>
                            </ul>
                            <li id="18" className="docs-pointers">Webcam e microfone</li>
                            <ul>
                                <li>• Esconda a câmera com algum adesivo (opção mais barata) – também existem outras opções mais propicias para esse fim e que durem por mais tempo</li>
                                <li>• No caso do microfone, a melhor opção é sempre deixá-lo desligado.</li>
                            </ul>
                            <li id="19" className="docs-pointers">Compartilhamento de dados na nuvem</li>
                            <ul>
                                <li>• É assim que o MEGA, sucessor do Megaupload se apresenta. Exatamente um ano depois de ser preso por pirataria e ter os serviços retirados do ar por
                                    ordens judiciais, Kim Dotcom traz o MEGA com a intenção de ser o serviço definitivo de armazenamento nas nuvens. O grande diferencial do MEGA é o
                                    sistema de criptografia avançada. Esse recurso bloqueia o conteúdo, fazendo com que os dados permaneçam privados. Desta forma, somente o dono dos
                                    arquivos consegue abri-los e, se quiser, compartilhar seus diretórios.
                                </li>
                            </ul>
                            <li id="20" className="docs-pointers">Wi-Fi</li>
                            <ul>
                                <li>• Cuidado o que acessa ao utilizar o Wi-fi público. De preferência, sempre utilize uma VPN ao acessar uma internet pública.</li>
                            </ul>
                        </ul>

                        <p id="21" className="docs-title">Código aberto</p>

                        <p id="22" className="docs-title">Software Livre</p>
                        <ul>
                            <li>• <a className="link" rel="noopener noreferrer" target="_blank" href="https://www.openstreetmap.org/">Open Street Map</a></li>
                            <li>• <a className="link" rel="noopener noreferrer" target="_blank" href="https://www.ubuntu.com/">Ubuntu</a></li>
                            <li>• <a className="link" rel="noopener noreferrer" target="_blank" href="https://linuxmint.com/">Linux Mint</a></li>
                        </ul>

                        <p id="23" className="docs-title">Glossário</p>
                        <ul>
                            <li>• HTTPS:</li>
                            <ul>
                                <li>
                                    "Quando você visita um site seguro, o endereço começará com HTTPS. O S ao final significa que o computador estabeleceu uma conexão segura com o site. Você também notará o símbolo de um 'cadeado', situado ou na barra de endereços ou na barra de status do navegador, na parte de baixo da janela. Esses sinais visuais querem dizer que pessoas monitorando sua conexão de internet não serão mais capazes de interceptar sua comunicação com aquele site de forma legível.
                                    Além de proteger senhas e transações financeiras, esse tipo de criptografia é perfeita para correios eletrônicos. O problema é que muitos provedores de e-mail não oferecem acesso seguro e outros requerem habilitá-lo de forma explícita, configurando o navegador ou digitando manualmente o HTTPS. Antes de fazer login, enviar ou ler uma correspondência eletrônica, tenha certeza de que a conexão é segura.
                                    Você também deve prestar bastante atenção caso o navegador comece a emitir avisos sobre certificados de segurança inválidos ao tentar acessar uma conta online segura de e-mails. Isso pode significar que alguém esteja interferindo na comunicação entre o seu computador e o servidor, de modo a interceptar as mensagens.”
                                    Retirado de: <a className="link" rel="noopener noreferrer" target="_blank" href="https://securityinabox.org/pt/guide/secure-communication/">Security In a Box</a>
                                </li>
                            </ul>
                        </ul>

                        <p id="24" className="docs-title">Referências Utilizadas</p>

                        <p id="25" className="docs-title">Conteúdos Extra</p>
                        
                        </ul>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </main>
    )
}

export default Docs 