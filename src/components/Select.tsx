import { styled, Select } from "@mui/material";

export const CssSelect = styled(Select)({
  ".MuiOutlinedInput-notchedOutline": {
    borderRadius: "30px",
    borderWidth: "2px",
    borderColor: "transparent!important",
  },
  ".MuiSelect-select":{
    textAlign:'left',
    borderRadius: '30px!important',
    backgroundColor: '#ffffff'
  },
});