import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Container } from "@mui/material"

export default function FAQ() {
  return (
    <Box id='hero' display={"grid"} alignItems={"center"} minHeight={"100vh"} width={"100%"}>
      <Container sx={{ padding: "20px" }}>
        <Box onClick={()=> window.location.replace('/')} display="flex" mt="20px" zIndex={2} position="relative" justifyContent={"center"} sx={{cursor:"pointer"}}>
          <Box textAlign={"center"}>
            <img className="logo-unicesumar" src="/images/logo-unicesumar-apresentar.png" alt="Apresentar" />
          </Box>
          <Box textAlign={"center"}>
            <img className="logo-dom" src="/images/logo-dom.png" alt="Logo dom" />
          </Box>
        </Box>
        <Box mb="20px">
          <h1 style={{
            color: "#ffffff",
            fontWeight: "bold",
            position: "relative",
            width: "100%",
            margin: "0 auto",
            fontSize: "2.5rem"
          }}>
            FAQ <br />
            <small style={{ fontSize: 18 }}>Perguntas frequentes</small>
          </h1>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={"15px"}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="1-content"
              id="1-header"
            >
              <Typography>O que pode desclassificar o meu vídeo?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Vídeos fora do regulamento serão desclassificados.
                “gravar um vídeo, em smartphone de no máximo, 120 (cento e vinte) segundos de gravação de sua  imagem e voz, com uma breve apresentação pessoal do Participante e a interpretação de uma música pelo próprio, de repertório a seu exclusivo critério, podendo ser nacional ou estrangeira, em português ou qualquer outra língua, sem qualquer acompanhamento instrumental (“a capela”) e sem participação de terceiros.”
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="2-content"
              id="2-header"
            >
              <Typography>Quais vídeos serão analisados e podem ser aceitos?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Vídeos que possuam acompanhamento de 1 instrumento musical ou playback mas que não atrapalhem a voz do candidato. Sendo a voz do candidato audível e em destaque no mesmo.
                Reforçando, vídeos que forem produzidos, videoclipes, gravações com banda, em igrejas ou outros estabelecimentos, gravados durante uma “apresentação”, vídeos de mais de 120 segundos, serão desclassificados imediatamente.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="3-content"
              id="3-header"
            >
              <Typography>Os votos que recebi são determinantes para a minha classificação na próxima fase?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Não, os votos não definem quem será escolhido para a próxima etapa, mas servem como um peso a mais para a decisão dos jurados. São parte do processo de escolha, mas não determinantes.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="4-content"
              id="4-header"
            >
              <Typography>Qual é a idade mínima para participar?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                a partir de 16 anos.
                “ter no mínimo 16 (dezesseis) anos completos, sendo certo que os Participantes com idade inferior a 18 (dezoito) anos deverão ser representados por seus respectivos representantes legais e somente estes poderão inscrevê-los no Programa, responsabilizando-se integralmente por estes e por seus atos;”
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="5-content"
              id="5-header"
            >
              <Typography>Quantos candidatos passarão para a fase de audições presenciais?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                30 (trinta) candidatos serão selecionados para as audições presenciais.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="6-content"
              id="6-header"
            >
              <Typography>Até quando posso me inscrever na primeira fase online?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Até o dia 07 de janeiro.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="7-content"
              id="7-header"
            >
              <Typography>Até quando posso receber votos?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Até o dia 07 de janeiro.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="8-content"
              id="8-header"
            >
              <Typography>Quando será divulgada a lista dos 30 selecionados para a fase de audições presenciais?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                A partir do dia 18 de janeiro os primeiros nomes serão divulgados, e até o dia 20 de janeiro todos os 30 estarão divulgados.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="9-content"
              id="9-header"
            >
              <Typography>Onde acontecerão as audições da segunda fase? E quando?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                As audições acontecerão em São Paulo-SP, nos dias 1 e 2 de fevereiro.
                Os 30 selecionados serão informados da data que deverão comparecer.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="10-content"
              id="10-header"
            >
              <Typography>Desejo alterar o meu vídeo, pois não cumpre com as normas do regulamento. Como proceder?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Entre em contato com nossa equipe via DM do Instagram oficial do DOM - @dom.reality.
                Por lá vamos te passar todas as orientações necessárias.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="11-content"
              id="11-header"
            >
              <Typography>Onde está o regulamento completo do concurso?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                O regulamento se encontra no site de inscrição (musicaldom.com.br).
                Logo após preencher os seus dados para a inscrição, você precisa dar um check no mesmo para prosseguir, por isso, fique atento! Leia o regulamento antes de dar o check. ;)
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="12-content"
              id="12-header"
            >
              <Typography>Os custos para a fase das audições em São Paulo, são por conta do DOM?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Não. Todo e qualquer custo com translado para São Paulo, local das audições presenciais, são por conta do candidato. Caso ele não possa arcar com esses custos, o próximo da lista será chamado.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </Box>
  );
}