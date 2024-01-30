import { Email, Facebook, WhatsApp } from "@mui/icons-material"
import { Avatar, Box } from "@mui/material"
import { ICandidate } from "../interfaces/inscription"
import ButtonReality from "./button"

export const ThanksParticipate = (candidate: ICandidate) => {

  return (
    <Box p="20px" textAlign={"center"} justifyContent={"center"} display="flex" gap="15px" flexDirection={"column"}>
      <Box color="#ffffff" fontSize={"18px"}>{candidate.person.name}</Box>
      <Box display={"flex"} justifyContent={"center"}><Avatar sx={{ width: "100px", height: "100px" }} src={candidate.person.avatar_url} /></Box>
      <Box color="#ffffff" sx={{ wordBreak: 'break-word' }}>{candidate.person.description}</Box>
      <Box display="flex" justifyContent={"center"} gap={"15px"}>
        <ButtonReality className="btn-share" type='submit'>
          <a href={"https://www.facebook.com/sharer/sharer.php?u=https://www.musicaldom.com.br&quote=Hey! Está acontecendo a repescagem do DOM Reality. Corre votar na sua voz preferida para levá-la direto para final, dia 23/02!! Acesse agora mesmo o site https://musicaldom.com.br e vote!"} target={"_blank  noopener"}>
            <Box color="#ffffff" display="flex" gap="5px" alignItems={"center"}>
              <Facebook />
              Compartilhar
            </Box>
          </a>
        </ButtonReality>
      </Box>
      <Box display="flex" justifyContent={"center"} gap={"15px"}>
        <ButtonReality className="btn-share" type='submit'>
          <a href={`mailto:?body=Hey! Está acontecendo a repescagem do DOM Reality. Corre votar na sua voz preferida para levá-la direto para final, dia 23/02!! Acesse agora mesmo o site https://musicaldom.com.br e vote!&subject=Vote em mim!`} target={"_blank  noopener"}>
            <Box color="#ffffff" display="flex" gap="5px" alignItems={"center"}>
              <Email />
              E-mail
            </Box>
          </a>
        </ButtonReality>
        <ButtonReality className="btn-share" type='submit'>
          <a href={`https://api.whatsapp.com/send?text=Hey! Está acontecendo a repescagem do DOM Reality. Corre votar na sua voz preferida para levá-la direto para final, dia 23/02!! Acesse agora mesmo o site https://musicaldom.com.br e vote!`} target={"_blank  noopener"}>
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