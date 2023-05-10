import {
  Card,
  Typography,
  Grid,
  Box,
  TextField,
  Autocomplete,
  Button,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CakeIcon from "@mui/icons-material/Cake";
import FlagIcon from "@mui/icons-material/Flag";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import TagIcon from "@mui/icons-material/Tag";
import { fakeGeneros } from "../../../../services/Mock";
import { useState } from "react";
import { Modal } from "../../../../components/Modal/Modal";

export function EditProfile() {
   const [openModal, setOpenModal] = useState(false);

  return (
    <Card
      variant="outlined"
      sx={{ width: 700, borderBottomLeftRadius: 0, borderTopLeftRadius: 0 }}
    >
      <Box bgcolor={"var(--main-color)"} sx={{ height: 15 }}></Box>
      <Box padding={3}>
        <Typography variant="h5" textAlign={"center"} marginBottom={4}>
          Editar informações da conta
        </Typography>
        <Grid
          container
          direction={"column"}
          marginBottom={2}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid container alignItems={"end"} justifyContent={"space-between"}>
            <HowToRegIcon sx={{ marginRight: 1, color: "var(--main-color)" }} />
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
              Nome do usuário:
            </Typography>
            <TextField
              autoFocus
              id="real-name"
              label="Nome completo"
              variant="standard"
              sx={{
                width: 300,
              }}
            />
          </Grid>

          <Grid container alignItems={"end"} justifyContent={"space-between"}>
            <AccountCircleIcon
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
              Nome preferencial:
            </Typography>
            <TextField
              id="social-name"
              label="Como prefere ser chamado"
              variant="standard"
              sx={{
                width: 300,
              }}
            />
          </Grid>

          <Grid container alignItems={"end"} justifyContent={"space-between"}>
            <AlternateEmailIcon
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
              Email cadatrado:
            </Typography>
            <TextField
              id="email"
              label="Email cadastrado"
              variant="standard"
              sx={{
                width: 300,
              }}
            />
          </Grid>

          <Grid container alignItems={"end"} justifyContent={"space-between"}>
            <CakeIcon sx={{ marginRight: 1, color: "var(--main-color)" }} />
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
              Data de nascimento
            </Typography>
            <TextField
              id="birthday-date"
              label="Data de nascimento"
              variant="standard"
              sx={{
                width: 300,
              }}
            />
          </Grid>
          <Grid container alignItems={"end"} justifyContent={"space-between"}>
            <TagIcon sx={{ marginRight: 1, color: "var(--main-color)" }} />
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
              Sexo
            </Typography>
            <Autocomplete
              clearOnEscape
              defaultValue={"Indiferente"}
              size="small"
              id="sexo-box"
              options={fakeGeneros}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField variant="standard" {...params} label="Gênero" />
              )}
            />
          </Grid>

          <Grid container alignItems={"end"} justifyContent={"space-between"}>
            <FlagIcon sx={{ marginRight: 1, color: "var(--main-color)" }} />
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
              País ou região:
            </Typography>
            <TextField
              id="country"
              label="Local onde mora"
              variant="standard"
              sx={{
                width: 300,
              }}
            />
          </Grid>
          <Button
            variant="contained"
            onClick={() => setOpenModal(true)}
            sx={{
              marginTop: 3,
              textTransform: "none",
            }}
          >
            Salvar alterações
          </Button>
        </Grid>
      </Box>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        title={"Atenção"}
        subtitle={"Tem certeza que deseja fazer as alteração anteriores?"}
        confirmClick={() => {
          window.alert("Função não implementada");
          setOpenModal(false);
        }}
      />
    </Card>
  );
}
