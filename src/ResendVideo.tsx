import { Grid, Box, Container } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Helmet } from "react-helmet";
import UpdateVideo from "./components/UpdateVideo";

function ResendVideo() {
  const matches = useMediaQuery("(max-width:600px)");

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
        <img
          id="vector1"
          src="/images/vector_center_top.png"
          alt="vector center"
        />
        <img
          id="vector2"
          src="/images/vector_circle.png"
          alt="vector top right"
        />
        <img id="vector3" src="/images/vector_3.png" alt="vector 3" />
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
            <Box mb={10}>
              <h2>
                A segunda temporada do
                <span style={{ color: "#ff15a4" }}> Dom Reality</span> já
                começou!
                <br />
              </h2>
              <h3>
                E agora você pode revelar o seu DOM e quem sabe ganhar um
                contrato de <br />5 anos com a maior gravadora do País!
              </h3>
            </Box>
          </Grid>
        </Grid>
      </section>
      <section id="section-register" style={{ backgroundColor: "#ff479b" }}>
        <Container>
          <Box mb="20px">
            <h1
              style={{
                color: "#ddfd45",
                fontWeight: "bold",
                position: "relative",
                width: "100%",
                maxWidth: "600px",
                margin: "0 auto",
                fontSize: "3.5rem",
              }}
            >
              Reenvie seu vídeo
            </h1>
          </Box>
          <UpdateVideo />
        </Container>
      </section>
      <main id="main">
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
                  <h2>
                    O que é o DOM Reality? <br />
                    <img width={176} src="/images/linha.svg" alt="linha" />
                  </h2>
                  <p>
                    É o Reality Show de música gospel que vai apresentar a
                    grande voz que o Brasil precisa conhecer! Estamos na 2ª
                    temporada, que será transmitida 100% online em 7 episódios.
                    Vamos dar a chance que a sua voz precisa para iniciar uma
                    carreira na música e se tornar um verdadeiro sucesso.
                  </p>
                </Box>
              </Box>
              <Box flex="1">
                <Box textAlign={"left"}>
                  <h2>
                    Premiação
                    <br />
                    <img width={176} src="/images/linha.svg" alt="linha" />
                  </h2>
                  <p>
                    Contrato de distribuição de 5 anos com uma das maiores
                    gravadoras do mundo; Produção de áudio de 3 músicas
                    assinadas por um grande produtor; Contrato de gestão de
                    carreira artística com Paulo Alberto; Bolsa de estudos 100%
                    de um curso EAD Unicesumar, de sua escolha.
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
                  <h2>
                    Parceiros
                    <br />
                    <img width={176} src="/images/linha.svg" alt="linha" />
                  </h2>
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
                          maxWidth: "160px",
                        }}
                        src="/logo_unicesumar.png"
                        alt="Unicesumar"
                      />
                    </Box>
                    <Box display={"grid"} alignItems={"center"}>
                      <img
                        style={{
                          height: "auto",
                          width: "auto",
                          maxWidth: "200px",
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
                          maxWidth: "200px",
                        }}
                        src="/multitracks.png"
                        alt="Multitracks"
                      />
                    </Box>
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
          <Box mb={3}>
            <h3>Estamos on</h3>
          </Box>
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
                    fill="#dffd4f"
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
                    fill="#dffd4f"
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
                  <img
                    style={{
                      width: "fit-content  ",
                      maxHeight: "25px",
                    }}
                    src="/images/twitter_x.png"
                    alt="X"
                  />
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
                        style={{ fill: "#dffd4f", fillRule: "nonzero" }}
                      />
                      <path
                        d="M204.796,332.803l133.018,-76.801l-133.018,-76.801l0,153.602Z"
                        style={{ fill: "#291e78", fillRule: "nonzero" }}
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
              &copy; Unicesumar - Todos os direitos reservados 2023
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

export default ResendVideo;
