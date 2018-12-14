import React from 'react'
import Navbar from '../../componentes/Navbar/Navbar'
import Sidebar from '../../componentes/Sidebar/Sidebar'
import './Docs.css'

function Docs (){
    return(
        <main>
            <Navbar />
            <div className="container docs-styling">
            <div className="row">
                <h1>Tabela de Conteúdos</h1>
                <div className="col-md-6">
                    <Sidebar
                    linkid="#1"
                    link="Navegador (Browser)"
                    />
                    <Sidebar
                    linkid="#2"
                    link="Contas Online"
                    />
                    <Sidebar
                    linkid="#3"
                    link="Senhas"
                    />
                    <Sidebar
                    linkid="#4"
                    link="Celular"
                    />
                    <Sidebar
                    linkid="#5"
                    link="Usando VPN"
                    />
                    <Sidebar
                    linkid="#6"
                    link="Qual a sua pegada digital?"
                    />
                    <Sidebar
                    linkid="#7"
                    link="Computadores"
                    />
                    <Sidebar
                    linkid="#8"
                    link="Código Aberto"
                    />
                    <Sidebar
                    linkid="#9"
                    link="Software Livre"
                    />
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

            <div className="col-md-6">
                <h1>Tutorial Básico de Segurança Digital</h1>
                    <h2>Sobrevivendo em 2019</h2>
                        <h3>“Privacidade é um direito humano”</h3>
        
                <p id="1">Navegador (Browser)</p>
                    <p>Escolha preferencialmente entre esses dois navegadores:</p>
                    <ul>
                        <li>Mozilla Firefox</li>
                        <ul>
                            <li>◦ Opções que devem ser selecionadas nas configurações de privacidade: </li>
                            <ul>
                                <li>▪ Não me rastreie (Do not track)</li>
                            </ul>
                            <li>◦ Add-ons:</li>
                            <ul>
                                <li>▪ Você os usa?</li>
                                <li>▪ O que eu recomendo:</li>
                                <ul>
                                    <li>• HTTPS Everywhere</li>
                                    <ul>
                                        <li>◦ Sites confiáveis são sites criptografados (protocolo https)</li>
                                    </ul>
                                    <li>• Privacy Badger</li>
                                    <li>• DuckDuckGo – alternativa para o Google, não usa seus dados</li>
                                    <li>• Disable WebRTC</li>
                                    <ul>
                                        <li>◦ Uma brecha de segurança foi descoberta recentemente na qual permite sites remotos tirarem vantagem de um traço imbuído a alguns navegadores (como Chrome ou Firefox) chamado WebRTC (Web Real Time Communication). Ele revela o real endereço IP do usuário, mesmo que eles estejam conectados em uma VPN. A extensão funciona ao desabilitar essa função nata dos navegadores. </li>
                                    </ul>
                                </ul>
                            </ul>
                        </ul>
                        <li>Opera</li>
                        <ul>
                            <li>◦ O navegador oferece boas configurações de segurança, mas não é diferente de outros sem elas, portanto, se for usá-lo ative:</li>
                            <ul>
                                <li>VPN grátis</li>
                                <li>Bloqueador de Ads</li>
                            </ul>
                        </ul>
                    </ul>

                <p id="2">Contas Online</p>
                    <ul>
                        <li>• E-mail</li>
                        <ul>
                            <li>◦ Use uma segurança de dois fatores (two-factor auth)</li>
                            <ul>
                                <li>▪ Com seu número de celular ou outra conta de e-mail</li>
                                <li>▪ Nunca deixe seu e-mail sem essa dupla verificação, isso facilita a recuperação de senhas e aumenta a segurança de acesso a sua conta</li>
                            </ul>
                            <li>◦ Não utilize somente um e-mail, descentralize sua coleta de dados para que nem tudo que você usa fique registrado sob um só e-mail</li>
                        </ul>
                        <li>• Autenticação em dois passos</li>
                        <ul>
                            <li>
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
                    </ul>
                                
                <p id="3">Senhas</p>
                    <ul>
                        <li>• Não use a mesma senha para diferentes serviços/contas, isso cria uma vulnerabilidade imensa. Se descobrirem uma senha sua, o que terão acesso? 
                            Esses são processos que demandam um pouco de trabalho (comparando com a facilidade de salvar as senhas no navegador ou usar somente uma para tudo), 
                            mas qualquer coisa nova requer um certo tempo para que se acostume, e você também vai chegar lá no diz respeito a suas senhas!
                        </li>
                        <li>• Como saber se minha senha é boa o suficiente?</li>
                        <ul>
                            <li>◦ http://testedesenha.com.br/</li>
                        </ul>
                        <li>• Como vou lembrar de tantas senhas?</li>
                        <ul>
                            <li>◦ https://clipperz.is/</li>
                            <li>◦ bitwarden</li>
                            <li>◦ Lastpass</li>
                        </ul>
                        <li>• Gerador de senhas seguras</li>
                        <ul>
                            <li>◦ https://www.lastpass.com/pt/password-generator</li>
                        </ul>
                    </ul>
                                
                <p id="4">Celular</p>

                <p>Nossa maior vulnerabilidade talvez esteja em nossos smartphones. Com milhares de mensagens, e-mails, fotos, arquivos, entre outros, armazenados em um só 
                    dispositivo, qualquer um que obtenha acesso a ele terá acesso à, provavelmente, toda nossa vida digital. E é por isso que a segurança desse dispositivo é tão 
                    essencial. 
                </p>
                <p>A seguir estão alguns passos para uma proteção básica que você pode seguir:</p>
                    <ul>
                        <li>• Não use o desbloqueio padrão do celular (estilo ligue os pontos).</li>
                        <ul>
                            <li>◦ Sempre utilize o modo PIN, em que para desbloquear a tela seja preciso inserir uma senha com caracteres</li>
                            <li>◦ O método padrão já foi provado ineficiente pois ao ser utilizado frequentemente, as marcas de dedo na tela ficam evidentes, e dependendo do 
                                modo que o dispositivo é segurado, é possível identificá-las e desbloquear o celular com facilidade.
                            </li>
                        </ul>
                        <li>• Encriptografe seu celular</li>
                        <ul>
                            <li>◦ Android</li>
                            <li>◦ iPhone</li>
                        </ul>
                        <li>• Reveja as permissões dadas aos seus apps no celular</li>
                        <li>• Não permita que Google ou Facebook acessem sua localização</li>
                        <li>• Não compartilhe a sua localização em suas redes sociais</li>
                        <ul>
                            <li>◦ Porque não?</li>
                        </ul>
                        <li>• Protegendo e Rastreando seu Celular</li>
                        <ul>
                            <li>◦ AndroidLost - http://www.androidlost.com</li>
                            <ul>
                                <li>▪ Controle Completamente as atividades do seu Celular</li>
                                <li>▪ Veja a localização</li>
                                <li>▪ Tire fotos</li>
                                <li>▪ Grave Audio</li>
                            </ul>
                            <li>◦ iCloud: Localizar seu dispositivo - http://www.icloud.com/find</li>
                            <li>◦ GooglePlay: Device Manager - https://www.google.com/android/devicemanager</li>
                            <li>◦ WindowsPhone: Meu Telefone - http://www.windowsphone.com</li>
                        </ul>
                        <li>• Aplicativos de mensagem instantânea</li>
                        <ul>
                            <li>◦ Queremos evitar duas coisas no caso de mensagens instantâneas: armazenamento das mensagens nos servidores do aplicativo, porque podem ser recuperadas através de falhas de segurança ou de funcionários mal intencionados; criptografia ponto-a-ponto, para evitar que alguém possa ler as mensagens sem permissão. Para isso, utilize Wire ou Signal. 
                            Para uma avaliação mais detalhada acesse: https://www.securemessagingapps.com/
                            </li>
                        </ul>
                                
                    </ul>
                                
                <p>Site Seguro?</p>
                <ul>
                    <li>• Prefira sites que utilizem o método de autenticação HTTPS*</li>
                </ul>

                <p id="5">Usando VPN</p>
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
                            <li>Windows</li>
                            <li>MacOS</li>
                            <li>Linux</li>
                            <ul>
                                <li>• Use OpenVPN e VPNBook - https://medium.freecodecamp.org/how-to-setup-a-vpn-for-free-or-paid-on-linux-62e1a93d04f3</li>
                            </ul>
                        </ul>
                        <li>Sugestão Paga</li>
                        <ul>
                            <li>Nord</li>
                            <li>ExpressVPN</li>
                        </ul>
                    </ul>
                    <li>• NSD Update</li>
                    <ul>
                        <li>◦ O que é?</li>
                        <li>◦ Para que serve?</li>
                        <li>◦ https://www.nsupdate.info/</li>
                        <li></li>
                    </ul>
                </ul>
                                
                <p id="6">Qual a sua pegada digital?</p>
                <ul>
                    <li>• Acesse https://pipl.com/ e descubra.</li>
                </ul>
                                
                <p id="7">Computadores</p>
                <ul>
                    <li>• Linux</li>
                    <ul>
                        <li>◦ Porque escolher o Linux?</li>
                    </ul>
                    <li>• Webcam e microfone</li>
                    <ul>
                        <li>◦ Esconda a câmera com algum adesivo (opção mais barata) – também existem outras opções mais propicias para esse fim e que durem por mais tempo</li>
                        <li>◦ No caso do microfone, a melhor opção é sempre deixá-lo desligado.</li>
                    </ul>
                    <li>• Compartilhamento de dados / Nuvem</li>
                    <ul>
                        <li>◦ É assim que o MEGA, sucessor do Megaupload se apresenta. Exatamente um ano depois de ser preso por pirataria e ter os serviços retirados do ar por 
                            ordens judiciais, Kim Dotcom traz o MEGA com a intenção de ser o serviço definitivo de armazenamento nas nuvens. O grande diferencial do MEGA é o 
                            sistema de criptografia avançada. Esse recurso bloqueia o conteúdo, fazendo com que os dados permaneçam privados. Desta forma, somente o dono dos 
                            arquivos consegue abri-los e, se quiser, compartilhar seus diretórios.
                        </li>
                    </ul>
                    <li>Wi-Fi</li>
                    <ul>
                        <li>◦ Cuidado o que acessa ao utilizar o Wi-fi público. De preferência, sempre utilize uma VPN ao acessar uma internet pública</li>
                    </ul>
                </ul>
                                
                <p id="8">Código aberto</p> 
                                
                <p id="9">Software Livre</p>
                <ul>
                    <li>• https://www.openstreetmap.org/</li>
                </ul>

                <p id="10">Glossário</p>
                <ul>
                    <li>
                        HTTPS: “Quando você visita um site seguro, o endereço começará com HTTPS. O S ao final significa que o computador estabeleceu uma conexão segura com o site. Você também notará o símbolo de um 'cadeado', situado ou na barra de endereços ou na barra de status do navegador, na parte de baixo da janela. Esses sinais visuais querem dizer que pessoas monitorando sua conexão de internet não serão mais capazes de interceptar sua comunicação com aquele site de forma legível.
                        Além de proteger senhas e transações financeiras, esse tipo de criptografia é perfeita para correios eletrônicos. O problema é que muitos provedores de e-mail não oferecem acesso seguro e outros requerem habilitá-lo de forma explícita, configurando o navegador ou digitando manualmente o HTTPS. Antes de fazer login, enviar ou ler uma correspondência eletrônica, tenha certeza de que a conexão é segura.
                        Você também deve prestar bastante atenção caso o navegador comece a emitir avisos sobre certificados de segurança inválidos ao tentar acessar uma conta online segura de e-mails. Isso pode significar que alguém esteja interferindo na comunicação entre o seu computador e o servidor, de modo a interceptar as mensagens.”
                        Retirado de: https://securityinabox.org/pt/guide/secure-communication/
                    </li>
                </ul>

                <p id="11">Referências Utilizadas</p>
                                
                <p id="12">Conteúdos Extra</p>
            </div>
        </div>
    </main>
    )
}

export default Docs 