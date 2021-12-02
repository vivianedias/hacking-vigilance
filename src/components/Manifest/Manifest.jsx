import { Heading, Text, Box, VStack, IconButton, Icon } from "@chakra-ui/react";
import { IoEyeOffSharp } from "react-icons/io5";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Manifest = ({ t }) => {
  return (
    <VStack as="section">
      <Heading as="h2" size="md" color="purple.600" align="center">
        {t("manifest.title")}
      </Heading>
      <IconButton
        icon={<ChevronDownIcon color="purple.600" />}
        variant="unstyled"
        size="2xl"
        fontSize="32px"
      />
      <VStack spacing={4} bg="white" borderRadius="lg" px={4} py={10}>
        <Text color="gray.600" align="center">
          O Brasil foi um dos países pioneiros quando se fala em ações
          específicas direcionadas a privacidade de dados online. Desde 2014,
          com a aprovação do Marco civil da internet - lei que garantia a
          privacidade dados - o país evoluiu consideralvelmente na discussão até
          colocar em prática integral a Lei Geral de Proteção de Dados em 2021,
          que promete atuar além do escopo da internet.
        </Text>
        <Text color="gray.600" align="center">
          Graças a{" "}
          <Text as="span" color="purple.600" fontWeight={700}>
            LGPD,{" "}
          </Text>
          o procedimento para que um site seja considerado seguro se tornou mais
          rígido, movimento que fez que com{" "}
          <Text fontWeight={700} as="span">
            termos de consentimento{" "}
          </Text>
          pipocassem por aí na internet. No entanto, as notificações de
          permissão dos polêmicos{" "}
          <Text as="span" color="purple.600" fontWeight={700}>
            cookies,{" "}
          </Text>
          não são colocadas de uma forma clara e objetiva para que os usuários
          possam de fato personalizar suas preferências, tornando-se
          propositalmente irritantes.
        </Text>
        <Text color="gray.600" align="center">
          Além disso, ainda que continuemos em constante evolução precisamos
          ficar alertas para a{" "}
          <Text as="span" fontWeight={700} color="purple.600">
            proteção das nossas contas online,
          </Text>{" "}
          que hoje em dia interligam todos os pontos da nossa vida. Por isso, é
          importante seguir alguns procedimentos padrões, como sempre utilizar
          senhas diferentes para diferentes contas e usar um gerenciador de
          senha para facilitar esse processo.
        </Text>
        <Text color="gray.600" align="center">
          Por fim, ainda existem as tentativas de golpe por meio de email, SMS e
          mensagem que te direcionam ou para um{" "}
          <Text as="span" color="purple.600" fontWeight={700}>
            pishing
          </Text>{" "}
          (página falsa) ou permitem que um{" "}
          <Text as="span" color="purple.600" fontWeight={700}>
            malware “espião”
          </Text>{" "}
          invada o seu aparelho e roube todas as informações armazenadas nele.
        </Text>
        <Text color="gray.600" align="center">
          Para finalizar, a proposta deste site também consiste em tornar essas
          discussões mais acessíveis, tanto do ponto de vista da linguagem
          simples e uso de ferramentas facilitadoras, quanto do ponto de vista
          do idioma, pois a maior parte das informações encontrada sobre
          segurança digital, estão disponíveis marjoritariamente em língua
          inglesa. Queremos trazer tanto conteúdos traduzidos, quanto textos e
          artigos de estudiosos brasileiros sobre o assunto.
        </Text>
        <Icon as={IoEyeOffSharp} color="purple.600" boxSize={12} />
      </VStack>
    </VStack>
  );
};

export default Manifest;
