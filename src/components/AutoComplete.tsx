import { styled, Autocomplete } from "@mui/material";

export const CssAutocomplete = styled(Autocomplete)({
  ".MuiAutocomplete-inputRoot": {
    borderRadius:"30px",
    "& .MuiInputAdornment-root": {
      color: "#e90073"
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderWidth: "2px",
      borderColor: "#e90073"
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderWidth: "2px",
      borderColor: "#e90073"
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderWidth: "2px",
      borderColor: "#e90073"
    }
  }
});