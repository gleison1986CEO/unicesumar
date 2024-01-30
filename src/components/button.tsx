import { Button } from "@mui/material";
import { styled } from "@mui/system";

const ButtonReality = styled(Button)({
  backgroundColor: "#dffd4f",
  color: "#000000",
  width: "fit-content",
  borderRadius: "100px",
  padding:"20px 60px",
  fontSize:20,
  magin:'0 auto',
  fontWeight:700, 
  "&:hover": {
    backgroundColor: "#dffd4f",
  }
})

export const ButtonVote = styled(Button)({
  backgroundColor: "#0ab504",
  color: "#ffffff",
  width: "fit-content",
  borderRadius: "100px",
  padding:"15px 30px",
  "&:hover": {
    backgroundColor: "#0ab504",
    color: "#ffffff",
  }
})

export default ButtonReality;