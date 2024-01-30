import { Grid, Box, Container, Badge } from "@mui/material";
import { ToastContainer } from "react-toastify";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { CalendarPicker, LocalizationProvider, PickersDay } from "@mui/lab";
import StarIcon from "./starIcon.svg";
import { ptBR } from "date-fns/locale";
import Ranking from "./components/Ranking";

function App090122() {
  const matches = useMediaQuery("(max-width:600px)");
  const [date, setDate] = useState<Date | null>(new Date());
  const highlightedDays = [
    new Date("2022-01-20T00:00:00.000").getTime(),
    new Date("2022-02-01T00:00:00.000").getTime(),
    new Date("2022-02-02T00:00:00.000").getTime(),
    new Date("2022-02-13T00:00:00.000").getTime(),
    new Date("2022-02-16T00:00:00.000").getTime(),
    new Date("2022-02-20T00:00:00.000").getTime(),
    new Date("2022-02-23T00:00:00.000").getTime(),
  ];
  const helperDates = {
    [new Date("2022-01-20T00:00:00.000").getTime()]:
      "Lista completa dos 30 selecionados no site.",
    [new Date("2022-02-01T00:00:00.000").getTime()]:
      "Fase de eliminatórias em São Paulo.",
    [new Date("2022-02-02T00:00:00.000").getTime()]:
      "Fase de eliminatórias em São Paulo.",
    [new Date("2022-02-13T00:00:00.000").getTime()]:
      "Programa 1 no ar! Confira pelo canal do YouTube da EAD Unicesumar",
    [new Date("2022-02-16T00:00:00.000").getTime()]:
      "Programa 2 no ar! Confira pelo canal do YouTube da EAD Unicesumar",
    [new Date("2022-02-20T00:00:00.000").getTime()]:
      "Programa 3 no ar! Confira pelo canal do YouTube da EAD Unicesumar",
    [new Date("2022-02-23T00:00:00.000").getTime()]: "GRANDE FINAL!",
  };
  const minDate = new Date("2022-01-01T00:00:00.000");
  const maxDate = new Date("2022-02-28T00:00:00.000");

  useEffect(() => {
    date?.setHours(0, 0, 0, 0);
  }, [date]);

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dom Reality Show Gospel</title>
        <link rel="canonical" href="https://https://musicaldom.com.br" />
        <meta
          name="description"
          content="É o Reality Show de música gospel que vai apresentar a grande voz que o Brasil precisa conhecer! Transmitido 100% online em 4 episódios, vamos dar a chance que a sua voz precisa para iniciar uma carreira na música e se tornar um verdadeiro sucesso."
        />
      </Helmet>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <section id="hero">
        <Grid
          className="container"
          container
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={10}>
            <img
              className="logo-unicesumar"
              src="/images/logo-unicesumar-apresentar.png"
              alt="Apresentar"
            />
          </Grid>
          <Grid item xs={10}>
            <img
              className="logo-dom"
              src="/images/logo-dom.png"
              alt="Logo dom"
            />
          </Grid>
          <Grid item xs={10}>
            <Box>
              <h2>
                O primeiro{" "}
                <span style={{ color: "#ff15a4" }}>Reality Show</span> de música
                Gospel do Brasil já começou! <br />E agora você pode revelar o
                seu DOM e quem sabe ganhar um contrato de 5 anos com a maior
                gravadora do Brasil!
              </h2>
            </Box>
          </Grid>
        </Grid>
      </section>
      <main id="main">
        <section id="juradosReality">
          <Box mb={3}>
            <h1
              style={{
                color: "#ff15a4",
                fontWeight: "bold",
                position: "relative",
                width: "100%",
                maxWidth: "600px",
                margin: "0 auto",
                fontSize: "2.5rem",
              }}
            >
              Conheça os jurados
            </h1>
          </Box>
          <Container className="marketing">
            <div>
              <img
                src="/images/AlineBarros.png"
                width="140"
                height="auto"
                alt="Aline Barros"
              />
              <h3 className="nomeJurado">Aline Barros</h3>
            </div>
            <div>
              <img
                src="/images/JoaoFigueiredo.png"
                width="140"
                height="auto"
                alt="João Figueiredo"
              />
              <h3 className="nomeJurado">João Figueiredo</h3>
            </div>
            <div>
              <img
                src="/images/Eyshila.png"
                width="140"
                height="140"
                alt="Eyshila"
              />
              <h3 className="nomeJurado">Eyshila</h3>
            </div>
            <div>
              <img
                src="/images/PauloAlberto.png"
                width="140"
                height="140"
                alt="Paulo Alberto"
              />
              <h3 className="nomeJurado">Paulo Alberto</h3>
            </div>
            <div>
              <img
                src="/images/MauricioSoares.png"
                width="140"
                height="140"
                alt="Maurício Soares"
              />
              <h3 className="nomeJurado">Maurício Soares</h3>
            </div>
            <div>
              <img
                src="/images/ElaineMartins.png"
                width="140"
                height="140"
                alt="Elaine Martins"
              />
              <h3 className="nomeJurado">Elaine Martins</h3>
            </div>
            <div>
              <img
                src="/images/TiagoStachon.png"
                width="140"
                height="140"
                alt="Tiago Stachon"
              />
              <h3 className="nomeJurado">Tiago Stachon</h3>
            </div>
            <div>
              <img
                src="/images/BrunaoMorada.png"
                width="140"
                height="140"
                alt="Brunão Morada"
              />
              <h3 className="nomeJurado">Brunão Morada</h3>
            </div>
            <div>
              <img
                src="/images/Lincoln.png"
                width="140"
                height="140"
                alt="Lincoln"
              />
              <h3 className="nomeJurado">Lincoln</h3>
            </div>
            <div>
              <img
                src="/images/FernandaBrum.png"
                width="140"
                height="140"
                alt="Fernanda Brum"
              />
              <h3 className="nomeJurado">Fernanda Brum</h3>
            </div>
          </Container>
        </section>
        <section
          style={{ backgroundColor: "#ffefd5" }}
          id="section-robo-desclassifica"
        >
          <Container>
            <Box mb={5}>
              <h1
                style={{
                  color: "#ff15a4",
                  fontWeight: "bold",
                  position: "relative",
                  width: "100%",
                  maxWidth: "600px",
                  margin: "0 auto",
                  fontSize: "2.5rem",
                }}
              >
                Conheça e vote <br /> na melhor voz
              </h1>
            </Box>
            <Ranking />
          </Container>
        </section>
        <section
          id="section-schedule"
          style={{
            backgroundColor: "#9dc3ea",
            backgroundImage: "url('/bg-calendar.png')",
            backgroundPosition: "right bottom",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Container>
            <Box mb="40px">
              <h1
                style={{
                  color: "#04248f",
                  fontWeight: "bold",
                  position: "relative",
                  width: "100%",
                  maxWidth: "600px",
                  margin: "0 auto",
                  fontSize: "2.5rem",
                }}
              >
                {" "}
                Confira a programação
              </h1>
            </Box>
            <Box
              m="auto"
              bgcolor="#04248f"
              display={"flex"}
              flexDirection={matches ? "column-reverse" : "row"}
              width={"fit-content"}
              borderRadius={5}
            >
              <Box
                width="100%"
                minWidth="270px"
                maxWidth={"270px"}
                flex={1}
                p="30px"
                borderRight={matches ? "none" : "solid 2px #f1f55a"}
                borderTop={matches ? "solid 2px #f1f55a" : "none"}
              >
                <Box
                  ml="auto"
                  mr="auto"
                  mb="20px"
                  bgcolor="#002576"
                  display={"grid"}
                  alignItems={"center"}
                  borderRadius={5}
                  width={200}
                  height={200}
                >
                  <p style={{ color: "#fc16a4", fontSize: "100px", margin: 0 }}>
                    {date?.getDate()}
                  </p>
                </Box>
                <Box color="white">
                  {date && <p>{helperDates[date.getTime()]}</p>}
                </Box>
              </Box>
              <Box flex={1} color="white">
                <LocalizationProvider
                  dateAdapter={AdapterDateFns}
                  locale={ptBR}
                >
                  <CalendarPicker
                    minDate={minDate}
                    maxDate={maxDate}
                    date={date}
                    onChange={(newDate: any) => setDate(newDate)}
                    renderDay={(
                      day: string | number | Date,
                      _value: any,
                      DayComponentProps: any
                    ) => {
                      const isSelected =
                        !DayComponentProps.outsideCurrentMonth &&
                        highlightedDays.includes(new Date(day).getTime());
                      return (
                        <Badge
                          key={day.toString()}
                          overlap="circular"
                          badgeContent={
                            isSelected ? (
                              <img src={StarIcon} alt="Star" />
                            ) : undefined
                          }
                        >
                          <PickersDay {...DayComponentProps} />
                        </Badge>
                      );
                    }}
                  />
                </LocalizationProvider>
              </Box>
            </Box>
          </Container>
        </section>
        <section className="about">
          <Container>
            <Box
              className="section-title"
              width={"100%"}
              display="flex"
              gap={"15px"}
              flexWrap={"wrap"}
              flexDirection={matches ? "column" : "row"}
            >
              <Box flex="1">
                <Box textAlign={"left"}>
                  <h2>O que é o DOM Reality?</h2>
                  <p>
                    É o Reality Show de música gospel que vai apresentar a
                    grande voz que o Brasil precisa conhecer! Transmitido 100%
                    online em 4 episódios, vamos dar a chance que a sua voz
                    precisa para iniciar uma carreira na música e se tornar um
                    verdadeiro sucesso.
                  </p>
                </Box>
              </Box>
              <Box flex="1">
                <Box textAlign={"left"}>
                  <h2>Premiação</h2>
                  <p>
                    Contrato de 5 anos com a maior gravadora do Brasil, Destaque
                    editorial Deezer no lançamento, Produção de áudio de 3
                    músicas assinadas por Johny Essi, Produção de audiovisual de
                    1 música pela Multiforme Filmes, Contrato de gestão de
                    carreira artística com Paulo Alberto, Bolsa de estudos 100%
                    do curso Design Musical da EAD Unicesumar.
                  </p>
                </Box>
              </Box>
            </Box>
            <Box
              className="section-title"
              width={"100%"}
              display="flex"
              gap={"15px"}
              flexWrap={"wrap"}
              flexDirection={matches ? "column" : "row"}
            >
              <Box flex="1">
                <Box textAlign={"left"}>
                  <h2>Parceiros</h2>
                  <Box
                    display="flex"
                    gap="30px"
                    flexWrap={"wrap"}
                    justifyContent={"flex-start"}
                  >
                    <Box display={"grid"} alignItems={"center"}>
                      <img
                        style={{
                          height: "auto",
                          width: "auto",
                          maxWidth: "200px",
                          maxHeight: "200px",
                        }}
                        src="/LOGO_DEEZER.png"
                        alt="Deezer"
                      />
                    </Box>
                    <Box display={"grid"} alignItems={"center"}>
                      <img
                        style={{
                          height: "auto",
                          width: "auto",
                          maxWidth: "160px",
                          maxHeight: "160px",
                        }}
                        src="/LOGO_MULTIFORME_PNG.png"
                        alt="Deezer"
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box flex="1">
                <Box textAlign={"left"}>
                  <h2>FAQ</h2>
                  <Box>
                    Principais dúvidas sobre o reality.{" "}
                    <a href="/faq" className="link">
                      Clique aqui.
                    </a>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
        </section>
      </main>
      <footer id="footer">
        <img id="grade" src="/images/grade.png" alt="grade" />
        <div className="rodape-unicesumar">
          <h3>Estamos on</h3>
          <p></p>
          <div className="social-links">
            <div>
              <a
                href="https://www.instagram.com/dom.reality/"
                target="_blank noopener"
                className="instagram btn-social"
              >
                <Box m="5px" width="30px" height="30px">
                  <svg
                    version="1.1"
                    fill="#019bba"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 56.7 56.7"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7
        c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z"
                      />
                      <circle cx="41.5" cy="16.4" r="2.9" />
                      <path
                        d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9
        h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3
        s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6
        c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z"
                      />
                    </g>
                  </svg>
                </Box>
                <strong>@DOM.REALITY</strong>
              </a>
            </div>
            <div>
              <a
                href="https://www.tiktok.com/@dom.reality"
                target="_blank noopener"
                className="tiktok btn-social"
              >
                <Box m="5px" width="22px" height="22px">
                  <svg
                    viewBox="0 0 448 512"
                    fill="#fff925"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                  </svg>
                </Box>
                <strong>@DOM.REALITY</strong>
              </a>
            </div>
            <div>
              <a
                href="https://twitter.com/odomreality"
                target="_blank noopener"
                className="twitter btn-social"
              >
                <Box m="5px" width="30px" height="30px">
                  <svg
                    fill="#ff15a4"
                    id="Layer_1"
                    version="1.1"
                    viewBox="0 0 56.693 56.693"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <path d="M52.837,15.065c-1.811,0.805-3.76,1.348-5.805,1.591c2.088-1.25,3.689-3.23,4.444-5.592c-1.953,1.159-4.115,2-6.418,2.454  c-1.843-1.964-4.47-3.192-7.377-3.192c-5.581,0-10.106,4.525-10.106,10.107c0,0.791,0.089,1.562,0.262,2.303  c-8.4-0.422-15.848-4.445-20.833-10.56c-0.87,1.492-1.368,3.228-1.368,5.082c0,3.506,1.784,6.6,4.496,8.412  c-1.656-0.053-3.215-0.508-4.578-1.265c-0.001,0.042-0.001,0.085-0.001,0.128c0,4.896,3.484,8.98,8.108,9.91  c-0.848,0.23-1.741,0.354-2.663,0.354c-0.652,0-1.285-0.063-1.902-0.182c1.287,4.015,5.019,6.938,9.441,7.019  c-3.459,2.711-7.816,4.327-12.552,4.327c-0.815,0-1.62-0.048-2.411-0.142c4.474,2.869,9.786,4.541,15.493,4.541  c18.591,0,28.756-15.4,28.756-28.756c0-0.438-0.009-0.875-0.028-1.309C49.769,18.873,51.483,17.092,52.837,15.065z" />
                  </svg>
                </Box>
                <strong>@DOM_REALITY</strong>
              </a>
            </div>
            <div>
              <a
                href="https://www.youtube.com/eadunicesumaroficial/"
                target="_blank noopener"
                className="youtube btn-social"
              >
                <Box m="5px" width="30px" height="30px">
                  <svg
                    height="100%"
                    style={{
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    version="1.1"
                    viewBox="0 0 512 512"
                    width="100%"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g>
                      <path
                        d="M501.299,132.766c-5.888,-22.03 -23.234,-39.377 -45.264,-45.264c-39.932,-10.701 -200.037,-10.701 -200.037,-10.701c0,0 -160.105,0 -200.038,10.701c-22.025,5.887 -39.376,23.234 -45.264,45.264c-10.696,39.928 -10.696,123.236 -10.696,123.236c0,0 0,83.308 10.696,123.232c5.888,22.03 23.239,39.381 45.264,45.268c39.933,10.697 200.038,10.697 200.038,10.697c0,0 160.105,0 200.037,-10.697c22.03,-5.887 39.376,-23.238 45.264,-45.268c10.701,-39.924 10.701,-123.232 10.701,-123.232c0,0 0,-83.308 -10.701,-123.236Z"
                        style={{ fill: "#ed1f24", fillRule: "nonzero" }}
                      />
                      <path
                        d="M204.796,332.803l133.018,-76.801l-133.018,-76.801l0,153.602Z"
                        style={{ fill: "#fff", fillRule: "nonzero" }}
                      />
                    </g>
                  </svg>
                </Box>
                <strong>EADUNICESUMAROFICIAL</strong>
              </a>
            </div>
          </div>
        </div>
        <Container className="container">
          <div className="copyright">
            <div style={{ color: "#075360" }}>
              &copy; Unicesumar - Todos os direitos reservados 2021
            </div>
            <div>
              <a href="https://inscricoes.unicesumar.edu.br/">
                <img
                  src="/images/logo-unicesumar-footer.png"
                  alt="Logo Unicesumar"
                />
              </a>
            </div>
          </div>
          <div className="credits"></div>
        </Container>
      </footer>
      <div className="box-cookies hide">
        <div className="row">
          <div className="col">
            <p className="msg-cookies">
              Usamos cookies para permitir que o nosso website funcione
              corretamente, para personalizar conteúdo e anúncios, para
              proporcionar funcionalidades das redes sociais e para analisar o
              nosso tráfego. Também partilhamos informação com os nossos
              parceiros das redes sociais, de publicidade e de dados sobre o seu
              uso do nosso website.
            </p>
          </div>
          <div className="col-auto">
            <button className="btn-cookies button-primary">Eu aceito</button>
            <button
              type="button"
              className="btn btn-primary btn-cookies"
              onClick={() => window.location.replace("/lgpd")}
            >
              Preferências
            </button>
            <button className="btn-cookies button-primary btn-recusar">
              Recusar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App090122;
