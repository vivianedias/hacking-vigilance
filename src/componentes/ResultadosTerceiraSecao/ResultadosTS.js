import React, { Component } from 'react'

class ResultadosTS extends Component {
    
    render() {
        let primeiraPergunta;
        if (localStorage.getItem("terceiraSecaoPrimeiraPergunta") === "nao") {
            primeiraPergunta =
                <div>
                    <h3 className="answerTitle">12. Não me chama no zap zap</h3>
                        <div className="answerContent">
                            <p>
                                Todo mundo usa Whatsapp, mas será que ele realmente é confiável para guardar todas as nossas conversas? 
                                Para quem não sabem, a empresa foi comprada pelo Facebook há quatro anos e hoje faz parte do outro maior monopólio de 
                                de tecnologia do mundo. Saindo desse cenário lhes faço uma pergunta: como saber se um aplicativo se importa com a segurança dos seus dados?
                            </p>
                            <p>
                                Alguns padrões se repetem, mas é inevitável, se o serviço é de graça, então na verdade o pagamento é você. O mesmo nãopode ser dito sobre o Whatsapp,
                                no entanto, esse cenário está prestes a mudar. Quais são os benefícios de possuir uma plataforma tão utilizadas, mas aparentemente não tirar 
                                nenhum sustento dela? Pois então, após a saída da dupla de fundadores do aplicativo, Brian Acton e Jan Koum, o caminho se mostra aberto para os avanços 
                                de Zuckenberg que aparentemente estaria pressionando para que enfraquecer a política de privacidade do aplicativo, além de monetizar a utilização do 
                                aplicativo, provavelmente através de ads. 
                            </p>
                            <p>
                                Enquanto o dinheiro não entra em caixa, o WhatsApp gera outros benefícios para o Facebook. Com sua base de usuários crescendo exponencialmente e a 
                                frequência de uso também alta, o aplicativo chama a atenção dos acionistas. Ademais, as informações sobre o comportamento do usuário no WhatsApp
                                ajudam a tornar o sistema de propaganda da rede social mais eficiente, tornando a qualidade dos anúncios personalizados exibidos no Facebook melhor. 
                                Isso significa que o WhatsApp informa ao Facebook há quanto tempo uma pessoa usa o aplicativo de mensagens, com que frequência faz isso e qual 
                                é a versão do programa que está instalada no celular. O Facebook também tem acesso ao número de celular registrado no WhatsApp, o país em que o 
                                usuário está e o tipo de telefone e sistema operacional usados. Mas a rede social não tem acesso a outros dados, como a lista de contatos existente 
                                no telefone dos usuários e o conteúdo das mensagens.
                            </p>
                            <p>
                                Depois dessa enxurrada de informações chocantes, está na hora de apresentar as alternativas:
                                Queremos evitar duas coisas no caso de mensagens instantâneas, armazenamento das mensagens nos servidores do aplicativo, porque podem ser 
                                recuperadas através de falhas de segurança ou de funcionários mal intencionados, criptografia ponto-a-ponto, para evitar que alguém possa 
                                ler as mensagens sem permissão e uma política de privacidade que de fato proteja o usuário e não use-o. Para isso, utilize 
                                <a className="link" href="https://app.wire.com/">Wire</a> ou <a className="link" href="https://signal.org/">Signal</a>. 
                            </p>
                            <p>
                                Para uma avaliação mais detalhada acesse esse <a className="link" href="https://www.securemessagingapps.com/">link</a> que contém uma uma tabela comparando as opções disponíveis. 
                            </p>
                        </div>
                </div>
        } 

        let segundaPergunta;
        if (localStorage.getItem("terceiraSecaoSegundaPergunta") === "nao"){
            segundaPergunta = 
                <div>
                    <h3 className="answerTitle">13. A criptografia veio para nos salvar</h3>
                    <div className="answerContent">
                        <p>
                            A encriptação do celular é um dos passos mais fáceis a serem realizados e também mais importantes. Isso porque
                            ao encriptar o aparelho se torna muito mais difícil (se não impossível) terceiros conseguirem extrair dados 
                            do aparelho. 
                        </p>
                        <p>
                            Atualmente, nossos smartfones se tornaram um dos nossos bens mais preciosos, isso porque contém inúmeras informações sensíveis sobre
                            nós e nossas vidas. Em vista disso, a encriptografia se torna uma opção obrigatória se queremos proteger nossos dados pessoais. 
                        </p>
                        <p>
                            Mas o que é a criptografia? Essencialmente, a criptografia mistura seus dados de modo que quando alguém tenta lê-los, eles não são legíveis
                            a não ser que você possua a chave para ler essa criptografia. Para saber mais sobre o que é criptografia e como efetuá-la em seu dispositivo, 
                            visite os <a className="link" href="/docs">Docs</a>.  
                        </p>
                    </div>
                </div>
        } 

        let terceiraPergunta;
        if (localStorage.getItem("terceiraSecaoTerceiraPergunta") === "sim"){
            terceiraPergunta = 
            <div>
                <h3 className="answerTitle">14. Precisamos prestar mais atenção as permissões que damos aos aplicativos</h3>
                    <div className="answerContent">
                        <p>
                            Quais dados os aplicativos podem ou não acessar? Em abril de 2018, foi descoberto que o Facebook teria <a className="link" href="https://arstechnica.com/information-technology/2018/03/facebook-scraped-call-text-message-data-for-years-from-android-phones/">guardado os registros de chamadas</a> dos usuários 
                            que optaram por compartilhar a lista de contatos com a plataforma, na época anterior ao Android 4.1 Jelly Bean. Depois dessa descoberta, fica a dúvida sobre o que cada aplicativo que utilizamos no dia a dia guardam
                            captam de dados dos nossos celulares. 
                        </p>
                        <p>
                            Devido a violação de privacidade que muitas vezes ocorre no caso das empresas resolverem coletar informações sensíveis sobre seus usuários sem eles mesmos saberem, para
                            um uso que não estamos cientes para qual fim serve, é importante dar acesso à funcionalidades que realmente sejam necessárias para o funcionamento do aplicativo.
                        </p>
                        <p>
                            Muitos apps vão dizer que os dados fornecidos pelos usuários são utilizados simplesmente para melhoria do produto final, como um feedback sobre 
                            o produto que a empresa coloca no mercado. No entanto, ficou evidente depois dos recentes escandalos envolvendo o <a className="link" href="https://www.tecmundo.com.br/video-game-e-jogos/107132-privacidade-acesso-completo-conta-google-pokemon-go-erro.htm">Pokemon Go</a>, 
                            em que em uma de suas atualizações, o app conseguiria mudar as configurações e editar o perfil do Google de seus usuários. 
                        </p>
                        <p>
                            Portanto, fica a dica sobre rever os acessos dados a camera, localização, microfone, contatos, etc, para os aplicativos instalados em seu aparelho!
                        </p>
                    </div>
            </div>
        } 

        let quartaPergunta;
        if (localStorage.getItem("terceiraSecaoQuartaPergunta") === "nao"){
            quartaPergunta = 
            <div>
                <h3 className="answerTitle">15. As marcas deixadas em seu Android deixam as portas abertas para terceiros entrarem</h3>
                <div className="answerContent">
                    <p>
                        Utilizar o padrão de deslizar como método de bloqueio de segurança para seu Android não dificulta a entrada de terceiros em seu aparelho. 
                        Faça um teste: debloqueie seu aparelho e bloqueie-o novamente. Depois, mova seu celular levemente para baixo, de modo que você não consiga mais ver 
                        o que está aparecendo na tela, só seu reflexo.
                    </p>
                    <p>
                        Já enxergou? Essas são as marcas de gordura do seu dedo após você desbloquea-lo. Se você enxergou, outros também vão pensar em utilizar essa técnica para
                        descobrir o padrão. Além disso, também existe a possibilidade de alguém espiar por cima do ombro qual o seu padrão de desbloqueio.
                    </p>
                    <p>
                        Para deixar a vulnerabilidade do aparelho de lado, mude seu padrão de desbloqueio para uma senha comum, com caracteres. 
                    </p>
                </div>
            </div>
        } 

        return (
            <section>
                {primeiraPergunta}
                {segundaPergunta}
                {terceiraPergunta}
                {quartaPergunta}
            </section>
        )
    }
}

export default ResultadosTS 