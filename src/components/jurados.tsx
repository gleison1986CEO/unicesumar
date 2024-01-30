import {Box, Container} from '@mui/material';
import "react-toastify/dist/ReactToastify.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';
import useMediaQuery from '@mui/material/useMediaQuery';



function Jurados() {
    const matches = useMediaQuery("(max-width:600px)");
    return (
      <div className="App">
 <Box mb={3}>
            <h1
              style={{
                color: "#ff6233",
                fontWeight: "bold",
                position: "relative",
                width: "100%",
                margin: "0 auto",
                fontSize: "3.5em",
              }}
            >
              E aí, preparado para conhecer os jurados?
            </h1>
          </Box>
         
          <Container className="marketing">
            <div>
              <img
                src="/images/ThallesRoberto.png"
                width="140"
                height="auto"
                alt="Jurado"
              />
              <h3 className="nomeJurado">Thalles Roberto !!</h3>
            </div>
            <div>
              <img
                src="/images/PauloAlberto.png"
                width="140"
                height="auto"
                alt="Jurado"
              />
              <h3 className="nomeJurado">Paulo Alberto</h3>
            </div>
            <div>
              <img
                src="/images/GabiSampaio.png"
                width="140"
                height="140"
                alt="Jurado"
              />
              <h3 className="nomeJurado">Gabi Sampaio</h3>
            </div>
            <div>
              <img
                src="/images/AlineBarros.png"
                width="140"
                height="140"
                alt="Jurado"
              />
              <h3 className="nomeJurado">Aline Barros</h3>
            </div>
            <div>
              <img
                src="/images/jurado_5.png"
                width="140"
                height="140"
                alt="Jurado"
              />
              <h3 className="nomeJurado">?</h3>
            </div>
            <div>
              <img
                src="/images/jurado_6.png"
                width="140"
                height="140"
                alt="Jurado"
              />
              <h3 className="nomeJurado">?</h3>
            </div>
            <div>
              <img
                src="/images/jurado_7.png"
                width="140"
                height="140"
                alt="Jurado"
              />
              <h3 className="nomeJurado">?</h3>
            </div>
          </Container>
  </div>
  );
}

export default Jurados;
