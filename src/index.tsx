import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import FAQ from './FAQ';
import App210222 from './App210222';
import App from './App';
import ResendVideo from './ResendVideo';

const LGPD = () => {
  return (
    <Container>
      <Box p="20px">
        <Box m="auto" bgcolor={"#ff15a4"} sx={{ cursor: "pointer" }} width={"fit-content"} p="20px 30px" borderRadius={"30px"} onClick={() => window.location.replace('/')}>
          Voltar
        </Box>
        <p>
          1. Objetivo:<br />
          Esta política tem objetivo de esclarecer dúvidas e informações referentes às condições adotadas pela UNICESUMAR para encaminhamento de informações relevantes ao relacionamento destas com alunos, egressos, colaboradores e cadastrados em banco de dados das empresas.</p>
        <p>
          2. Atualizações:<br />
          Esta política está sujeita a alterações. Desse modo, recomendamos sua consulta periódica.</p>
        <p>
          3. A quem se destina esta política de privacidade?<br />
          CESUMAR – Centro de Ensino Superior de Maringá Ltda, ora denominado UNICESUMAR;</p>
        <p>
          4. Contato e envio de informações via e-mail:<br />
          a. A UNICESUMAR reservam-se ao direito de enviar informações via e-mails a todos os seus alunos, egressos, colaboradores e pessoas cadastradas em seu banco de dados, referentes às suas atividades, bem como, anúncio de cursos, especializações, eventos e quaisquer outros comunicados referente as mesmas.</p>
        <p>
          b. Todo o contato realizado pela UNICESUMAR tem caráter educacional, sendo assim, qualquer e-mail utilizando o nome destas que não tenham saído de seus servidores podem ser considerados fraudulentos.</p>
        <p>
          c. Todas as contas de e-mail cadastrados no banco de dados da UNICESUMAR não foram adquiridos de terceiros, mas de cadastros de matricula de alunos, de contrato de colaboradores e banco de dados de campanhas publicitárias.</p>
        <p>
          d. A UNICESUMAR não disponibilizam o descadastramento de e-mails de seus usuários por considerar como essenciais aos serviços e atividades oferecidas pelas empresas, com exceção dos egressos e usuários de banco de dados que não tenham mais nenhuma relação com as empresas, que poderão solicitar para não receber mais os e-mails através do encaminhamento de tal solicitação para mail-abuse@unicesumar.br</p>
        <p>
          e. A UNICESUMAR não enviam por e-mail informações contendo valores financeiros, sendo somente informado ao usuário da existência de tais pendências, alertando que o mesmo deve entrar em contato pessoal com o setor financeiro das empresas.</p>
        <p>
          f. A UNICESUMAR encontram-se no direito de alterar ou atualizar sua política de privacidade sem prévio aviso, mantendo no site da instituição a nova versão que poderá ser identificada pelo campo versão recente.</p>
        <p>
          5. Proteção de informações:<br />
          a. Todas as informações cadastradas nos sistemas internos da UNICESUMAR têm caráter sigiloso e, são armazenadas e protegidas contra acessos indevidos, sendo disponibilizadas a terceiros somente mediante solicitação judicial.</p>
        <p>
          b. A UNICESUMAR contam com sistema de segurança para melhor proteger a navegação e os dados armazenados em seus servidores, porém, o usuário deve manter um mínimo de segurança em seu computador como: Sistema operacional atualizado com os últimos patchs de segurança e software anti-vírus/anti-spyware.</p>
        <p>
          c. A UNICESUMAR se reservam no direito de divulgar internamente informações de alunos e colaboradores, quando envolver questões acadêmicas e de relação de trabalho.</p>
        <p>
          d. As áreas restritas do portal são acessadas pelos colaboradores e alunos, que necessitam de usuário e senha, que são fornecidas pelo departamento de tecnologia da informação da UNICESUMAR. Esses dados são individuais e intransferíveis.</p>
        <p>
          e. Qualquer problema que o usuário encontrar seja em relação a seus dados ou acesso, deverá imediatamente, entrar em contato com o departamento de tecnologia da informação da UNICESUMAR ou pelo e-mail: privacidade@unicesumar.br.</p>
        <p>
          f. A transferência desses dados para terceiros é de responsabilidade do usuário e somente este arcará com os danos advindos da transferência.</p>
        <p>
          6. Dúvidas, críticas ou sugestões:<br />
          a. Em caso de dúvidas a respeito da política de privacidade ou dos termos adotados pela UNICESUMAR quanto às informações descritas, envie um e-mail para privacidade@unicesumar.br.</p>
        <p>
          b. Problemas ou reclamações quanto aos e-mails enviados pela UNICESUMAR envie suas informações para mail abuse@unicesumar.br</p>
      </Box>
    </Container>
  )
}

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/lgpd">
        <LGPD />
      </Route>
      <Route path="/faq">
        <FAQ />
      </Route>
      <Route path="/resend">
      </Route>
      <Route path="/:candidateId?">
        <App />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
