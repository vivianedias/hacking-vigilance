import React, { Component } from 'react'
//import Counter from '../Counter/Counter'


class ResultadosTS extends Component {

    constructor(props){
        super(props)

        this.state = {
            dados: ''
        }

        this.somar = this.somar.bind(this)
    }

    componentDidMount(){
        let soma = 0;
        if (localStorage.getItem("terceiraSecaoPrimeiraPergunta") === "sim") {
            soma += 25;
        } 
        if (localStorage.getItem("terceiraSecaoSegundaPergunta") === "sim") {
            soma += 25;
        } 
        if (localStorage.getItem("terceiraSecaoTerceiraPergunta") === "nao") {
            soma += 25;
        } 
        if (localStorage.getItem("terceiraSecaoQuartaPergunta") === "sim") {
            soma += 25;
        } 
        soma = Math.floor(soma)
        this.somar(soma)

    }

    somar = (soma) => {
        this.setState({ dados: soma })
    }
    
    render() {
        let primeiraPergunta;
        if (localStorage.getItem("terceiraSecaoPrimeiraPergunta") === "nao") {
            primeiraPergunta =
                <div>
                    <h3 className="secaoTitle">Não me chama no zap zap</h3>
                        <ul className="secaoContent">
                            <li>
                                Todo mundo usa Whatsapp, mas será que ele realmente é confiável para guardar todas as nossas conversas? 
                                Para quem não sabem, a empresa foi comprada pelo Facebook há quatro anos e hoje faz parte do outro maior monopólio de 
                                de tecnologia do mundo. Saindo desse cenário lhes faço uma pergunta: como saber se um aplicativo se importa com a segurança dos seus dados?
                            </li>
                            <li>
                                Alguns padrões se repetem, mas é inevitável, se o serviço é de graça, então na verdade o pagamento é você. O mesmo nãopode ser dito sobre o Whatsapp,
                                no entanto, esse cenário está prestes a mudar. Quais são os benefícios de possuir uma plataforma tão utilizadas, mas aparentemente não tirar 
                                nenhum sustento dela? Pois então, após a saída da dupla de fundadores do aplicativo, Brian Acton e Jan Koum, o caminho se mostra aberto para os avanços 
                                de Zuckenberg que aparentemente estaria pressionando para que enfraquecer a política de privacidade do aplicativo, além de monetizar a utilização do 
                                aplicativo, provavelmente através de ads. 
                            </li>
                            <li>
                                Enquanto o dinheiro não entra em caixa, o WhatsApp gera outros benefícios para o Facebook. Com sua base de usuários crescendo exponencialmente e a 
                                frequência de uso também alta, o aplicativo chama a atenção dos acionistas. Ademais, as informações sobre o comportamento do usuário no WhatsApp
                                ajudam a tornar o sistema de propaganda da rede social mais eficiente, tornando a qualidade dos anúncios personalizados exibidos no Facebook melhor. 
                                Isso significa que o WhatsApp informa ao Facebook há quanto tempo uma pessoa usa o aplicativo de mensagens, com que frequência faz isso e qual 
                                é a versão do programa que está instalada no celular. O Facebook também tem acesso ao número de celular registrado no WhatsApp, o país em que o 
                                usuário está e o tipo de telefone e sistema operacional usados. Mas a rede social não tem acesso a outros dados, como a lista de contatos existente 
                                no telefone dos usuários e o conteúdo das mensagens.
                            </li>
                            <li>
                                Depois dessa enxurrada de informações chocantes, está na hora de apresentar as alternativas:
                                Queremos evitar duas coisas no caso de mensagens instantâneas, armazenamento das mensagens nos servidores do aplicativo, porque podem ser 
                                recuperadas através de falhas de segurança ou de funcionários mal intencionados, criptografia ponto-a-ponto, para evitar que alguém possa 
                                ler as mensagens sem permissão e uma política de privacidade que de fato proteja o usuário e não use-o. Para isso, utilize <a className="link" href="https://app.wire.com/">Wire</a> ou 
                                <a className="link" href="https://signal.org/">Signal</a>. 
                            </li>
                            <li>
                                Para uma avaliação mais detalhada acesse esse <a className="link" href="https://www.securemessagingapps.com/">link</a> que contém uma uma tabela comparando as opções disponíveis. 
                            </li>
                        </ul>
                </div>
        } 

        let segundaPergunta;
        if (localStorage.getItem("terceiraSecaoSegundaPergunta") === "nao"){
            segundaPergunta = 
                <div>
                    <h3 className="secaoTitle">Criptografia é amor</h3>
                    <ul className="secaoContent">
                        <li>
                            A encriptação do celular é um dos passos mais fáceis a serem realizados e também mais importantes. Isso porque
                            ao encriptar o aparelho se torna muito mais difícil (se não impossível) terceiros conseguirem extrair dados 
                            do aparelho. 
                        </li>
                        <li>
                            Atualmente, nossos smartfones se tornaram um dos nossos bens mais preciosos, isso porque contém inúmeras informações sensíveis sobre
                            nós e nossas vidas. Em vista disso, a encriptografia se torna uma opção obrigatória se queremos proteger nossos dados pessoais. 
                        </li>
                        <li>
                            Mas o que é a criptografia? Essencialmente, a criptografia mistura seus dados de modo que quando alguém tenta lê-los, eles não são legíveis
                            a não ser que você possua a chave para ler essa criptografia. Para saber mais sobre o que é criptografia e como efetuá-la em seu dispositivo, visite os <a href="/docs">Docs</a>.  
                        </li>
                    </ul>
                </div>
        } 

        let terceiraPergunta;
        if (localStorage.getItem("terceiraSecaoTerceiraPergunta") === "sim"){
            terceiraPergunta = 
            <div>
                <h3 className="secaoTitle"></h3>
                    <ul className="secaoContent">
                        <li>
                        </li>
                    </ul>
            </div>
        } 

        let quartaPergunta;
        if (localStorage.getItem("terceiraSecaoQuartaPergunta") === "nao"){
            quartaPergunta = 
            <div>
                <h3 className="secaoTitle"></h3>
                <ul className="secaoContent">
                    <li>
                    </li>
                </ul>
            </div>
        } 

        return (
            <section>
                <p>
                    {this.state.dados}
                </p>
                {primeiraPergunta}
                {segundaPergunta}
                {terceiraPergunta}
                {quartaPergunta}
            </section>
        )
    }
}

export default ResultadosTS 