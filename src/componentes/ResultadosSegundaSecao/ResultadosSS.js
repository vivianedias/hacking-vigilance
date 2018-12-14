import React, { Component } from 'react'


class ResultadosSS extends Component {
    
    render() {
        let primeiraPergunta;
            if (localStorage.getItem("segundaSecaoPrimeiraPergunta") === "nao") {
                primeiraPergunta =
                    <div>
                        <h3 className="answerTitle">7. A importância da autenticação em dois fatores</h3>
                            <div className="answerContent">
                                <p>
                                    A autenticação em dois passos (conhecida como 2FA, do inglês two-factor authentication) deve ser ligada para todos os serviços possíveis. 
                                    Com a autenticação em dois passos ativada, para alguém ter acesso à uma das suas contas, além de ter acesso a sua senha, o hacker 
                                    também deve ter acesso ao seu aplicativo gerador, o que dificulta bastante o acesso.
                                </p>
                                <p>
                                    No entanto, evite utilizar autenticação em dois passos que dependa de recepção de SMS, prefira aplicativos que geram autenticação
                                    criptografada e temporizada como o FreeOTP, uma opção software livre e código aberto, além desse também existem alguns gerenciadores 
                                    de senha que possuem essa opção e são mais seguros que a autenticação via SMS.
                                </p>
                                <p>
                                    A autenticação por SMS sofre do problema de estar vulnerável a clonagem de chips, o que é extremamente comum. Para explicar de maneira
                                    sucinta, os atacantes fazem um tipo de "engenharia social" (enganam atendentes da operadora), realocando os números para seus respectivos aparelhos. 
                                    Com isso, conseguem os códigos de confirmação necessários para fazer login em múltiplas redes sociais que dependem desse tipo de autenticação. 
                                    Essa técnica foi usada para <a className="link" href="https://canaltech.com.br/legislacao/hackear-perfis-paginas-ou-grupo-no-facebook-e-crime-e-pode-acabar-em-prisao-123142/">derrubar o grupo de Facebook</a> “Mulheres contra Bolsonaro”, por exemplo.
                                </p>
                            </div>
                    </div>
            } 
    
            let segundaPergunta;
            if (localStorage.getItem("segundaSecaoSegundaPergunta") === "sim"){
                segundaPergunta = 
                    <div>
                        <h3 className="answerTitle">8. Você tem certeza que compartilhar sua localização a todo momento é seguro?</h3>
                        <div className="answerContent">
                            <p>
                                Além de potencialmente colocar sua vida em risco ao expor ao extremo sua vida pessoal e geolocalização na internet à terceiros 
                                que podem estar mal intencionados, reflita: o quão fácil é traçar um padrão de sua rotina, hábitos e estilo de vida através dessas informações?
                                É importante ressaltar o potencial perigoso do Big Data e o quanto essas redes que rastreiam nossos comportamentos não são capazes de moldá-los 
                                também.
                            </p>
                            <p>
                                Se você utiliza alguma conta no Google e nunca desativou o rastreador de geolocalização da sua conta, cheque suas atividades e perceba o quanto esses monopólios de 
                                tecnologia sabem sobre nós, onde estivemos, como fomos, em quanto tempo chegamos, com quem fomos, o que compartilhamos, enfim, com todo esses dados cruzados se pode saber muito
                                sobre uma pessoa e também sobre uma população. Essas informações possuem um potencial pequeno quando sozinhas, mas grandiosas quando juntas. E tão positivas quanto negativas 
                                - coisas incríveis podem surgir da manipulação de Big Data, porém, se 
                                cairem nas mãos erradas, podem destruir eleições democráticas, polarizar a opinião da população de países inteiros, acabando com o verdadeiro próposito dessas redes,
                                que eram o de conectar, promover a empatia e criar grandes redes de colaboração entre pessoas ao redor do mundo. 
                            </p>
                        </div>
                    </div>
            } 
    
            let terceiraPergunta;
            if (localStorage.getItem("segundaSecaoTerceiraPergunta") === "nao"){
                terceiraPergunta = 
                <div>
                    <h3 className="answerTitle">9. Talvez seja a hora de melhorar sua segurança ao trocar e-mails</h3>
                        <div className="answerContent">
                            <p>
                                Com os frequentes vazamentos de dados da Google e Yahoo, fica difícil ainda acreditar nos procolos de segurança dessas empresas, além do monopólio milionário
                                que possuem sobre o mundo da tecnologia. Porém, sobreposto à esses motivos está o fato de que se algum serviço é gratuito no mundo das interwebs, o produto 
                                tende a ser você. 
                            </p>
                            <p>
                                Em vista disso, a grande preocupação da empresa tende a não ser a segurança, mas sim manter a usuária utilizando a plataforma que é ágil, fácil de
                                ser utilizada, mas não possui uma preocupação tão forte com segurança digital como o <a className="link" href="https://protonmail.com/">Protonmail</a>,
                                o <a className="link" href="https://mail.riseup.net/rc/">Riseup</a> e a <a className="link" href="https://tutanota.com/">Tutanota</a>, que são provedores quase 100% criptografados
                                e levam a sério o <em>pishing</em>, prática que ocorre com frequência nesses provedores de e-mail mais conhecidos.
                            </p>
                            <p>Obs.: O Riseup é um provedor de e-mail mantido pela comunidade e totalmente gratuito, por isso é o único que precisa de convite para criar uma conta,
                                mas não é difícil. Encontre mais detalhes sobre nos <a className="link" href="/docs">Docs</a>.
                            </p>
                        </div>
                </div>
            } 
    
            let quartaPergunta;
            if (localStorage.getItem("segundaSecaoQuartaPergunta") === "nao"){
                quartaPergunta = 
                <div>
                    <h3 className="answerTitle">10. Descentralizar sempre é a melhor solução</h3>
                    <div className="answerContent">
                        <p>
                            Há algum tempo a descentralização vem se tornando a prática mais utilizada no que se diz respeito a um mundo virtual seguro. O mercado dos Bitcoins
                            é totalmente descentralizado, aliás, essa é uma de suas características que trazem mais segurança para essa nova moeda, e o que a torna (quase) impossível
                            de ser rastreada. De forma similar funciona a plataforma do TOR, o navegador referência se você deseja quase desaparecer da rede.  
                        </p>
                        <p>
                            É com essa mentalidade que devemos navegar na internet, distribuindo nossas pegadas digitais em diferentes contas de e-mail. Fazendo isso, adotando
                            diferentes faces pelo mundo virtual, diluindo suas pegadas sob diferentes perfis para que nenhum seja efetivamente construído com exatidão, é possível
                            "enganar" os algoritmos e navegar pela web sem que essas grandes corporações consigam traçar um perfil perfeito de você, ao logar todos seus dados 
                            sensíveis em uma só conta digital.
                        </p>
                    </div>
                </div>
            } 
    
            let quintaPergunta;
            if (localStorage.getItem("segundaSecaoQuintaPergunta") === "nao"){
                quintaPergunta = 
                <div>
                    <h3 className="answerTitle">11. Por favor parem de utilizar "1234" como sua senha!</h3>
                    <div className="answerContent">
                        <p>
                            Em junho de 2016 depois de um vazamento de dados do Linkedin o mundo soube que a senha do idealizador da rede social Facebook
                            era "dadada". Eu sei, "se Mark Zuckenburg tem uma senha fraca para uma rede social, por que eu deveria me importar com isso?",
                            porque você é mais esperta que ele! No mundo da segurança digital é de conhecimento que o primeiro passo para aumentar sua segurança
                            online é recorrer a uma senha específica para cada conta online que você possui.
                        </p>
                        <p>
                            Ok, sabemos que isso não é fácil nem super divertido, mas existem aplicativos que facilitam esse processo para nós, como o <a className="link" href="https://clipperz.is/">Clipperz</a> ou o <a className="link" href="https://www.lastpass.com/pt">Lastpass</a>, que salvam as credenciais em um sistema encriptografado online. Para
                            extra segurança, caso você queira memorizar suas senhas no navegador, é recomendado ativar a requisição de uma chave-mestra ao entrar nele.
                            Mas não basta apenas guardar suas senhas em algum lugar, também é necessário verificar se elas são fortes o suficiente para resistir à algum possível ataque,
                            para isso, basta acessar esse <a className="link" href="https://www.lastpass.com/pt/password-generator">verificador</a> criado pelo próprio Lastpass.
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
                {quintaPergunta}
            </section>
        )
    }
}

export default ResultadosSS