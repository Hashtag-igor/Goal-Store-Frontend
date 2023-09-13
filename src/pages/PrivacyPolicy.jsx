import React from 'react'
import Links from '../components/Links'
import { Container, Title, Answer, Description, DescriptionContainer, PrivacyAndQuestionsWrapper, Question, QuestionsLI, QuestionsUL } from "../styles/SharedFiles"

export default function PrivacyPolicy() {
  return (
    <>
        <Links />
        <Container>
            <Title>POLÍTICA DE PRIVACIDADE</Title>
            <PrivacyAndQuestionsWrapper>
                <DescriptionContainer>
                    <Description>Bem-vindo à GOAL STORE! Nós valorizamos a sua privacidade e estamos comprometidos em proteger as informações pessoais que você compartilha conosco. Esta Política de Privacidade explica como coletamos, usamos e protegemos suas informações quando você visita nosso site, cria uma conta e faz compras em nossa loja.</Description>
                </DescriptionContainer>
                <QuestionsUL>
                    <QuestionsLI>
                        <Question>1. Informações que Coletamos</Question>
                        <Answer>Ao utilizar nosso site e serviços, podemos coletar as seguintes informações:</Answer>
                    </QuestionsLI>
                    <QuestionsLI>
                        <Question>1.1 Informações de Conta:</Question>
                        <Answer>Quando você cria uma conta em nossa loja, podemos coletar seu nome, endereço de e-mail, endereço de entrega e número de telefone.</Answer>
                    </QuestionsLI>
                    <QuestionsLI>
                        <Question>1.2 Informações de Pagamento:</Question>
                        <Answer>Se você efetuar uma compra, podemos coletar informações de pagamento, como números de cartão de crédito. No entanto, saiba que não armazenamos informações de pagamento em nossos servidores. Utilizamos processadores de pagamento seguros para garantir a segurança de suas transações financeiras.</Answer>
                    </QuestionsLI>
                    <QuestionsLI>
                        <Question>1.3 Informações do Dispositivo:</Question>
                        <Answer>Coletamos automaticamente informações sobre seu dispositivo, incluindo seu endereço IP, navegador, sistema operacional e fuso horário.</Answer>
                    </QuestionsLI>
                    <QuestionsLI>
                        <Question>1.4 Informações de Navegação:</Question>
                        <Answer>Quando você visita nosso site, registramos as páginas que você visualiza, os produtos que visualiza e as ações que realiza.</Answer>
                    </QuestionsLI>
                    <QuestionsLI>
                        <Question>2. Como Usamos Suas Informações</Question>
                        <Answer>Utilizamos suas informações para os seguintes fins:</Answer>
                    </QuestionsLI>
                    <QuestionsLI>
                        <Question>2.1 Para Fornecer Serviços:</Question>
                        <Answer>Utilizamos suas informações de conta e pagamento para processar suas compras, enviar produtos e fornecer informações relacionadas ao seu pedido.</Answer>
                    </QuestionsLI>
                    <QuestionsLI>
                        <Question>2.2 Comunicação:</Question>
                        <Answer>Utilizamos seu endereço de e-mail e número de telefone para nos comunicar com você sobre suas compras, promoções, atualizações de produtos e outras informações relevantes.</Answer>
                    </QuestionsLI>
                    <QuestionsLI>
                        <Question>2.3 Melhoria do Site:</Question>
                        <Answer>Utilizamos informações de navegação e dispositivos para melhorar a experiência do usuário em nosso site, personalizar o conteúdo e analisar tendências de uso.</Answer>
                    </QuestionsLI>
                    <QuestionsLI>
                        <Question>2.4 Segurança:</Question>
                        <Answer>Protegemos suas informações contra uso não autorizado, fraude e abuso.</Answer>
                    </QuestionsLI>
                    <QuestionsLI>
                        <Question>3. Compartilhamento de Informações</Question>
                        <Answer>Nós não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto nas seguintes situações:</Answer>
                    </QuestionsLI>
                    <QuestionsLI>
                        <Question>3.1 Parceiros de Processamento:</Question>
                        <Answer>Compartilhamos suas informações com processadores de pagamento confiáveis para processar suas transações financeiras de forma segura.</Answer>
                    </QuestionsLI> 
                    <QuestionsLI>
                        <Question>3.2 Cumprimento Legal:</Question>
                        <Answer>Podemos divulgar suas informações em resposta a solicitações legais, como intimações ou ordens judiciais, quando necessário para cumprir as leis aplicáveis.</Answer>
                    </QuestionsLI> 
                    <QuestionsLI>
                        <Question>3.3 Consentimento:</Question>
                        <Answer>Se obtivermos seu consentimento expresso, poderemos compartilhar suas informações com terceiros para fins específicos, como campanhas de marketing personalizadas.</Answer>
                    </QuestionsLI>
                    <QuestionsLI>
                        <Question>4. Seus Direitos e Escolhas</Question>
                        <Answer>Você tem o direito de:</Answer>
                    </QuestionsLI>
                    <QuestionsLI>
                        <Question>4.1 Acessar Suas Informações:</Question>
                        <Answer>Você pode solicitar uma cópia das informações pessoais que temos sobre você.</Answer>
                    </QuestionsLI>
                    <QuestionsLI>
                        <Question>4.2 Corrigir Suas Informações:</Question>
                        <Answer>Se suas informações estiverem incorretas ou desatualizadas, você pode nos solicitar a correção.</Answer>
                    </QuestionsLI>
                    <QuestionsLI>
                        <Question>4.3 Excluir Suas Informações:</Question>
                        <Answer>Você pode solicitar a exclusão de suas informações pessoais, sujeito a obrigações legais de retenção.</Answer>
                    </QuestionsLI>
                    <QuestionsLI>
                        <Question>4.4 Revogar o Consentimento:</Question>
                        <Answer>Se consentiu com o uso de suas informações, pode retirar o consentimento a qualquer momento.</Answer>
                    </QuestionsLI>
                    <QuestionsLI>
                        <Question>5. Segurança das Informações</Question>
                        <Answer>Tomamos medidas rigorosas para proteger suas informações pessoais contra acesso não autorizado, uso indevido e divulgação não autorizada. Utilizamos protocolos de segurança padrão do setor para proteger suas informações.</Answer>
                    </QuestionsLI>
                    <QuestionsLI>
                        <Question>6. Alterações na Política de Privacidade</Question>
                        <Answer>Reservamo-nos o direito de atualizar esta Política de Privacidade para refletir alterações em nossas práticas ou por razões legais ou regulatórias. Recomendamos que você reveja periodicamente esta política para ficar informado sobre como estamos protegendo suas informações.</Answer>
                    </QuestionsLI>
                    <QuestionsLI>
                        <Question>7. Contato</Question>
                        <Answer>Se você tiver dúvidas sobre esta Política de Privacidade ou desejar exercer seus direitos de privacidade, entre em contato conosco:</Answer>
                        <Answer>E-mail: sac@goalstore.net</Answer>
                        <Answer>Número: (31) 99808-2888</Answer>
                        <Answer>Obrigado por confiar em nossa loja de camisas de futebol. Estamos comprometidos em proporcionar a você uma experiência segura e agradável enquanto navega e faz compras em nosso site.</Answer>
                    </QuestionsLI>
                </QuestionsUL>
            </PrivacyAndQuestionsWrapper>
        </Container>
    </>
  )
}
