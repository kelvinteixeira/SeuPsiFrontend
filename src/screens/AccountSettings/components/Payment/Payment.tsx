import {
  Card,
  Grid,
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Autocomplete,
} from "@mui/material";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PinIcon from "@mui/icons-material/Pin";
import CreditCardIcon from "@mui/icons-material/CreditCard";

export function Payment() {
  const options = ["Crédito", "Débito"];

  return (
    <Card
      component={Paper}
      variant="outlined"
      sx={{ width: 700, borderBottomLeftRadius: 0, borderTopLeftRadius: 0 }}
    >
      <Box bgcolor={"var(--main-color)"} sx={{ height: 15 }}></Box>
      <Box padding={3}>
        <Typography variant="h5" textAlign={"center"} marginBottom={4}>
          Dados de pagamento
        </Typography>

        <Grid
          container
          direction={"column"}
          marginBottom={2}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid container alignItems={"end"} justifyContent={"space-between"}>
            <CreditScoreIcon
              sx={{ marginRight: 1, color: "var(--main-color)" }}
            />
            <Typography
              variant="body2"
              sx={{
                borderBottom: 1,
                borderColor: "gray",
                marginRight: 1,
                width: 300,
                fontWeight: 800,
              }}
            >
              Número do cartão:
            </Typography>
            <TextField
              autoFocus
              id="real-name"
              label="Número composto por 12 digitos"
              variant="standard"
              sx={{
                width: 300,
              }}
            />
          </Grid>
          <Grid container alignItems={"end"} justifyContent={"space-between"}>
            <DriveFileRenameOutlineIcon
              sx={{ marginRight: 1, color: "var(--main-color)" }}
            />
            <Typography
              variant="body2"
              sx={{
                borderBottom: 1,
                borderColor: "gray",
                marginRight: 1,
                width: 300,
                fontWeight: 800,
              }}
            >
              Nome no cartão:
            </Typography>
            <TextField
              autoFocus
              id="real-name"
              label="Impresso como no cartão"
              variant="standard"
              sx={{
                width: 300,
              }}
            />
          </Grid>
          <Grid container alignItems={"end"} justifyContent={"space-between"}>
            <EventAvailableIcon
              sx={{ marginRight: 1, color: "var(--main-color)" }}
            />
            <Typography
              variant="body2"
              sx={{
                borderBottom: 1,
                borderColor: "gray",
                marginRight: 1,
                width: 300,
                fontWeight: 800,
              }}
            >
              Data de vencimento:
            </Typography>
            <TextField
              autoFocus
              id="real-name"
              label="Apenas mês e ano"
              variant="standard"
              sx={{
                width: 300,
              }}
            />
          </Grid>
          <Grid container alignItems={"end"} justifyContent={"space-between"}>
            <PinIcon sx={{ marginRight: 1, color: "var(--main-color)" }} />
            <Typography
              variant="body2"
              sx={{
                borderBottom: 1,
                borderColor: "gray",
                marginRight: 1,
                width: 300,
                fontWeight: 800,
              }}
            >
              Código de segurança:
            </Typography>
            <TextField
              autoFocus
              id="real-name"
              label="Número de 3 digitos no verso"
              variant="standard"
              sx={{
                width: 300,
              }}
            />
          </Grid>
          <Grid container alignItems={"end"} justifyContent={"space-between"}>
            <CreditCardIcon
              sx={{ marginRight: 1, color: "var(--main-color)" }}
            />
            <Typography
              variant="body2"
              sx={{
                borderBottom: 1,
                borderColor: "gray",
                marginRight: 1,
                width: 300,
                fontWeight: 800,
              }}
            >
              Tipo do cartão
            </Typography>
            <Autocomplete
              clearOnEscape
              size="small"
              id="sexo-box"
              options={options}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField variant="standard" {...params} label="Selecione" />
              )}
            />
          </Grid>
        </Grid>
        <Grid container justifyContent={"center"}>
          <Button variant="contained">Cadastrar cartão</Button>
        </Grid>
      </Box>
    </Card>
  );
}
