import {
  FormControl,
  InputLabel,
  Typography,
  Grid,
  Autocomplete,
  TextField,
} from "@mui/material";
import {
  StyledBox,
  StyledSearchbar,
  StyledButton,
  StyledFilterBar,
  StyledCardHeader,
} from "./Searchbar.styles";
import {
  fakeProfissoes,
  fakeEspecialidades,
  fakeValores,
  fakeCidades,
  fakeGeneros,
} from "../../services/Mock";

export function Searchbar() {
  return (
    <Grid>
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
            <StyledButton variant="contained">Procurar</StyledButton>
          </Grid>
        </FormControl>
      </StyledBox>
      <StyledCardHeader></StyledCardHeader>
      <StyledFilterBar
        container
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <Autocomplete
          disablePortal
          defaultValue={"Qualquer tipo"}
          size="small"
          id="especialista-box"
          options={fakeProfissoes}
          sx={{ width: 250 }}
          renderInput={(params) => (
            <TextField {...params} label="Tipo de especialista" />
          )}
        />
        <Autocomplete
          disablePortal
          defaultValue={"Todas"}
          size="small"
          id="especialidade-box"
          options={fakeEspecialidades}
          sx={{ width: 250 }}
          renderInput={(params) => (
            <TextField {...params} label="Especialidades" />
          )}
        />
        <Autocomplete
          disablePortal
          defaultValue={"Indiferente"}
          size="small"
          id="valores-box"
          options={fakeValores}
          sx={{ width: 250 }}
          renderInput={(params) => (
            <TextField {...params} label="Faixa de valor" />
          )}
        />
        <Autocomplete
          disablePortal
          defaultValue={"Todas"}
          id="cidades-box"
          size="small"
          options={fakeCidades}
          sx={{ width: 250 }}
          renderInput={(params) => <TextField {...params} label="Cidade" />}
        />
        <Autocomplete
          disablePortal
          defaultValue={"Indiferente"}
          size="small"
          id="sexo-box"
          options={fakeGeneros}
          sx={{ width: 250 }}
          renderInput={(params) => <TextField {...params} label="Gênero" />}
        />
      </StyledFilterBar>
    </Grid>
  );
}
