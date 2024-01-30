import { Email, Facebook, Star, WhatsApp } from "@mui/icons-material"
import { Avatar, Box } from "@mui/material"
import { ICandidate } from "../interfaces/inscription"
import ButtonReality from "./button"

export const ThanksVote = (candidate: ICandidate) => {

  return (
    <Box p="20px" textAlign={"center"} justifyContent={"center"} display="flex" gap="15px" flexDirection={"column"}>
      <Box color="#ffffff" display={"flex"} justifyContent={"center"} alignItems={"center"}>Obrigado pelo voto! <Star htmlColor="#fdc11a" /></Box>
      <Box display={"flex"} justifyContent={"center"}><Avatar sx={{ width: "100px", height: "100px" }} src={candidate.person.avatar_url} /></Box>
      <Box color="#ffffff">{candidate.person.name}</Box>
      <Box display="flex" justifyContent={"center"} gap={"15px"}>
        <ButtonReality className="btn-share" type='submit'>
          <a href={"https://www.facebook.com/sharer/sharer.php?u=https://www.musicaldom.com.br&quote=Hey! Inscrições abertas para o primeiro reality de música gospel do Brasil! Se você tem o DOM, não deixe essa oportunidade passar, acesse agora mesmo o site https://musicaldom.com.br/ e se inscreva! Se essa não for a sua vez, compartilhe com aquele amigo que tem chances de ganhar!"} target={"_blank  noopener"}>
            <Box color="#ffffff" display="flex" gap="5px" alignItems={"center"}>
              <Facebook />
              Compartilhar
            </Box>
          </a>
        </ButtonReality>
      </Box>
      <Box display="flex" justifyContent={"center"} gap={"15px"}>
        <ButtonReality className="btn-share" type='submit'>
          <a href={`mailto:?body=Hey! Inscrições abertas para o primeiro reality de música gospel do Brasil! Se você tem o DOM, não deixe essa oportunidade passar, acesse agora mesmo o site https://musicaldom.com.br/ e se inscreva! Se essa não for a sua vez, compartilhe com aquele amigo que tem chances de ganhar!&subject=Vote em mim!`} target={"_blank  noopener"}>
            <Box color="#ffffff" display="flex" gap="5px" alignItems={"center"}>
              <Email />
              E-mail
            </Box>
          </a>
        </ButtonReality>
        <ButtonReality className="btn-share" type='submit'>
          <a href={`https://api.whatsapp.com/send?text=Hey! Inscrições abertas para o primeiro reality de música gospel do Brasil! Se você tem o DOM, não deixe essa oportunidade passar, acesse agora mesmo o site https://musicaldom.com.br/ e se inscreva! Se essa não for a sua vez, compartilhe com aquele amigo que tem chances de ganhar!`} target={"_blank  noopener"}>
            <Box color="#ffffff" display="flex" gap="5px" alignItems={"center"}>
              <WhatsApp />
              WhatsApp
            </Box>
          </a>
        </ButtonReality>
      </Box>
    </Box>
  )
}