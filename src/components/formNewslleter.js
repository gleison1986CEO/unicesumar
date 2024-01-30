import * as React from 'react';
import "../App.css";
import {Box, Container, Badge } from '@mui/material';
import { useRef} from "react";
import emailjs from "@emailjs/browser";





export default function Newsletter() {
    
  const form = useRef();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("SUCCESS!");
        },
        (error) => {
          console.log(error.text);
          alert("FAILED...", error);
        }
      );
  };
    return (
      <section id="section-schedule" style={{
        backgroundColor: "#ff0080",
        backgroundImage: "url('/vector_circle.png')",
        backgroundPosition: "right bottom",
        backgroundRepeat: 'no-repeat'
      }}
      >
      <Container>
      <Box mb="40px">
        <h1 style={{
          color: "#ffffff",
          fontWeight: "bold",
          position: "relative",
          width: "100%",
          maxWidth: "600px",
          margin: "0 auto",
          fontSize: "2.5rem"
        }}>Fique por dentro</h1>
         <h1 class="text-center" id="h1Text">Deixe seu email para ser o primerio a receber informações da segunda temporada do DOM</h1>
      </Box>
      <section>
        <aside></aside>
        


        <div class="row" id="rowForm">
         
          <form className='cf' id="form_inputs" ref={form} onSubmit={sendEmail}>

            <div class="form-group">
              <input
                type="name"
                name="nome"
                class="form-control"
                id="input_left"
                placeholder="nome*"
                required
              />
            </div>

            <div class="form-group">

              <input
                type="email"
                name="email"
                class="form-control"
                id="input_right"
                placeholder="email*"
                required
              />
            </div>
            <div class="form-group">
                    <label id="acceptTerms">
                        <input 
                          type="checkbox"
                          checked={checked}
                          onChange={handleChange}
                          id="input"
                          name="email_check"
                          required
                        />
                        Eu concordo em receber comunicações
              </label>
            </div>
          
            <button type="submit" id="button_email"class="btn btn-primary">
              enviar
            </button>
          </form>
        </div>
   
      </section>
      </Container>
      </section>
    );
  }
  