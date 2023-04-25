import {
  FormControl,
  InputLabel,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import { StyledBox, StyledSearchbar, StyledButton } from "./Searchbar.styles";

export function Searchbar() {
  return (
    <StyledBox
      direction={"column"}
      container
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography
        variant="body1"
        fontSize={22}
        fontWeight={800}
        marginBottom={3}
      >
        Encontre seu especialista
      </Typography>
      <FormControl variant="outlined">
        <Grid container>
          <InputLabel htmlFor="barra-de-pesquisa">Pesquise aqui</InputLabel>
          <StyledSearchbar
            id="barra-de-pesquisa"
            label="Pesquise aqui"
            placeholder="Pesquise pelo nome do especialista ou áreas de atuação"
          />
          <StyledButton
            variant="contained"
          >
            Procurar</StyledButton>
        </Grid>
      </FormControl>
    </StyledBox>
  );
}
