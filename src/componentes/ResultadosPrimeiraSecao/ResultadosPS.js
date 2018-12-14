import React, { Component } from 'react'


class ResultadosPS extends Component {

    render() {
        let primeiraPergunta;
        if (localStorage.getItem("primeiraSecaoPrimeiraPergunta") === "nao") {
            primeiraPergunta =
                <div>
                    <h3 className="answerTitle">1. Porque você deveria mudar para Mozilla Firefox ou Opera?</h3>
                        <div className="answerContent">
                            <p>
                            Além deles terem todas as mesmas características do Chrome, são navegadores que saem do monopólio do Google
                            e tem uma preocupação forte no que diz respeito à segurança digital, ao te fornecer mais opções sobre o compartilhamento de dados na navegação.
                            </p>
                            <p className="docs-pointers">Motivos para utilizar Mozilla Firefox:</p>
                                <ul>
                                    <li>- No Firefox é possível bloquear trackers com bastante facilidade. Ou seja, a plataforma não te deixa vulnerável à possíveis sites que tenta
                                    minar seus metadados enquanto você navega neles.
                                    </li>
                                    <li>- A empresa se importa <a className="link" target="_blank" rel="noopener noreferrer" href="https://www.mozilla.org/pt-BR/internet-health/privacy-security/">de verdade </a>
                                         com segurança digital.
                                    </li>
                                </ul>
                            <p className="docs-pointers">Motivos para utilizar Opera:</p>
                                <ul>
                                    <li>- O navegador oferece boas configurações de segurança, mas não é diferente de outros sem elas, portanto, se for usá-lo 
                                        ative o VPN e o Bloqueador de Ads</li>
                                </ul> 
                        </div>
                </div>
        } 

        let segundaPergunta;
        if (localStorage.getItem("primeiraSecaoSegundaPergunta") === "nao"){
            segundaPergunta = 
                <div>
                    <h3 className="answerTitle">2. Qual o papel dos Add-Ons (Extensões)</h3>
                    <div className="answerContent">
                        <p>
                            Pense na extensão como um potencializador para seu navegador. Com elas é possível bloquear ads, verificar 
                            quantos trackers aquele site utiliza, qual o nível de segurança daquele portal, entre outras coisas.
                            No que se refere a segurança, sugiro estes que são os mais usados:
                        </p>
                        <ul>
                            <li>- HTTPS Everywhere - Sites confiáveis são sites criptografados (protocolo https)</li>
                            <li>- Privacy Badger</li>
                            <li>- DuckDuckGo – alternativa para o Google, não usa seus dados</li>
                            <li>
                                - Disable WebRTC - Uma brecha de segurança foi descoberta recentemente na qual permite sites remotos tirarem 
                                vantagem de um traço imbuído a alguns navegadores (como Chrome ou Firefox) chamado WebRTC (Web Real Time Communication). 
                                Ele revela o real endereço IP do usuário, mesmo que eles estejam conectados em uma VPN. A extensão funciona ao desabilitar 
                                essa função nativa dos navegadores. 
                            </li>
                        </ul>
                    </div>
                </div>
        } 

        let terceiraPergunta;
        if (localStorage.getItem("primeiraSecaoTerceiraPergunta") === "sim"){
            terceiraPergunta = 
            <div>
                <h3 className="answerTitle">3. O que o Google faz com meus dados?</h3>
                    <div className="answerContent">
                        <p className="text-indent">
                            Na era do big data (e seu potêncial altamente poderoso) é importante entendermos para onde vai nossas informações 
                            e o que se é feito delas. 3.5 bilhões de questões são logadas no Google todos os dias. Adicionando essas informações
                            com sua conta de e-mail, YouTube, Google Maps, entre as outras dezenas de aplicativos que o Google tem lançado,
                            o que a empresa NÃO sabe sobre nós? Em vista disso, o potencial de marketing da empresa é gigante, e o produto?
                            Somos nós que fornecemos sem nem pensar duas vezes nossas informações, ideias, gostos e pensamentos.
                        </p>
                        <p className="text-indent">
                            Deixar de usar produtos Google, dando preferência a outras plataformas que verdadeiramente se importam com seus 
                            usuários não é impossível. Você pode começar agora, por exemplo, dando o primeiro passo ao trocar
                            seu mecanismo de pesquisa padrão para o <a className="link" target="_blank" rel="noreferrer noopener" href="https://duckduckgo.com/">DuckDuckGo</a>. 
                            A plataforma ainda não é tão precisa como o Google, mas lembrando que para que a plataforma melhore precisamos USÁ-LA! 
                            Então não se acanhe e dê uma chance, ajude melhorando a plataforma para que a internet comece a descentralizar desses grandes monopólios.
                        </p>
                    </div>
            </div>
        } 

        let quartaPergunta;
        if (localStorage.getItem("primeiraSecaoQuartaPergunta") === "nao"){
            quartaPergunta = 
            <div>
                <h3 className="answerTitle">4. Eu preciso utilziar VPN?</h3>
                <div className="answerContent">
                    <ul>
                        <li className="text-indent">
                            Depende. O VPN instaura uma outra camada de seguraça à sua navegação ao redirecionar seu tráfego.
                            VPN, do inglês «virtual private network», significa «rede privada virtual» – um serviço que encripta o seu 
                            tráfego na Internet e protege a sua identidade online.
                        </li>

                        <li className="text-indent">
                            Normalmente, quando você entra em um site na Internet, o seu ISP (fornecedor de serviços de internet, do inglês 
                            Internet Service Provider), recebe o pedido e redireciona-o para o destino. À medida que o seu tráfego de Internet 
                            passa pelo seu ISP, é possível saber tudo o que você faz online.
                        </li>

                        <li className="text-indent">
                            É aqui que entra o VPN. O VPN redireciona o seu tráfego de Internet através de um servidor VPN especialmente configurado, 
                            escondendo o seu endereço IP e encriptando todos os dados enviados ou recebidos. Os dados encriptados são, basicamente, 
                            incompreensíveis para qualquer pessoa que os intercepte, o que os torna impossíveis de ler.                    
                        </li>        
                        
                        <li className="text-indent">
                            Se interessou? Vá até a página <a className="link" target="_blank" rel="noreferrer noopener" href="/docs">Docs</a> e procure por "VPN" para encontrar mais dicas sobre
                            como você pode utiliza-lo em seu aparelho. 
                        </li>
                    </ul>
                </div>
            </div>
        } 

        let quintaPergunta;
        if (localStorage.getItem("primeiraSecaoQuintaPergunta") === "nao"){
            quintaPergunta = 
            <div>
                <h3 className="answerTitle">5. É importante saber onde estamos deixando nossos arquivos</h3>
                <div className="answerContent">
                    <ul>
                        <li className="text-indent">
                            Serviços como Google ou Dropbox são chamativos pela sua facilidade de uso, design atrativo e gratuidade, no entanto, ambos já estiveram 
                            envolvidos em diversos casos de vazamento de dados.Há dois anos foi descoberto que um vazamento de dados no qual o Dropbox alegou em
                            2012 ser apenas de e-mails foi na verdade de e-mails e senhas de <a className="link" target="_blank" rel="noreferrer noopener" href="https://oglobo.globo.com/economia/ataque-ao-dropbox-expoe-senhas-de-68-milhoes-de-usuarios-20023920!">
                            mais de 68 milhões de usuários</a>. Nesse mesmo ano o Google sofreu um vazamento de dados de mais de 52.5 milhões de usuários do Google +.
                        </li>
                        <li className="text-indent">
                            Devido a essa explícita levianidade em que essas grandes corporações tratam nossos dados que sugiro utilizarem serviços como o MEGA ou
                            o Nextcloud para armazenamento de dados - todo o conteúdo ali é encriptografado e no caso do MEGA há possibilidade e sincronização entre
                            diferentes dispositivos, além dele oferecer mais espaço gratuito de armazenamento que grande parte dos provedores. Para mais informações,
                            cheque os <a className="link" target="_blank" rel="noreferrer noopener" href="/docs">Docs</a>.
                        </li>
                    </ul>
                </div>
            </div>
        } 

        let sextaPergunta;
        if (localStorage.getItem("primeiraSecaoSextaPergunta") === "sim"){
            sextaPergunta = 
                <div>
                    <h3 className="answerTitle">6. Cuidado ao utilizar Wi-fi's Públicos!</h3>
                        <div className="answerContent">
                            <ul>
                                <li className="text-indent">
                                    Os Wi-fi's públicos são uma grande rede de vulnerabilidade e, caso você se conecte a ela se dispositivo também
                                    está vulnerável a possíveis ataques proferidos aquela rede. Isso porque qualquer um pode acessar aquela conexão,
                                    incluindo algum hacker malicioso querendo roubar dados sensíveis daqueles que estão se conectando por ali. 
                                </li>
                                <li>
                                    Ali existe a possibilidade de acessar todos os dados que estão passando entre o provedor de internet e o usuário
                                    que está utilizando dessa conexão. Caso esse intermédio seja acessado, todos os dados que estejam passando entre
                                    o seu aparelho e o provedor de internet estão sucetíveis a serem roubados, como senhas de redes sociais, e-mails,
                                    credenciais bancárias, etc.
                                </li>
                                <li className="text-indent">
                                    Nesses casos é recomendado sempre o uso de um VPN ao acessar a rede pública e/ou TOR. 
                                </li>
                            </ul>
                        </div>
                </div>
        } 

        return (
            <section>
                    {primeiraPergunta}
                    {segundaPergunta}
                    {terceiraPergunta}
                    {quartaPergunta}
                    {quintaPergunta}
                    {sextaPergunta}
            </section>
        )
    }
}

export default ResultadosPS 