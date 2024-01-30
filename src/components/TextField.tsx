import { styled, TextField } from "@mui/material";

export const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color:"#000000",
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'transparent',
  },
  '& .MuiOutlinedInput-root.MuiInputBase-multiline': {
    borderRadius: "30px",
    backgroundColor:'#ffffff',
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: "100px",
    color:"#000000",
    backgroundColor:'#ffffff',
    '& fieldset': {
      border:'solid 2px transparent',
    },
    '&:hover fieldset': {
      borderColor: 'transparent',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'transparent',
    },
  },
});